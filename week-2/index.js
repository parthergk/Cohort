class Reactangle {
    constructor(width, height){
        this.width = width;
        this.height = height
    }

    area(){
        const area = this.width * this.height;
        return area
    }
} 


const reac = new Reactangle(4, 6);
console.log("Rect object", reac.area());
