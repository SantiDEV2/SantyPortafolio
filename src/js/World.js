import Application from "./Application.js"
import Environment from "./Environment.js"
import Scroll from "./Scroll.js"
import Cursor from "./Cursor.js"
import Astronaut from "./Astronaut.js"
import Planets from "./Planets.js"

export default class World {
    constructor() {
        this.application = new Application()

        this.scroll = new Scroll()
        this.cursor = new Cursor()
        
        this.scene = this.application.scene
        this.resources = this.application.resources

        this.resources.on('loaded', () => {
            this.astronaut = new Astronaut()
            this.planet = new Planets()

            this.environment = new Environment(this.astronaut, this.planet);
            this.environment.sectionMeshes ?  this.scroll.SetSectionMeshes(this.environment.sectionMeshes) : null;
        })
    }

    Update() {
        if (this.environment) {
            this.environment.Update();
            this.astronaut ? this.astronaut.Update() : null
            this.planet ? this.planet.Update() : null
        }
    }
}