const mainHeader = document.querySelector('header')
const body = document.querySelector('body')
var sticky = mainHeader.offsetTop;

//WINDOW ONSCROLL AND ONLOAD
window.onscroll = function () {
    headerSticky()
    
};
window.onload = function () {
    headerSticky()
};

//ACCODRIAN DROPBOX EVENT (multiple) -start
const accordianItemHeaders = document.querySelectorAll(
    ".accordian-item-header"
);

accordianItemHeaders.forEach(accordianItemHeader => {
    accordianItemHeader.addEventListener("click", () => {
    const current = document.querySelector(".accordian-item-header.active");

    if (current && current !== accordianItemHeader) {
        current.classList.toggle("active");
        current.nextElementSibling.style.maxHeight = 0;
    }
    accordianItemHeader.classList.toggle("active");
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
        accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
        accordianItemBody.style.maxHeight = 0;
    }
    
    });
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    if (accordianItemHeader.classList.contains("active")) {
        accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
        accordianItemBody.style.maxHeight = 0;
    }
});

//ACCODRIAN DROPBOX EVENT (multiple) -end

function mobileClose(){
    const mobileMenuOpen = document.querySelector('.mobile-menu-open')
    mobileMenuOpen.classList.remove('active')
    body.classList.remove("body-lock");
}
function mobileOpen(){
    const mobileMenuOpen = document.querySelector('.mobile-menu-open')
    mobileMenuOpen.classList.add('active')
    body.classList.add("body-lock");
}

// MOBILE NAV SCRIPT - TOGGLE BTN
let SubNavList = document.querySelectorAll('.gnb-list')
let currentMenu


// MOBILE MENU -TOGGLE LIST
function subMenuHandler() {
    if (currentMenu) {
        currentMenu.classList.remove('active')
    }
    this.classList.toggle('active');
    currentMenu = this
}
for (var i = 0; i < SubNavList.length; i++) {
    SubNavList[i].addEventListener('click', subMenuHandler)
}


//HEADER STICKY
function headerSticky() {
    if (window.pageYOffset > sticky) {
        mainHeader.classList.add("headerSticky");
    } else {
        mainHeader.classList.remove("headerSticky");
    }
}

function loginMypageToggle(){
    const afterLoginMenu = document.querySelector('.after-login-menu')
    afterLoginMenu.classList.toggle('active')
}

const tabContents = document.querySelectorAll('.gnb-tab-content')
const tabLists = document.querySelectorAll('.gnb-tab-list')

tabLists.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        item.classList.add('active')
        tabContents[idx].classList.add('active')
    })

})

function hideAllContents() {
    tabContents.forEach(tabContent => tabContent.classList.remove('active'))
}

function hideAllItems() {
    tabLists.forEach(tabList => tabList.classList.remove('active'))
}