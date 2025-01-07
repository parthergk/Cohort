function promisfiedsettimeout (){
    return new Promise ((resolve)=>setTimeout(resolve, 5000));
}

function callback(){
    console.log("hy i am callback");
}

promisfiedsettimeout().then(callback);