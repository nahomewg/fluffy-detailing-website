// Index Javascript file, housing the functions of the web page
window.addEventListener("load", (event) => {
    sections = document.querySelectorAll("section");
    navTab = document.querySelectorAll("nav .icons div");
    currentTab = document.querySelectorAll("nav .icons div.active");

    // window.addEventListener("scroll", (event) => {
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop;
    //             if (window.scrollY >= sectionTop - 150 && window.scrollY <= sectionTop + 150) {
    //                 currentTab = section.getAttribute("id");
    //             }
    //         });
    // });
    // window.addEventListener("scrollend", (event) => {
    //     changeMobileTab(currentTab);
    // });
});


// Scroll to function, to smoothly navigate through the web page.
function toSection(section, tabId) {
    const element = document.getElementById(section);
    element.scrollIntoView( { behavior: "smooth" } );

    if (window.screen.width <= 820) {
        changeMobileTab(tabId);
    }
}

function changeMobileTab(tabId) {
    navTab.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === tabId) {
            tab.classList.add("active");
        }
    });
}