const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});

const users = ['andy', 'homer', 'bart', 'lisa']
const messages = ['Thank you so much for your effort, it was awesome!', 'I liked that feature you implemented, cool!',
    'Thx for giving the extra mile!', 'Feeling blessed you are here!!', 'You rock!!', 'Cheers on your new position!!'
]
start = new Date(2019, 0, 1)
end = new Date()


// Generate a random kudo from the users and messages list
exports.scramble = functions.https.onRequest(async(req, res) => {
    // Push the new message into Firestore using the Firebase Admin SDK.
    let giver = randomize(users)
    const writeResult = await admin.firestore().collection('kudos').add({
        message: randomize(messages),
        giver: giver,
        receiver: chooseReceiver(giver, users),
        date: randomDate(start, end),
        type: 1
    });
    // Send back a message that we've successfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

let randomize = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

let chooseReceiver = (giver, users) => {
    let receiver = randomize(users)
    do {
        receiver = randomize(users)
    } while (giver == receiver)
    return receiver
}

let randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}