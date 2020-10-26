const tabsBtn = document.querySelectorAll(".tab");
const tabsItems = document.querySelectorAll(".tabs__col_content");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active')
        });
        tabsItems.forEach(function (item) {
            item.classList.remove('active')
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

const anchors = document.querySelectorAll('a.nav__link, a.nav__link_mobile');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};

const menuToggle = document.querySelector('#menu-toggle');
const mobileNavSidebar = document.querySelector('#navmobile');
const body = document.querySelector('#body');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    mobileNavSidebar.classList.toggle('active');
}

mobileNavSidebar.onclick = function () {
    menuToggle.classList.toggle('active');
    mobileNavSidebar.classList.toggle('active');
}

body.onscroll = function () {
    menuToggle.classList.remove('active');
    mobileNavSidebar.classList.remove('active');
}
