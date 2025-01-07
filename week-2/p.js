
function callbackfoPromise(resolve){
    console.log(resolve());
    setTimeout(resolve, 5000);
}

// function promisfiedsettimeout(){
//     return new Promise(callbackfoPromise);
// }

// function callback() {
//     console.log("I am a callback funtion");   
// }

// promisfiedsettimeout().then(callback);

function mycallbackfoPromise(resolve){
    console.log(resolve());
    setTimeout(resolve, 5000);
}

class MyPromise{
    constructor(res) {
        this.res = res;
    }

    mythen(mycallback){
        return this.res(mycallback)
    }
}

function mypromisfiedsettimeout(){
    return new MyPromise(mycallbackfoPromise);
}

function mycallback(){
    console.log("this is from the mycallback");
}
mypromisfiedsettimeout().mythen(mycallback);