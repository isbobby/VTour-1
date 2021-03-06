import Map from "./Map.js"

export default class User {
    constructor(){
        // initialise a start location for all users
        // this.Currentlocation = Map.getStartPoint();
        this.map = new Map()
    }

    /**
     * Changes the user's current location base on input direction
     * @param {User input direction} direction 
     */
    changeLocation(direction){
        console.log("direction input from user is " + direction)
        try {
            this.map.move(direction)
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * 
     */
    quickMove(locationName){
        this.map.quickMove(locationName)
    }

    hasLocation(locationName){
        return (this.map.hasLocation(locationName))
    }

    /**
     * logs the accessible locations in console
     */
    getLocationInfo(){
        return this.map.getLocationInfo();
    }
    
    /**
     *  get transition gif
     */
    getTransitionGif(direction){
        return this.map.getTransitionGif(direction);
    }

    getJuice(){ 
        return this.map.getCurrentLocationJuice();
    }

    getCurrentLocationPicl(){
        return this.map.getCurrentLocationPicl()
    }

    getCurrentLocationPics(){
        return this.map.getCurrentLocationPics()
    }

    getCurrentLocationEvents(){
        return this.map.getCurrentLocationEvents()
    }
}