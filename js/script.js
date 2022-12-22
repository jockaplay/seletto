window.onscroll = function(){
    let item = document.querySelector('.anime')
    let a = item.getBoundingClientRect()
    if (window.scrollY > a.y * 1.5){
        item.classList.add('active-anim')
    }
}

let botoes = []

for(var i = 0; i < 4; i++){
    j = document.getElementById(i)
    botoes.push(j)
}

function change(i){
    for(var j in botoes){
        botoes[j].classList.add('hide')
    }
    botoes[i].classList.remove('hide')
}