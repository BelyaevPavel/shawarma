/**
 * Created by paul on 23.07.17.
 */
$(document).ready(function () {
    jQuery.datetimepicker.setLocale('ru');
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();
});

function UpdateStatistics() {
    var start_datetime = $('#datetimepicker1').val();
    var end_datetime = $('#datetimepicker2').val();
    $.ajaxSetup({
        beforeSend: function (xhr, settings) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken)
        }
    });
    $.ajax({
            type: 'POST',
            url: $('#urls').attr('data-update-statistics-url'),
            data: {
                "start_date": start_datetime,
                "end_date": end_datetime,
            },
            dataType: 'json',
            success: function (data) {
                $('#page-content').html(data['html']);
            },
            complete: function () {

            }
        }
    ).fail(function () {
        alert('У вас нет прав!');
    });
}