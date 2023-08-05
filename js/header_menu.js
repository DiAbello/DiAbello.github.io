const header = document.querySelector(".header");
const toggler = header.querySelector(".toggler");
const menu = header.querySelector(".header__menu");

let scrollBlocked = false;


(function () {
    toggler.addEventListener('click', () => {
        ToggleToggler();
        ToggleMenu();

        ScrollToTop();
        ToggleScroll();
    });
})();


function ToggleMenu() {
    const menuOpenClass = 'header__menu_open';
    menu.classList.toggle(menuOpenClass);
}

function ToggleToggler() {
    const togglerActiveClass = 'toggler_active';
    toggler.classList.toggle(togglerActiveClass);
}


function ToggleScroll() {
    if (scrollBlocked)
        UnblockScroll();
    else
        BlockScroll();
}

function ScrollToTop() {
    window.scrollTo(0, 0);
}

function BlockScroll() {
    scrollBlocked = true;
    window.onscroll = () => {
        ScrollToTop()
    };
}

function UnblockScroll() {
    scrollBlocked = false;
    window.onscroll = null;
}