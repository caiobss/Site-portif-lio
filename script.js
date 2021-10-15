const hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click', clicar)
function clicar(){
    const container = document.querySelector('.container')
    container.classList.toggle('mostre-menu')
}