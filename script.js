let score = 0
function optCom(){
    let opt = Math.floor(Math.random() * 3)
    switch (opt) {
        case 0:
         return `batu`   
            break
        case 1:
            return `gunting`
            break
        default:
            return `kertas`
            break
    }
}
function play(com, player){
    if(com == player){
        return `SERI`
    }else if(player == `batu`){
        if(com == `kertas`){
            return `KALAH`
        }else{
            score++
            return `MENANG`
        }
    }else if(player == `gunting`){
        if(com == `kertas`){
            score++
            return `MENANG`
        }else{
            return `KALAH`
        }
    }else if(player == `kertas`){
        if(com == `batu`){
            score++
            return `MENANG`
        }else{
            return `KALAH`
        }
}
}

// let pilcom = optCom()
// let img = document.getElementById(`img-komputer`)
// img.setAttribute(`src`, `./${pilcom}.png`)
// let random = Math.floor(Math.random()*3)
// let imgAwal = document.getElementById('img-komputer')
// switch (random) {
//     case 0:
//     // let imgAwal = document.getElementById('img-komputer')
//     imgAwal.setAttribute(`src`, `./batu.png`)
//         break;
//     case 1:
//     // let imgAwal = document.getElementById('img-komputer')
//     imgAwal.setAttribute(`src`, `./gunting.png`)
//         break
//     default:
//     // let imgAwal = document.getElementById('img-komputer')
//     imgAwal.setAttribute(`src`, `./kertas.png`)
//         break;
// }
const playBatu = document.getElementById('batu')
playBatu.addEventListener('click' ,function() {
     let pilcom = optCom()
    let img = document.getElementById(`img-komputer`)
    img.setAttribute(`src`, `./${pilcom}.png`)



    let pilplayer = playBatu.id
    let result = play(pilcom, pilplayer)

    // let img = document.getElementById(`img-komputer`)
    // img.setAttribute(`src`, `./${pilcom}.png`)
    
    const display = document.getElementById(`info`)
    display.innerHTML = result
    img.setAttribute(`src`, `./${pilcom}.png`)
    reset()
})

// let pilcom = optCom()
// let img = document.getElementById(`img-komputer`)
// img.setAttribute(`src`, `./${pilcom}.png`)
const playGunting = document.getElementById('gunting')
playGunting.addEventListener('click' ,function() {
        let pilcom = optCom()
    let img = document.getElementById(`img-komputer`)
    img.setAttribute(`src`, `./${pilcom}.png`)



    let pilplayer = playGunting.id
    let result = play(pilcom, pilplayer)

    // let img = document.getElementById(`img-komputer`)
    // img.setAttribute(`src`, `./${pilcom}.png`)
    
    const display = document.getElementById(`info`)
    display.innerHTML = result
    reset()
})

// let pilcom = optCom()
// let img = document.getElementById(`img-komputer`)
// img.setAttribute(`src`, `./${pilcom}.png`)
const playKertas = document.getElementById('kertas')
playKertas.addEventListener('click' ,function() {
        let pilcom = optCom()
    let img = document.getElementById(`img-komputer`)
    img.setAttribute(`src`, `./${pilcom}.png`)



    let pilplayer = playKertas.id
    let result = play(pilcom, pilplayer)

    // let img = document.getElementById(`img-komputer`)
    // img.setAttribute(`src`, `./${pilcom}.png`)
    
    const display = document.getElementById(`info`)
    display.innerHTML = result
    reset()
})
let awal = document.getElementById(`info`)
function reset( ){
    let imgAwal = document.getElementById('img-komputer')
    let skor = document.getElementById('score')
    skor.innerText = `Score: ${score}`
    setTimeout(function(){
        imgAwal.setAttribute('src', './putih.jpg') ; 
        awal.innerHTML ='<h2>Are You Ready?</h2>'
     }, 2000);
    
}