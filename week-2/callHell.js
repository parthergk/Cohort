// function h1(){
//     return new Promise((resolve)=>setTimeout(resolve,1000))
// }

// function callbackh1(){
//     console.log("This is h1");
//     return new Promise((resolve)=>setTimeout(resolve,3000))
// }
// function callbackhello(){
//     console.log("This is hello");
//     return new Promise((resolve)=>setTimeout(resolve,5000))
// }

// function callbackhello2(){
//     console.log("This is hello there");
// }



// h1().then(callbackh1).then(callbackhello).then(callbackhello2)

setTimeout(function(){
    console.log('Hi');
    setTimeout(function(){
        console.log('Hello');
        setTimeout(() => {
            console.log('Hello here');
        }, 5000);
    },3000)
},1000)