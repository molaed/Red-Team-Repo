const  db = require('../firebaseConfig');
const admin = require('firebase-admin');
const { doc, setDoc, getDoc } = require('firebase/firestore');

// User registration and role assignment
exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const userRecord = await auth.createUser({ email, password });
    await setDoc(doc(db, 'users', userRecord.uid), { email, role });
    res.status(201).json({ success: true, uid: userRecord.uid });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// User login and role retrieval
exports.loginUser = async (req, res) => {
  console.log("Login request received", req.body);
  const { email, password, role } = req.body;
  console.log("Login request received", email, password, role);
  try {
    // Authenticate the user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Retrieve additional user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', uid));
    console.log("User data", userDoc.data());
    if (!userDoc.exists()) {
      throw new Error('User data not found in Firestore');
    } 
    const userData = userDoc.data();
    console.log("User data retrieved", userData);

    // Respond with user data including role
    res.json({ success: true, user: { uid, email, ...userData } });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};


exports.verifyToken = async (req, res) => {
  console.log("Login token received", req.body);
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log("Decoded token", decodedToken);
    const user_id = decodedToken.uid;

    try {
      const userDocRef = db.collection('users').doc(user_id);
      const userDoc = await userDocRef.get();

      if (!userDoc.exists) {
        console.log("User not found");
        throw new Error('User not found');
      }
      const userData = userDoc.data();
      console.log("User data retrieved", userData);
      console.log("User role", userData.role);

      res.json({ success: true, user: userData });
    } catch (dbError) {
      console.error("Firestore error:", dbError);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } catch (authError) {
    console.error("Authentication error:", authError);
    res.status(401).json({ success: false, message: authError.message });
  }
};
