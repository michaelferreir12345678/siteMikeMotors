$(document).ready(function(){

    // Inicializacao do Carousel 
    $('#carousel-images').slick({
        autoplay: true,
    })

    // Colocando uma funcao para o botao hambuguer do Nav para mostrar e esconder o menu com o clique
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    // Colocando uma mascara no campo do telefone do formulario    
    $('#telefone').mask('(00) 00000 - 0000', {
        placeholder: '(  ) '
    })

    // Colocando validacoes obrigatorias nos campos do formulario
    $('form').validate({
        rules:{ 
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteressa: {
                required: false
            }
            
}, messages:{
    nome: 'Por favor, insira seu nome.'
}, submitHandler: function(form) {
    console.log(form)
}, invalidHandler: function(evento, validador){
    let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos){
            alert (`Existem ${camposIncorretos} campos incorretos`)
        }
}
})

/*Adcionando a funcao de que quando clicar no botao 'tenho interesse' role a paginca para 
o formulario e no campo 'veiculo de interesse' seja preenchido com o nome do carro */
$('.lista-veiculos button').click(function(){
    // Recuperando o nome do carro e colocando-o no formulario
    const nomeVeiculo = $(this).parent().find('h3').text();
    $('#veiculo-interesse').val(nomeVeiculo);

    // Inserindo a funcao de rolar a pagina ate o formulario
    const destino = $('#contato');
    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})

})