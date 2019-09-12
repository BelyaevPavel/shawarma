/**
 * Created by paul on 10.07.17.
 */
$(document).ready( function () {
    $('#current-queue').addClass('active');
    refresher();
}
);

function refresher() {
    $.ajax({
        url: 'ajax/current_queue_ajax.html',
        success: function (data) {
            $('div.page-content').html(data['html']);
            console.log('refreshed');
            console.log(data['html']);
        },
        complete: function () {
            setTimeout(refresher, 3000);
        }
    });
}

function CloseOrder(order_id) {
    var confirmation = confirm("Закрыть заказ?");
    if (confirmation == true) {
        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken)
            }
        });
        $.ajax({
                type: 'POST',
                url: $('#urls').attr('data-close-order-url'),
                data: {"order_id": order_id},
                dataType: 'json',
                success: function (data) {
                    alert('Заказ закрыт!');
                },
                complete: function () {
                    location.reload();
                }
            }
        ).fail(function () {
            alert('У вас нет прав!');
        });
    }
    else {
        event.preventDefault();
    }
}

function PrintOrder(order_id) {
    var url = '/queue/order/print/'+order_id+'/';
    window.open(url, 'Печать заказа ' + order_id);
}

function CancelOrder(order_id) {
    var confirmation = confirm("Отменить заказ?");
    if (confirmation == true) {
        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken)
            }
        });
        $.ajax({
                type: 'POST',
                url: $('#urls').attr('data-cancel-order-url'),
                data: {"order_id": order_id},
                dataType: 'json',
                success: function (data) {
                    alert('Заказ отменён!');
                },
                complete: function () {
                    location.reload();
                }
            }
        ).fail(function () {
            alert('У вас нет прав!');
        });
    }
    else {
        event.preventDefault();
    }
}
