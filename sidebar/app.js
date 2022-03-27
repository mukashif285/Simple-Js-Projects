const btnToggle = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

btnToggle.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar')
})