// Index Javascript file, housing the functions of the web page
window.addEventListener("load", (event) => {
    currentPage = "home";
    sections = document.querySelectorAll("section");
    navTab = document.querySelectorAll("nav .icons div");
    currentTab = document.querySelectorAll("nav .icons div.active");

    const urlParams = new URLSearchParams(window.location.search);
    const scrollSection = urlParams.get('scrollSection');

    if (scrollSection) {
        toSection(scrollSection);
    }

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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").classList.add("active");
  } else {
    document.getElementById("navbar").classList.remove("active");
  }
}

// Scroll to function, to smoothly navigate through the web page.
function toSection(section, tabId = '', navPage = false) {
    const element = document.getElementById(section);
    element.scrollIntoView( { behavior: "smooth" } );

    if (window.screen.width <= 820 || tabId != '') {
        changeMobileTab(tabId);
    }

    if (tabId === '') {
        changeMobileTab(currentPage);
    }
}

function changeMobileTab(tabId, navPage) {
    navTab.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.id === tabId) {
            tab.classList.add("active");
            if (navPage) {
                window.location.href = "./" + (tabId === 'home' ? 'index' : tabId === 'contact' ? 'pricing' : tabId) + ".html" 
                + (tabId === 'contact' ? '?scrollSection=contact' : '');
            }
        }
    });
}