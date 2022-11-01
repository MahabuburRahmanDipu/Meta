const navSlide = () =>{
    const burger_menu = document.querySelector('.burger_menu');
    const main = document.querySelector('.nav_list');

    burger_menu.addEventListener('click', () => {
        main.classList.toggle('active');
        burger_menu.classList.toggle('toggle');
    } );

}

navSlide();