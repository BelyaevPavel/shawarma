/**
 * Created by paul on 12.07.17.
 */
function ReadyOrder(id) {
    var url = $('#urls').attr('data-ready-url');
    var confirmation = confirm("Is order ready?");
    if (confirmation) {
        console.log(id + ' ' + url);
        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken)
            }
        });
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                'id': id
            },
            dataType: 'json',
            success: function (data) {
                if (data['success']) {
                    alert('Success!');
                }
            },
            complete: function () {
                location.reload();
            }
        });
    }
}

function PrintOrder(order_id) {
    var url = '/queue/order/print/'+order_id+'/';
    window.open(url, 'Печать заказа ' + order_id)
}

function CancelItem(id) {
    var url = $('#urls').attr('data-cancel-item-url');
    var confirmation = confirm("Cancel item?");
    if (confirmation) {
        console.log(id + ' ' + url);
        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken)
            }
        });
        $.ajax({
            type: 'POST',
            url: url,
            data: {
                'id': id
            },
            dataType: 'json',
            success: function (data) {
                if (data['success']) {
                    alert('Success!');
                }
            },
            complete: function () {
                location.reload();
            }
        });
    }
}


function FinishCooking(id) {
    var url = $('#urls').attr('data-finish-item-url');
    console.log(id + ' ' + url);
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken)
        }
    });
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            'id': id
        },
        dataType: 'json',
        success: function (data) {
            alert('Выполнено!' + data);
        },
        complete: function () {
            location.reload();
        }
    });
}