const lista = document.querySelectorAll('.lista');

function ativo(){
    for(let i of lista){
        i.classList.remove('ativo')
    }
    this.classList.add('ativo')
}

for(let i of lista){
    i.addEventListener('click', ativo)
}

let colorir = document.querySelector('.cor');

window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#scrollcont')
    let coor = colorir.getBoundingClientRect()
    let distancia = coor.top 
    header.classList.toggle('desceu', window.screenTop >= distancia)
})