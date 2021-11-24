const Scooter = require('./scooter')
class User {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    assignToScooter() {
        return `Scooter has been assigned to ${this.name}`
    }
    makePayment() {
        return "$100 charged to card ending in 5786. Thank you for your payment!"
    }
}


module.exports = User;


// const user1 = new User("Iyanna", "11/10/1987")
// console.log(user1)
// console.log(user1.assignToScooter())
// console.log(user1.makePayment())
