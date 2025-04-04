import Application from "./Application.js"
import Environment from "./Environment.js"
import Scroll from "./Scroll.js"
import Cursor from "./Cursor.js"
import Astronaut from "./Astronaut.js"

export default class World {
    constructor() {
        this.application = new Application()

        this.scroll = new Scroll()
        this.cursor = new Cursor()
        
        this.scene = this.application.scene
        this.resources = this.application.resources

        this.resources.on('loaded', () => {
            this.astronaut = new Astronaut()

            this.environment = new Environment(this.astronaut);
            this.environment.sectionMeshes ?  this.scroll.SetSectionMeshes(this.environment.sectionMeshes) : null;
        })
    }

    Update() {
        if (this.environment) {
            this.environment.Update();
            this.scroll.Update();
            this.cursor.Update();
            this.astronaut ? this.astronaut.Update() : null
        }
    }
}