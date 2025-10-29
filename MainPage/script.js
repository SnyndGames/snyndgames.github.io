
const words = ["Ideas.", "Juegos.", "Arte.", 
    "Innovación.", "Creatividad.", "Entretenimiento.",
    "Sueños."];
let wordContainer = document.querySelector(".dinamic-words");

let s = 0;
let lastNum = 0;
let letter = 0;
let completed = false;
let active = true;
wordContainer.innerHTML = "";
const interval = setInterval(() =>{
    if(!completed){
        if(wordContainer.innerHTML.length > words[s].length){
            completed = true;
            setTimeout(1000);
        }else{
            wordContainer.innerHTML = words[s].substring(0, letter) + '_';
            active = !active;
            letter ++;
        }
    }else{
        if(wordContainer.innerHTML.length == 1){
            completed = false;
            s = getRandomNum();
            lastNum = s;
        }else{
            wordContainer.innerHTML = wordContainer.innerHTML.substring(0, letter - 1) + '_';
            active = !active;
            letter --;
        }
    }
}, 100)

const pc = screen.availWidth >= 1026;
const header = document.querySelector(pc ? ".header" : ".main-container");
const headerStyle = pc ? 
"background: #5185ad68;backdrop-filter: blur(8px);box-shadow:#122454 0px 2px 10px 0px":
"background: #2b346c9a;backdrop-filter: blur(8px);box-shadow:#122454 0px 2px 10px 0px";
window.addEventListener('scroll', ()=>{
    //if(screen.availWidth >= 1024){
        const scrollY = window.scrollY;
        if(scrollY == 0){
            header.removeAttribute("style");
        }else{
            header.style = headerStyle;
        }
    //}
})

const getRandomNum = ()=>{
    let num;
    do{
        num = Math.floor(Math.random() * words.length);
    }while(num == lastNum);
    return num;
}
const observerFunction = entries => {
    for(let entry of entries)
        if(entry.isIntersecting) entry.target.style = 'opacity:1;transform:translateY(0);';
        else if(!entry.target.getAttribute('style')) entry.target.style = 'opacity:0; transform:translateY(10vh);';
    
}
const elements = document.querySelectorAll(".transitioned");
const observer = new IntersectionObserver(observerFunction,{threshold:[0],rootMargin:'-30px'});
for(let element of elements) observer.observe(element);

let optionsOpen = false
const options = document.querySelector(".options-container"); 
const mainOptions = document.querySelectorAll('.main-option');
document.querySelector('.header').addEventListener('click', ()=>{
    if(!pc){
        if(!optionsOpen){
            options.style = "height: 80vh;padding: 2vh 0;";
            mainOptions.forEach(option =>{
                option.style = "display:flex;";
            });
        }else{
            options.removeAttribute('style');
            mainOptions.forEach(option =>{
                option.removeAttribute('style');
            });
        }
        optionsOpen = !optionsOpen;
    }
});
