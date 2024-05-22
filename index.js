const nomeDoHeroi = ("Miss Line");
let xpDoHeroi = "3992";
let classificaçaoDoHeroi = "";

switch (true) {
    case xpDoHeroi <= 1000:
    classificaçaoDoHeroi = "Ferro"
    break

    case xpDoHeroi >= 1001 && xpDoHeroi <= 2000:
    classificaçaoDoHeroi = "Bronze"
    break

    case xpDoHeroi >= 2001 && xpDoHeroi <= 5000:
    classificaçaoDoHeroi = "Prata"
    break

    case xpDoHeroi >= 5001 && xpDoHeroi <= 7000:
    classificaçaoDoHeroi = "Ouro"
    console.log(msgAutoRank + nomeDoRank)
    break

    case xpDoHeroi >= 7001 && xpDoHeroi <= 8000:
    classificaçaoDoHeroi = "Platina"
    break

    case xpDoHeroi >= 8001 && xpDoHeroi <= 9000:
    classificaçaoDoHeroi = "Ascendente"
    break

    case xpDoHeroi >= 9001 && xpDoHeroi <= 10000:
    classificaçaoDoHeroi = "Imortal"
    break

    case xpDoHeroi >= 10001:
    classificaçaoDoHeroi = "Radiante"
    break

}

console.log( "O Herói de nome " + nomeDoHeroi + " " + "está no nível de " + classificaçaoDoHeroi)
