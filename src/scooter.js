const User = require('./user')
class Scooter {
    static availableScooters = []
    static unavailScooters = []
    constructor( location, ID, isCharged, available, isDocked ) {
        this.location = location;
        this.ID = ID;
        this.isCharged = isCharged;
        this.available = available;
        this.isDocked = isDocked;
    }

    async chargeCapacity() {
        console.log('Battery Full');

        await new Promise(resolve => setTimeout(resolve, 40000)); // wait 40 seconds

        console.log(`Battery Level Low, Place Scooter ${this.ID} In The Dock Station to Charge`);   
   }

    markAsBroken() {
        return "This scooter is broken, add to unavailable list"
    }

    dock(){
        return "Scooter Docked & Charging"
    }
}

module.exports = Scooter;

let s1 = new Scooter('Ermias House', '76B', true, true, false)
s1.chargeCapacity();