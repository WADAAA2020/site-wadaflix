function CarregarDoramas(){
    //array --> variável com subdivisões (índices)
    let doramas = ["img/squid-game.jpg","img/alice-in-borderland.jpg","img/extra-curricular.jpg","img/girl-from.jpg","img/sweet-home.jpg","img/itaewon-class.jpg"]

    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1){
        document.querySelector(".lista-doramas").innerHTML += "<img src="+ doramas [controle] + ">"
    }
}