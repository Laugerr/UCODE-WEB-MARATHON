class Timer {
    constructor(){
         this.title = title;
         this.delay = delay;
         this.stopCount = this.stopCount;
    }
    start(){
        console.log("Timer " + this.title + " started " + "(delay=" + this.delay + ", stopCount=" + this.stopCount + ")")
    }
    tick(){
        console.log("Timer "+ this.title +" Tick! | cycles left " + Number(this.delay))
    }
    stop(){
        console.log("Timer " + this.title + "stopped")
    }
}

function runTimer(id, delay, counter){
    
}

