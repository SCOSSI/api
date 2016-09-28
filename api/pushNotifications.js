/**
 * Created by GABRIEL on 28/09/2016.
 */
var onesignal = require('node-opensignal-api');
var onesignal_client = onesignal.createClient();

var restApiKey = 'MzRiODZlNGQtZTAzZi00OGViLWE4ODctN2I0ZmE0OTJjZTE1';
var appKey = '1ce04ea6-ba67-44b1-b6de-8ce49fc19659'

exports.sendSampleOneNotification = function () {

};

exports.sendSampleTwoNotification = function () {

};

exports.sendSampleThreeNotification = function () {
    console.log("chamou");
    var params = {
        app_id: appKey,
        contents: {
            'en': 'Notification body',
            'es': 'Cuerpo de la notificación'
        },
        tags: [{ "key": "custom_tag", "relation": "=", "value": "custom_value"}]
    };
    onesignal_client.notifications.create(restApiKey, params, function (err, response) {
        if (err) {
            console.log('Encountered error', err);
        } else {
            console.log("enviou");
            console.log(response);
        }
    });
};