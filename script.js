const toggleBtn = document.querySelector("nav .toggle-button");
const mainUl    = document.querySelector(".main-ul");
const collapseMenu = document.querySelectorAll(".collapse-menu");
const linkElement = document.querySelectorAll(".main-ul li a");
const subMenuFirst = document.querySelectorAll(".main-li div > .submenu-1")
const subMenuSecondUl = document.querySelector(".main-li div .submenu-1 .submenu-2");
const submenuLi = document.querySelector("#submenu-li-2");
let windowWidth = window.innerWidth;
//toggle clicked class in hamburger menu when click
toggleBtn.addEventListener("click", ()=>{
     mainUl.classList.toggle("clicked");
 
});

//remove clicked class in hamburger menu when window screen greater than 880
window.addEventListener("resize", (e)=>{
    if(windowWidth > 880){
        let elementClicked = document.getElementsByClassName("clicked");
        for(let i = 0; i <elementClicked.length; i++ ){
            elementClicked[i].classList.remove("clicked");
        }
    }
    windowWidth = window.innerWidth;
});


// toggle submenu1
for(let i = 0; i < linkElement.length; i++){
    linkElement[i].addEventListener("click", (e)=>{
        if(windowWidth < 880){
            if(e.target.parentElement.className === "main-li" || (e.target.parentElement.tagName === "A")){
                for(let x = 0; x < collapseMenu.length; x++){
                    if(collapseMenu[x].parentElement === linkElement[i]){
                        for(let y = 0; y < subMenuFirst.length; y++){ 
                            if(subMenuFirst[y].parentElement.previousElementSibling === collapseMenu[x].parentElement){
                                collapseMenu[x].classList.toggle("clicked");
                                subMenuFirst[y].classList.toggle("clicked");
                        
                            }
                        }    
                    }
                }
            } 
        }
    });
}

//toggle submenu2
submenuLi.addEventListener("click", () => {
    if(windowWidth < 880){
        if(submenuLi.firstElementChild.firstElementChild.className.includes("collapse-menu")){
            subMenuSecondUl.classList.toggle("clicked");
            submenuLi.firstElementChild.firstElementChild.classList.toggle("clicked");
        }
    }
});
