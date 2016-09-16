/**
 * Created by GABRIEL on 21/07/2016.
 */

var userGeolocation = require('./model/userGeolocation.model');
var user = require('./model/user.model');
var sampleOne = require('./model/sampleOne.model');
var sampleTwo = require('./model/sampleTwo.model');
var sampleThree = require('./model/sampleThree.model');
var problem = require('./model/problem.model');
var loc = require('./model/location.model');
var logger = require(__dirname + '/../utils/logger');


exports.welcomeAPI = function (req, res) {
    logger.log('info', 'Recipe API called!');
    res.json({message: 'Welcome to Recipe API!'});
}

exports.addProblem = function (req, res) {
    var locToAdd = new loc({
        name: req.body.place,
        location: {coordinates: [req.body.longitude, req.body.latitude]}
    });
    var problemToSave = new problem({
        place: req.body.place,
        placeOther: req.body.placeOther,
        problem: req.body.problem,
        problemOther: req.body.problemOther,
        detail: req.body.detail,
        loc: locToAdd,
        userEmail: req.body.userEmail
    });
    logger.log('info', 'addProblem called!');
    problemToSave.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(problemToSave);

}

exports.addUserGeolocation = function (req, res) {
    var locToAdd = new loc({
        name: req.body.place,
        location: {coordinates: [req.body.longitude, req.body.latitude]}
    });
    var userGeo = new userGeolocation({
        userEmail: req.body.userEmail,
        loc: locToAdd
    });
    logger.log('info', 'addUserGeolocation called!');
    userGeo.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(userGeo);

}

exports.addSampleOne = function (req, res) {
    var locToAdd = new loc({
        name: req.body.place,
        location: {coordinates: [req.body.longitude, req.body.latitude]}
    });
    var sample = new sampleOne({
        place: req.body.place,
        placeOther: req.body.placeOther,
        doing: req.body.doing,
        isWorkingWithSomeone: req.body.isWorkingWithSomeone,
        isWorkingWith: req.body.isWorkingWith,
        isWorkingWithSomeoneOther: req.body.isWorkingWithSomeoneOther,
        feeling: req.body.feeling,
        feelingPositive: req.body.feelingPositive,
        feelingNegative: req.body.feelingNegative,
        loc: locToAdd,
        userEmail: req.body.userEmail
    });
    logger.log('info', 'addSampleOne called!');
    sample.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(sample);


}

exports.addSampleTwo = function (req, res) {
    var locToAdd = new loc({
        name: req.body.place,
        location: {coordinates: [req.body.longitude, req.body.latitude]}
    });
    var sample = new sampleTwo({
        didLookForInformation: req.body.didLookForInformation,
        informationSearched: req.body.informationSearched,
        findWhatNeeded: req.body.findWhatNeeded,
        placeFoundInformation: req.body.placeFoundInformation,
        personWhoGaveInformation: req.body.personWhoGaveInformation,
        isWorkingWithSomeoneOther: req.body.isWorkingWithSomeoneOther,
        communicationToolUsed: req.body.communicationToolUsed,
        communicationToolUsedOther: req.body.communicationToolUsedOther,
        loc: locToAdd,
        userEmail: req.body.userEmail
    });
    logger.log('info', 'addSampleTwo called!');
    sample.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(sample);

}

exports.addSampleThree = function (req, res) {
    var locToAdd = new loc({
        name: req.body.place,
        location: {coordinates: [req.body.longitude, req.body.latitude]}
    });
    var sample = new sampleThree({
        sharedInformation: req.body.sharedInformation,
        whoWithSharedInformation: req.body.whoWithSharedInformation,
        informationPersonNeeded: req.body.informationPersonNeeded,
        communicationToolUsed: req.body.communicationToolUsed,
        communicationToolUsedOther: req.body.communicationToolUsedOther,
        loc: locToAdd,
        userEmail: req.body.userEmail
    });
    logger.log('info', 'addSampleThree called!');
    sample.save(function (err) {
        if (!err) {
            return console.log("created");
        } else {
            return console.log(err);
        }
    });
    return res.send(sample);

}


exports.addUser = function (req, res) {

    logger.log('info', 'addUser findOne called!');
    user.findOne({email: req.body.email}, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (!result) {
            console.log("did not found user")


            var userToSave = new user({
                name: req.body.name,
                email: req.body.email,
                date: req.body.date
            });
            logger.log('info', 'addUser called!');
            userToSave.save(function (err) {
                if (!err) {
                    return console.log("created");
                } else {
                    return console.log(err);
                }
            });
            return res.send(userToSave);
        } else {
            return res.send();
        }
    });
}


exports.getProblemsNearOneKm = function (req, res) {
    console.log(req.query);
    problem.aggregate(
        [
            {
                "$geoNear": {
                    "near": {
                        "type": "Point",
                        "coordinates": [ req.query.longitude , req.query.latitude]
                    },
                    "distanceField": "distance",
                    "spherical":  true,
                    "maxDistance":  10000
                }
            }
        ],
        function (err, results) {
            if (err) {
                console.log(err);
                throw err;
            }
            res.send(results);
        }

    )

}


