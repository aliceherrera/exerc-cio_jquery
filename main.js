$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel_button').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const input = $('#new_task').val();
        console.log(input);
        const novoItem = $('<li></li>');
        $(`<p>${input}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(`#new_task`).val('');
    })

    $('.item').click(function () {
        $('li').toggleClass('stroked');
    })
})