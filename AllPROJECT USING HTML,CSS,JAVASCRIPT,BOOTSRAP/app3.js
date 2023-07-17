let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');
      let hour = 00;
      let minuate = 00;
      let second = 00;
      let count = 00;
      startBtn.addEventListener('click',function(){
        timer = true;
        stopWatch();
      }
      
      );
      stopBtn.addEventListener('click',function(){
        timer = false;
        
      }
      
      );
      resetBtn.addEventListener('click',function(){
        timer = false;
        hour =0;
        minuate = 0;
        second = 0;
        count=0;
        document.getElementById('hr').innerHTML='00';
        
        document.getElementById('min').innerHTML='00';
        
        document.getElementById('sec').innerHTML='00';
        
        document.getElementById('count').innerHTML='00';
        
      }
      
      );
      function stopWatch(){
        if(timer){
            count++;


            if(count==100){
                second++;
                count=0;
            }
            if(second==60){
                minuate++;
                second=0;
            }
            if(minuate==60){
                hour++;
                minuate=0;
                second=0
            }
            let hrString=hour;
            let minString=minuate;
            let secString=second;
            let countString=count;
if(hour<10){
    hrString="0"+hrString;
}

if(minuate<10){
    minString="0"+minString;
}  
if(second<10){
    secString="0"+secString;
}
if(count<10){
    countString="0"+countString;
}

     document.querySelector('#hr').innerHTML=hrString;
     

     document.querySelector('#min').innerHTML=minString;


     document.querySelector('#sec').innerHTML=secString;


     document.querySelector('#count').innerHTML=countString;
     setTimeout(stopWatch,10);






















        }
      }
      
