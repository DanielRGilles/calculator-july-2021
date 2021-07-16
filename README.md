## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

/ using a test library
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