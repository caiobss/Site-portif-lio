let hamburguer = document.querySelector('.hamburguer')
hamburguer.addEventListener('click',clicar)
function clicar(){
    let sidebar = document.querySelector(".sidebar")
    let hamburguer = document.querySelector('.hamburguer')
    hamburguer.classList.toggle('mostre-menu')
    sidebar.classList.toggle('mostre-menu')
}