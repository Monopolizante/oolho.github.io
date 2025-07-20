var resposta = [
    "sangue", 
    "morte", 
    "conhecimento", 
    "medo", 
    "energia", 
    "o olho da providencia", 
    "olho da providencia"
];
var enigma = document.querySelector(".enigma");
var numerosDeEnigmas = 1
document.querySelector(".numeros").textContent = "1/5"
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


function checkarResposta(){
    var inputResposta = document.querySelector(".resposta");
    var input = normalizar(inputResposta.value.trim());
    var numerosDeEnigmas = 1
    var numeroPai = document.querySelector(".numeros");
    
    
    var textoNumero = "/5"

    if (input == resposta[0]){
        enigma.textContent = `-. .- --- / -. .- ... -.-. --- --..-- / -- .- ... / ... . -- .--. .-. . / ...- . -. .... --- .-.-.- / / ... --- ..- / - --- --.- ..- . / ... . -- / .--. . .-.. . --..-- / / . / .--. --- .-. - .- / ... . -- / .-. . - --- .-. -. --- .-.-.- / / ... .. .-.. . -. -.-. .. --- / - ..- -.. --- --..-- / -- .- ... / -. .- --- / ..-. .- .-.. .-
`
            numerosDeEnigmas=1;
            numeroPai.textContent = numerosDeEnigmas + textoNumero
    }

    else if(input === resposta[1]){
        enigma.textContent = `Ragen frz cbegn,
        dhrvzn frz punzn.
        Perfpr rz dhrz qhivqn,
        r fr rfpbaqr rz dhrz when.
        Fnor qrznvf, znf ahapn snyn.
        Dhrz zr pneertn, ahapn é b zrfzb.
        R dhrz zr erphfn, wá zr grzr. - 13`
        numerosDeEnigmas=2;
        numeroPai.textContent = numerosDeEnigmas + textoNumero
        
    }

    else if(input === resposta [2]){
        enigma.textContent = `Spw a qtitãq sfo gscdfu,
        e p irjvo qtetq np rejvo.
        Rwen oe eqmjpa, gqgf qu utawc.
        Qvgm ng eohrfptb, uoctewkvf - abc`
        numerosDeEnigmas=3;
        numeroPai.textContent = numerosDeEnigmas + textoNumero
    }

    else if (input === resposta [3]) {
        enigma.textContent = `Uos a aforç abtur e o rousruss clutoo,
    geusna lvisíniqe upals on odmun.
    Qumieo mes saamhc, rocor sem soaps,
    sou droep euq fimnala e oleg euq tcorá.
    Em snihaam saive, o ismsípolve é ale r
    e qmue em anidom, dalom o otdesni.

`
        numerosDeEnigmas= 4;
        numeroPai.textContent = numerosDeEnigmas + textoNumero
    }

    else if (input === resposta[4]) {
        document.querySelector(".container").classList.add("escuro");
        document.querySelector(".btn").classList.add("textoClaro");
        document.querySelector(".enfase").classList.add("textoClaro");
        inputResposta.classList.add("textoClaro");
        enigma.classList.add("textoClaro");
        numerosDeEnigmas= 5;
        numeroPai.textContent = numerosDeEnigmas + textoNumero
        numeroPai.classList.add("textoClaro")

        enigma.textContent = `Eu vigio além do véu e do tempo,
        um olhar que tudo devora e nada perdoa.
        Sem rosto, sem sombra, sou a sentença invisível,
        punho que molda o destino dos tolos e sábios.
        Segredos caem sob minha luz que queima,
        pois quem me encara, já está marcado —
        e não há fuga do meu juízo eterno.`
    }

    else if (input === resposta[5] || input === resposta [6]) {
        document.querySelector(".container").classList.remove("escuro");
        document.querySelector(".btn").classList.add("erro");
        document.querySelector(".enfase").classList.add("erro");
        inputResposta.classList.add("erro");
        enigma.classList.remove("textoClaro");
        document.querySelector(".linkFinal").classList.remove("erro")
        enigma.textContent = "Parabéns"
        numerosDeEnigmas = 0
        numeroPai.textContent = numerosDeEnigmas + "/?"
    }
    else  {
        document.querySelector(".container").classList.add("erro");
    }

}