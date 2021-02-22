require('dotenv').config();

function sendSMS(number) {
    var trial = "+12159874772";
    var my_number = number
    // tHIS AuthToken is not valid :p

    const accountSID = process.env.accountSID;
    const authToken = process.env.authToken;

    const client = require("twilio")(accountSID, authToken);

    client.messages.create({
        to: my_number,
        from: trial,
        body: "Your Stuff are being delivering !"
    })
        .then((message) => console.log(message.sid))
}

module.exports = async function(context, mySbMsg) {
    console.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
    sendSMS(mySbMsg)
    context.log('JavaScript ServiceBus queue trigger function processed message', mySbMsg);
};