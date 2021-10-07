//array --> variável com subdivisões (índices)
    let doramas = ["img/squid-game.jpg","img/alice-in-borderland.jpg","img/extra-curricular.jpg","img/girl-from.jpg","img/sweet-home.jpg","img/itaewon-class.jpg"]

function CarregarDoramas(){
    let totalDoramas = doramas.length
    let divListaDoramas = document.querySelector(".lista-doramas")

    divListaDoramas.innerHTML = ""
    //laço de repetição
    for(let i = 0 ; i < totalDoramas ; i++){
        divListaDoramas.innerHTML += ",img src="+ doramas[i] + ">"
    }
}

function AdicionarDoramas(){
    let nomeDorama = document.querySelector("#nome-do-dorama").value
    let caminhoCompleto = "img/" + nomeDorama

    doramas.push(caminhoCompleto)
    CarregarDoramas()

    console.table(doramas)
}