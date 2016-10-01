/**
 * Created by GABRIEL on 28/09/2016.
 */
//Create Jobs
var CronJob = require('cron').CronJob;
var notifications = require('./pushNotifications');

var sampleOneJob = new CronJob('00 20 12 * * 1-7', function() {
        notifications.sendSampleOneNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);

var sampleTwoJob = new CronJob('00 21 12 * * 1-7', function() {
        notifications.sendSampleTwoNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);

var sampleThreeoJob = new CronJob('00 22 12 * * 1-7', function() {
        notifications.sendSampleThreeNotification();

    }, function () {
        console.log("Sample Three could't be send.")
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);