let hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click',clicar)
function clicar(){
   let container = document.querySelector(".container")
    container.classList.toggle('mostre-menu')
}