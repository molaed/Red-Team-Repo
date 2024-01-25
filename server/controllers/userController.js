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

    // Check if the input role matches the role in Firestore
    if (userData.role !== inputRole) {
      throw new Error('Role mismatch');
    }
    // Respond with user data including role
    res.json({ success: true, user: { uid, email, ...userData } });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

exports.verifyToken = async (req, res) => {
    console.log("Login token received", req.body);
    const { idToken, role } = req.body;
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      console.log("Decoded token", decodedToken);
      const uid = decodedToken.user_id;
      console.log("User ID", uid);

      // Retrieve user data from the database
      const userDoc = await doc(db, 'users', uid);
      console.log("User data", userDoc.data());
      if (!userDoc.exists()) {
        console.log("User not found");
        throw new Error('User not found');
      }

      const userData = userDoc.data();
      console.log("User data retrieved", userData);
      // Check if the user's role matches
      if (userData.role !== role) {
        console.log("Role mismatch");
        throw new Error('Role mismatch');
      }

      res.json({ success: true, user: userData });

      } catch (error) {
      res.status(401).json({ success: false, message: error.message });
      }
};
