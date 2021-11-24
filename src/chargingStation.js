const Scooter = require('./scooter')
class ChargingStation {
    static availableAtDocStaion = []
    constructor(stationLocation) {
        this.stationLocation = stationLocation;
        this.capacity = 10;
    }

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds

        console.log('Charge complete');   
   }
}


module.exports = ChargingStation;

// let c1 = new ChargingStation("Michael's Backyard")
// c1.charge()