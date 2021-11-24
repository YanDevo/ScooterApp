const ChargingStation = require('../src/chargingStation')

describe("Charging Station Class", () => {
    jest.setTimeout(10000)
    const testStation = new ChargingStation("Uptown Mall, East Lot")

    test("Charging Station Has a Location", () => {
        expect(testStation.stationLocation).toBe("Uptown Mall, East Lot")
    })

    test("Time To Full Charge", async () => {
            await testStation.charge(); // we need to wait for the charge!
            console.log("Test complete");
          });

    })