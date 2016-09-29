/**
 * Created by GABRIEL on 28/09/2016.
 */
//Create Jobs
var CronJob = require('cron').CronJob;
var notifications = require('./pushNotifications');

var sampleOneJob = new CronJob('00 01 22 * * 1-5', function() {
        notifications.sendSampleOneNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);

var sampleTwoJob = new CronJob('00 02 22 * * 1-5', function() {
        notifications.sendSampleTwoNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);

var sampleThreeoJob = new CronJob('00 03 22 * * 1-5', function() {
        notifications.sendSampleThreeNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);