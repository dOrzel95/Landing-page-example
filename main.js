const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const elementsMeuHandler = [...document.querySelectorAll(".navigate li a")];
const questionsParagraphHandler = document.querySelectorAll(".faq .asked-questions-li-header");
const expandQuestionHandler =  [...document.querySelectorAll(".faq .asked-questions-li-header .plus")];



hamburgerMenu.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("hamburger-menu-active");
    menu.classList.toggle("menu-active");
})

console.log(questionsParagraphHandler);
console.log(expandQuestionHandler);

elementsMeuHandler.forEach(element=>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        let link = "#"+e.target.getAttribute("href");
        window.scrollTo({
            top:document.querySelector(link).offsetTop,
            behavior:'smooth',

        })
        menu.classList.toggle("menu-active");
        hamburgerMenu.classList.toggle("hamburger-menu-active");
    })
})

expandQuestionHandler.forEach(element=>{
    element.addEventListener("click", (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.toggle("question-active");
        e.target.classList.toggle("plus-active");

    })
})
