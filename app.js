// IMPORT MODULES under test here:
import { add, divide, multiply, subtract } from '../utils.js';

// using a test library
const test = QUnit.test;

test('add should take in 5 and 3 and return 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected); 
});


test('subtract should take in 23 and -10 and return 33', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 33;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(23, -10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected); 
});


test('divide should take in 100 and 0 return 100', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 100;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(100, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected); 
});

test('multiply should take in "5" and 3 return 15', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply('5', 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});