function converter(){
    let origem = document.getElementById("escolhaOrigem").value;
    let destino = document.getElementById("escolhaDestino").value;
    let valor = parseFloat(document.getElementById("quantidade").value);
    let taxa = 0

    if (origem === destino){
        taxa = 1;
    } else {
        if (origem === "dolarOrigem" && destino === "realDestino") {
            taxa = 4.99;
        } else if (origem === "realOrigem" && destino === "dolarDestino") {
            taxa = 0.18;
        } else if (origem === "euroOrigem" && destino === "realDestino"){
            taxa = 5.43;
        } else if (origem === "realOrigem" && destino === "euroDestino"){
            taxa = 0.14;
        } else if (origem === "dolarOrigem" && destino === "euroDestino"){
            taxa = 0.83;
        } else if (origem === "euroOrigem" && destino === "dolarDestino"){
            taxa = 1.20;
        }
    }

    let valorConvertido = taxa * valor;

    document.getElementById("resposta").innerText = valorConvertido.toFixed(2)
}
