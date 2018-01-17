var form = $('#form');

form.submit(function(e) {

    e.preventDefault();

    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {
            addHistoryItem(data.number, data.result)
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