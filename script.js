const hours = document.querySelector('#hours');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
let seconds = 0;
let minutes = 0;
let hour = 0;
let id, id1, id2;

const start = () => {
    document.querySelector('.start').disabled = true;

    id = setInterval(() => {
        if(seconds <= 60){
            seconds++;
        } 

        if(seconds > 9){
            second.innerHTML = seconds;
        } else{
            second.innerHTML = '0' + seconds;
        }
        
        if(seconds == 59){
            seconds = 0;
            minutes++;
            minute.innerHTML = minutes;
            if(minutes > 9){
                minute.innerHTML = minutes;
            } else{
                minute.innerHTML = '0' + minutes;
            }
        }

        
        if(minutes > 59){
            minutes = 0
            hour ++
            hours.innerHTML = hour;
            if(hour > 9){
                hours.innerHTML = hour;
            } else{
                hours.innerHTML = '0' + hour;
            }
        }


        if(hour >= 12){
            hour = 1;
        }

    }, 0.0000000001);
    

  

    // id1 = setInterval(() => {
    //     if(minutes < 60){
    //         minutes++;
    //     } 
        
    //     if(minutes == 60){
    //         minutes = 0
    //     }
    //     minute.innerHTML = minutes;
    // }, 60000);


    // id2 = setInterval(() => {
    //     if(hour < 13){
    //         hour++;
    //     } 
        
    //     if(hour >= 13){
    //         hour = 0
    //     }
    //     hours.innerHTML = hour;
    // }, 100);

}



const stop = () => {
    document.querySelector('.start').disabled = false;
    clearInterval(id)
}


const reset = () =>{
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
}


// const reset = () =>{
//     seconds.value = -1;
// }


// const toZero = (a) => {
//     if(a < 60){
//         a++;
//     } 
    
//     if(a == 60){
//         a = 1
//     }
// }




// const checkbox = document.querySelector('.check')
// const button = document.querySelector('#slider-button')

// const slide = () => {

//   if(button.classList.contains('right')){
//     button.style = ' background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(156,0,0,1) 100%);'
//     button.classList.remove('right')
//     button.classList.add('left')
//   } else{
//     button.style = 'background: linear-gradient(45deg, rgba(9,255,0,1) 0%, rgba(0,161,10,1) 100%);'
//     button.classList.remove('left')
//     button.classList.add('right')
//   }
// }