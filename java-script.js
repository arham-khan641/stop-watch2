var sec=0;
var msec=0;
var min=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

var Interval;

function timer(){
    msec++
    msecHeading.innerHTML= msec;
     if(msec >=100){
        sec++
         secHeading.innerHTML= sec;
          msec = 0;
     }else if(sec >=60){
         min++
         
         minHeading.innerHTML=min;
         sec = 0
     } 

    }
    function start(){
    Interval = setInterval(timer,10);
    document.getElementById("start").disabled = true;
    
   }

   function pause(){
     clearInterval(Interval)
    document.getElementById("start").disabled = false;

     
   }
    function reset(){
     min=0;
     sec=0;
     msec=0;
      minHeading.innerHTML=min;
      msecHeading.innerHTML=msec;
      secHeading.innerHTML=sec;
      pause()
    }

    

    // function start() {
    //   document.getElementById("start").disabled = true;
    // }


    // //  function start(){

    // //  Interval= document.getElementById("start").disabled=true;
    // // }
    // // function start(){
    // // if (start=start){
    //    disabled=start
    // }
  // }


// // }
// //    interval=setInterval(timer,1000)
// // setTimeout (function(){
// // clearInterval(interval)
// // },5000)

 
// function timeout(){
//  console.log("running....")

//  }  
//     setTimeout(timeout,3000)


// var interval;
// var msec=10;
// function timer(){
//     msec++;
//     var msec=document.getElementById("msec")
    
        
// }
// interval =setInterval(timer,1000)
// setTimeout(function(){
//     clearInterval(interval)

// },5000)