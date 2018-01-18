var lowestNumber = 1;
var highestNumber = 10000;
var numberToCheck = Math.floor((Math.random() * highestNumber) + 1);

function guessTheNumber(previousNumber, resultOfCheck) {

    if (resultOfCheck === 'too low') {

        this.lowestNumber = previousNumber + 1;
        this.numberToCheck = Math.floor(Math.random() * (this.highestNumber - this.lowestNumber + 1) + this.lowestNumber);

        sendPost();

    } else if (resultOfCheck === 'too high') {
        this.highestNumber = previousNumber - 1;
        this.numberToCheck = Math.floor(Math.random() * ((this.highestNumber - 1) - this.lowestNumber + 1) + this.lowestNumber);

        sendPost();
    }
}

function sendPost() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/findNumber",
        data: { numberToCheck: numberToCheck },
        success: function(data) {

            addHistoryItem(data.number, data.result);

            guessTheNumber(parseInt(data.number), data.result);

        },
        error: function(data) {
            console.log('An error occurred.');
            console.log(data);
        }
    });
}

function addHistoryItem(numberToCheck, resultOfCheck) {

    if (resultOfCheck === 'Perfect') {
        document.getElementById('history__list').innerHTML +=
            '<li class="perfect"><div class="history__log"><p>' + numberToCheck + ' - ' + resultOfCheck + '!</p></div></li>';
    } else {
        document.getElementById('history__list').innerHTML +=
            '<li><div class="history__log"><p>' + numberToCheck + ' - ' + resultOfCheck + '!</p></div></li>';
    }
}

sendPost();