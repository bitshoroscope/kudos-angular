const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/* exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
}); */

const users = ['andy', 'homer', 'bart', 'lisa']
const messages = ['Thank you so much for your effort, it was awesome!', 'I liked that feature you implemented, cool!',
    'Thx for giving the extra mile!', 'Feeling blessed you are here!!', 'You rock!!', 'Cheers on your new position!!'
]
start = new Date(2019, 0, 1)
end = new Date()

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

/*
    Generate a random kudo from the users and messages list
*/
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

/* 
    Functions to reset the kudos for all users, it could be specified on crontab form o text like this:
    - text way: .schedule('every 2 minutes')
    - crontab entry: .schedule('0 5 * * 1') -> Every monday at 5 am
    The local Firebase emulators don't currently support pubsub. 
    So for the moment, you can't run pubsub triggered Cloud Functions locally.
    Reference: https://firebase.google.com/docs/functions/schedule-functions
*/
exports.scheduledFunctionCrontab = functions.pubsub.schedule('every 2 minutes')
    .timeZone('America/New_York')
    .onRun(async(context) => {
        const writeResult = await admin.firestore().collection('users').get().then(async(querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                doc.ref.update({
                    kudosLeft: 3
                });
            });
        });
    });

exports.createUsers = functions.https.onRequest(async(req, res) => {
    const writeResult = await admin.firestore().collection('users').add({
        name: randomize(users),
        kudosLeft: Math.floor(Math.random() * 10)
    });
    // Send back a message that we've successfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});