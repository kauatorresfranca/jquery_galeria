$(document).ready(function(){
    
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const imgNova = $('#endereco-img-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${imgNova}"/>`).appendTo(novoItem)
        $(`<div class="overlay-img"> <a href="${imgNova}" target="_blank" title="ver imagem de tamanho real">ver imagem em tamanho real</a></div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000)
        $('#endereco-img-nova').val('')
    })
})