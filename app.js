const tabLinks = document.getElementsByClassName("tab-link");
const tabContents = document.getElementsByClassName("tab-contents");
const tabMenu = document.getElementsByClassName("tab-titles");

function opentab(tabname) {
    for(tabLink of tabLinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab")
    }
}



/* try with console log to print and understand better what's happening */