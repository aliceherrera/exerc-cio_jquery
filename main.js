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
        const divItem = $('<div class="item"></div>');
        const novoItem = $('<li></li>');
        $(`<p>${input}</p>`).appendTo(novoItem);
        $(novoItem).appendTo(divItem);
        $(divItem).appendTo('ul');

        $(`#new_task`).val('');
    })


    $('ul').on('click', '.item', function () {
        $(this).toggleClass('stroked');
    })
})