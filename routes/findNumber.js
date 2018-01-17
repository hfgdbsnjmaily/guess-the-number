var express = require('express');
var router = express.Router();
var path = require('path');

var randomNumber;
var resultOfCheck;

function randomNumber() {
    this.randomNumber = Math.floor((Math.random() * 10000) + 1);
    console.log(this.randomNumber);
}

function checkNumber(numberToCheck) {
    if (numberToCheck < this.randomNumber) {
        resultOfCheck = 'too low... Try again';
    } else if (numberToCheck == this.randomNumber) {
        resultOfCheck = 'Perfect';
    } else if (numberToCheck > this.randomNumber) {
        resultOfCheck = 'too high... Try again';
    }
}

router.get('/', function(req, res, next) {
    randomNumber();
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

router.post('/', function(req, res, next) {

    var numberToCheck = req.body.numberToCheck;
    checkNumber(numberToCheck);

    res.json({
        number: numberToCheck,
        result: resultOfCheck
    });
});

module.exports = router;