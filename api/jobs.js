/**
 * Created by GABRIEL on 28/09/2016.
 */
//Create Jobs
var CronJob = require('cron').CronJob;
var notifications = require('./pushNotifications');
var job = new CronJob('30 45 20 * * 1-5', function() {
        notifications.sendSampleThreeNotification();
        console.log("call sample");
    }, function () {
        /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    'America/Sao_Paulo' /* Time zone of this job. */
);