const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))


const txtElement = ['Data Enthusiast', 'Writer/Researcher', 'College Student'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function type(){

    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.type-effect').textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(type, 300)

})();

