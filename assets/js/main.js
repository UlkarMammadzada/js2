let point = prompt ("enter point")

const passingPoint = (point) => {
    if (point >50 && point <=100) {
        alert("congratultions");
    }else if(point <50 || point <=0){
        alert("sorry,you didnot pass");
    }else{
        alert("wrong cridentials");
    }
    
}

passingPoint(point);



class examPoint {
    constructor (point) {
        this.point = point;
    }
    examResult (){
        const result = this
    }
}