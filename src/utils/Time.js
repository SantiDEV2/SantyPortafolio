import EventEmitter from "./EventEmitter.js";

export default class Time extends EventEmitter {
    constructor(){
        super();

        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        this.lastTime = performance.now()
        this.frames = 0;

        window.requestAnimationFrame(() => {
            this.Animate();
        })
    }
    
    Animate(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime
        this.elapsed = this.current - this.start

        this.trigger('animate')

        window.requestAnimationFrame(() => {
            this.Animate();
        })
    }
}