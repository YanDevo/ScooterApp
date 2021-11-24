const User = require('../src/user')

describe('User class', ()=> {
    const testUser = new User("Raven", "12/08/1994");


    test('user has a name', () => {
        expect(testUser.name).toBe("Raven");        
    })

    test("User Has D.O.B", () => {
        expect(testUser.dateOfBirth).toBe("12/08/1994")
    })

    test("User Was Assigned Scooter", () => {
        testUser.assignToScooter()
        expect(testUser.assignToScooter()).toBe(`Scooter has been assigned to ${testUser.name}`)
    })

    test("User Paid", () => {
        testUser.makePayment()
        expect(testUser.makePayment()).toBe("$100 charged to card ending in 5786. Thank you for your payment!")
    })
})