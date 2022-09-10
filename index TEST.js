var expect = chai.expect;

describe('myFunctions', function() {
    describe('testString', function(){
        it('should concatenate our two parameters' {
            var x = testString(Hello, 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if the first parameter is not a string', function()
            expect(function() {
                testString(5,5);
            }).to.throw(Error);
    });
}):