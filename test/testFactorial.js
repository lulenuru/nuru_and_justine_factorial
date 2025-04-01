import { assert } from "chai";
import { describe, it } from "mocha";
import factorial from "../factorial.js";

describe("factorial of whole numbers", () => {
   
    it("tests factorial of 0", () => {
        assert.strictEqual(factorial(0), 0);
    });
    it("tests factorial of 1", () => {
        assert.strictEqual(factorial(1), 1);
    });
    it("tests factorial of 5", () => {
        assert.strictEqual(factorial(5), 120);
    });
});


//Lule Nuru and Mbawomye Justine