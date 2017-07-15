/**
 * Created by paul on 10.07.17.
 */
$(document).ready(function () {
    $('#cook_interface').addClass('active');
    AdjustLineHeight();
    GrillRefresher();
    NextRefresher();
});
$(window).resize(AdjustLineHeight);


function GrillRefresher() {
    var url = $('#urls').attr('data-grill-timer-url');
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken)
        }
    });
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        success: function (data) {
            $('div.in-grill-container').html(data['html']);
        },
        complete: function () {
            setTimeout(GrillRefresher, 10000);
        }
    });
}

function NextRefresher() {
    var url = $('#urls').attr('data-next-url');
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken)
        }
    });
    $.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        success: function (data) {
            $('div.next-to-prepare-container').html(data['html']);
        },
        complete: function () {
            setTimeout(NextRefresher, 10000);
        }
    });
}


function AdjustLineHeight() {

}

function TakeItem(id) {
    var url = $('#urls').attr('data-take-url');
    var confirmation = confirm("Take item?");
    if (confirmation) {
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
                else {
                    alert('Already taken by ' + data['staff_maker'] + '!');
                }
            },
            complete: function () {
                location.reload();
            }
        });
    }

}

function ItemToGrill(id) {
    var url = $('#urls').attr('data-grill-url');
    var confirmation = confirm("Grill item?");
    if (confirmation) {
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
                alert('Success!' + data);
            },
            complete: function () {
                location.reload();
            }
        });
    }
}

function FinishItemCooking(id) {
    var url = $('#urls').attr('data-finish-url');
    var confirmation = confirm("Finish item?");
    if (confirmation) {
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
                alert('Success!' + data);
            },
            complete: function () {
                location.reload();
            }
        });
    }
}