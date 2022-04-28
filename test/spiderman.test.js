const Spiderman = require("../app/spiderman")

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        
        //Validamos que este código funcione adecuadamente
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    })
})