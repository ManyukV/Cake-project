window.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector('[data-open]'),
        menuClose = this.document.querySelector('[data-close]'),
        menu = this.document.querySelector('.burger__nav');

        menuOpen.addEventListener('click', ()=>{
            menu.classList.add('show');
            menu.classList.remove('hide');
            document.body.style.overflow = "hidden";
        }) 

        menuClose.addEventListener('click', ()=>{
            menu.classList.add('hide');
            menu.classList.remove('show');
            document.body.style.overflow = "";
        })
})
