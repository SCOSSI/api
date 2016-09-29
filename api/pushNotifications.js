/**
 * Created by GABRIEL on 28/09/2016.
 */


var restApiKey = "MzRiODZlNGQtZTAzZi00OGViLWE4ODctN2I0ZmE0OTJjZTE1";
var appKey = "1ce04ea6-ba67-44b1-b6de-8ce49fc19659";

var sendNotification = function(data) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic "+restApiKey
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    var https = require('https');
    var req = https.request(options, function(res) {
        res.on('data', function(data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function(e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
};

exports.sendSampleOneNotification = function () {
    var message = {
        app_id: appKey,
        headings: {"en": "Sample One", "pt": "Amostra Um"},
        contents: {"en": "Please, complete the sample!", "pt": "Por favor, complete a amostra!"},
        included_segments: ["All"],
        data: {"modal":"sampleOne"}
    };

    sendNotification(message);
};

exports.sendSampleTwoNotification = function () {
    var message = {
        app_id: appKey,
        headings: {"en": "Sample Two", "pt": "Amostra Dois"},
        contents: {"en": "Please, complete the sample!", "pt": "Por favor, complete a amostra!"},
        included_segments: ["All"],
        data: {"modal":"sampleTwo"}
    };

    sendNotification(message);

};

exports.sendSampleThreeNotification = function () {
    var message = {
        app_id: appKey,
        headings: {"en": "Sample Three", "pt": "Amostra Três"},
        contents: {"en": "Please, complete the sample!", "pt": "Por favor, complete a amostra!"},
        included_segments: ["All"],
        data: {"modal":"sampleThree"}
    };

    sendNotification(message);
};



