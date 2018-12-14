    // Função
    function mudarTexto () {
        console.log("mudou o texto!");
        // Comentário
        var nome = "Mário";
        document.getElementById('myHead').innerHTML = 'Meu nome é ' + nome;
        document.getElementById('demo').innerHTML = 'Essa é a inicialização!';
    }
    function ligar (){
        console.log("ligou a lampada!");
        document.getElementById('myImage').src='pic_bulbon.gif'
    }
    function desligar () {
        console.log("desligar a lampada!");
        document.getElementById('myImage').src='pic_bulboff.gif'
    }
    function alerta () {
        var x = window.confirm("Olá, essa é a minha janela chata!");
        if (x === true){
            console.log("Aceitou!");
        }else{
            console.log('Recusou!');
        }
    }
    function entrada () {
        var x = window.prompt("Nome: ", "");
        console.log(x * 2);
        window.alert('Dobro: ' + x * 2)
    }