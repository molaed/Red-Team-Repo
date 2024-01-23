const db = require('../firebaseConfig');

exports.getAllEvents = async (req, res) => {
  try {
    const eventsSnapshot = await db.collection('events').get();
    const events = [];
    eventsSnapshot.forEach(doc => {
      events.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events: ", error);
    res.status(500).send("Error fetching events");
  }
};
