function CarregarDoramas(){
    //array --> variável com subdivisões (índices)
    let doramas = ["img/squid-game.jpg","img/alice-in-borderland.jpg","img/extra-curricular.jpg","img/girl-from.jpg","img/sweet-home.jpg","img/itaewon-class.jpg"]

    let totalDoramas = doramas.length

    //laço de repetição
    for(let i = 0 ; i < totalDoramas ; i++){
        document.querySelector(".lista-doramas").innerHTML += "<img src="+ doramas[i] + ">"
    }
}