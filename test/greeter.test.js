const Greeter = artifacts.require("Greeter");


// Traditional Truffle test
contract("Greeter", accounts => {
    let instance, instance2;

    before(async function() {
        // nouvelle instance 
        instance = await Greeter.new("Hello !");
        // instance déployée grace à truffle migrate 
        instance2 = await Greeter.deployed();

        //console.log(instance);
        //console.log(instance2);
        //console.log(accounts);
    });

    // test 1
    it("Should return greeting 1", async function() {
        let greeter = await instance.greet.call();

        assert.equal(
            "Hello !",
            greeter,
            "Not the same greeter !"
        );
    });

    // test 2
    it("Should return greeting 2", async function() {
        let greeter2 = await instance.greet();

        expect(greeter2).to.equal('Hello !');
    });
});

/*
// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("Greeter contract", function() {
    let accounts;
    let instance, instance2;

    before(async function() {
        // nouvelle instance 
        instance = await Greeter.new("Hello !");
        // instance déployée grace à truffle migrate 
        instance2 = await Greeter.deployed();
        // get accounts 
        accounts = await web3.eth.getAccounts();

        console.log(instance);
        console.log(instance2);
        console.log(accounts);
    });

    // test 1
    describe("Greeting", function() {
        it("Should return greeting", async function() {
            let greeter = await instance.greet.call();
            console.log(greeter);

            let greeter2 = await instance.greet();
            console.log(greeter2);
        });
    });
});
*/