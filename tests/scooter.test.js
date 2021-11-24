const Scooter = require('../src/scooter')

describe('Scooter Class', () => {
    jest.setTimeout(42000)
    const testScooter = new Scooter("Wade Park", "3PO", true, true, false)
    
    
    test("Has Location", () => {
        expect(testScooter.location).toBe("Wade Park")
    })

    test("Has an ID Code", () => {
        expect(testScooter.ID).toBe("3PO")
    })

    test("Is Charged", () => {
        expect(testScooter.isCharged).toBe(true)
    })

    test("Is Available", () => {
        expect(testScooter.available).toBe(true)
    })

    test("Is Docked", () => {
        expect(testScooter.isDocked).toBe(false)
    })

    test("Time To Battery Depletion", async () => {
        await testScooter.chargeCapacity(); // we need to wait for the charge!
        console.log("Test complete");
      });

      test("If Scooter is Broken", () => {
        expect(testScooter.markAsBroken()).toBe("This scooter is broken, add to unavailable list")
    })

     test("Checking for Docked Scooter To Begin Charge Cycle", () => {
        expect(testScooter.dock()).toBe("Scooter Docked & Charging")
    })
})