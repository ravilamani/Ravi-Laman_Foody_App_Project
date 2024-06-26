// Nav bar showing When we click on the menu........
const menu=document.querySelector('.mobile-menu');
const listOfMenu=document.querySelector('.sidebar')

const removeIcon=document.querySelector('.remove-menu')

menu.addEventListener("click", function(){
    menu.classList.toggle("is-active")
    listOfMenu.classList.toggle("active")
})

.addEventListener("click",function(){
    removeIcon.classList.toggle("is-active")
    listOfMenu.classList.toggle('.inactive')

})
