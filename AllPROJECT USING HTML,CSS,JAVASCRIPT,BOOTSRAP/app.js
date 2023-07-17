
function india(){
let zone ={timeZone:'Asia/Kolkata'};
let currentDate = new Date().toLocaleDateString('en-us',zone);

let currentTime = new Date().toLocaleTimeString('en-us',zone);
document.querySelector('#indian-Date').innerText= currentDate

document.querySelector('#indian-time').innerText= currentTime


}
setInterval(india,1000)

function usa(){
    let zone ={timeZone:'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-us',zone);
    
    let currentTime = new Date().toLocaleTimeString('en-us',zone);
    document.querySelector('#usa-Date').innerText= currentDate
    
    document.querySelector('#usa-time').innerText= currentTime
    
    
    }
    setInterval(usa,1000)
    
    
function CHINA(){
    let zone ={timeZone:'Asia/Sanghai'};
    let currentDate = new Date().toLocaleDateString('en-us',zone);
    
    let currentTime = new Date().toLocaleTimeString('en-us',zone);
    document.querySelector('#china-Date').innerText= currentDate
    
    document.querySelector('#china-time').innerText= currentTime
    
    
    }
    setInterval(CHINA,1000)
    
function ITALY(){
    let zone ={timeZone:'Europe/Rome'};
    let currentDate = new Date().toLocaleDateString('en-us',zone);
    
    let currentTime = new Date().toLocaleTimeString('en-us',zone);
    document.querySelector('#italy-Date').innerText= currentDate
    
    document.querySelector('#italy-time').innerText= currentTime
    
    
    }
    setInterval(ITALY,1000)