//Client Tests
if (Meteor.isClient) {
    //meteordump tests
    describe('meteordump', function () {
        it('Should be instantiated', function () {
            var meteordump = meteordump;
            chai.assert.equal(meteordump, meteordump);
        });
    });
};