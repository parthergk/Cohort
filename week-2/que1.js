// function waitFor3s(resolve){
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("i am the main funtion");
// }

// waitFor3s(main);


function random (resolve){
    console.log("Resolve function", resolve);
    resolve();
}

const p = new Promise(random);

function callBack() {
    console.log("Call back funtion called");
}

p.then(callBack)