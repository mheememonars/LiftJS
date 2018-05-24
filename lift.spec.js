describe("Here frist floor want go to 3 floor should Up ", function () {  
    it("should not overload weigth ", function () {

        expect(checkWiegthOverload(50)).toBe("น้ำหนักไม่เกิน");
    });
     it("should be lift up ", function () {

        expect(checkStateLift(3)).toBe("Up");
    });


});


describe("Here frist floor click go to frist floor should stop ", function () {  
        it("should be lift stop ", function () {

        expect(checkStateLift(1)).toBe("Stop");
    });
});
