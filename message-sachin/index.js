function sendSMS(number) {
    var trial = "+12159874772";
    var my_number = number
    // tHIS AuthToken is not valid :p

    const accountSID = "AC1e2e019200dc1f1f2493c2cfc871919d";
    const authToken = "b1eb8ae454739aa0a76a178aa9a9348f";

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