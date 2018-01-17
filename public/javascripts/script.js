var form = $('#form');

form.submit(function(e) {

    e.preventDefault();

    $.ajax({
        type: "post",
        url: "http://localhost:3000/findNumber",
        data: form.serialize(),
        success: function(data) {
            addHistoryItem(data.number, data.result)
        },
        error: function(data) {
            console.log('An error occurred.');
            console.log(data);
        }
    });
});

function addHistoryItem(numberToCheck, resultOfCheck) {

    if (resultOfCheck === 'Perfect') {
        document.getElementById('history__list').innerHTML +=
            '<li class="perfect"><div class="history__log"><p>' + numberToCheck + ' - ' + resultOfCheck + '!</p></div></li>';
    } else {
        document.getElementById('history__list').innerHTML +=
            '<li><div class="history__log"><p>' + numberToCheck + ' - ' + resultOfCheck + '!</p></div></li>';
    }

}