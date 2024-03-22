function inserir_mapa() {
    let selecionar_mapa = document.getElementById("selecionar_mapa");
    console.log(selecionar_mapa);
    
    let imagem = document.getElementById("imagem");
    console.log(imagem);
    imagem.src = "mapas/" + selecionar_mapa.value + ".gif"

   
}

