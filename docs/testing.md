[Jest](https://jestjs.io/docs/en/expect) - Main testing framework<br/>
[Enzyme](https://enzymejs.github.io/enzyme) - Helper testing framework for getting elements from the DOM<br/>
[Cucumber](https://cucumber.io/) - BDD testing framework with Gherkin syntax


### Basic settings:

1. Create `__tests__` folder in component's folder
2. Create `<my-component>.test.tsx`
3. ```javascript
   import 'jsdom-global/register'; // this one should be first, it's important!
   import React from 'react';
   import { MyComponent } from '../MyComponent';
   ```

### Unit testing of component:

1.  ```javascript
    import { shallow } from 'enzyme'; //shallow or mount or render
    ```
    You should read enzyme [API reference](https://enzymejs.github.io/enzyme/docs/api/)
    <br/>


2.  For grouping related tests use `describe()` function:

    ```javascript
    describe('description for group of tests', () => {
      //body of your test
    });
    ```

3.  Write your test using `it()` function:

    ```javascript
    it('here your description', () => {
      //body of your test
    });
    ```

4.  Write body of your test:
    
    ```javascript
        const wrapper = shallow(<MyCompnent title="Hello Jest!" />); // get your component and assign to variable
        expect(wrapper.html()).toMatch('<div>Hello Jest!</div>');
        // check for eqality(or match) you component output with your expected data
        ```
    - If you have same variables for several tests you can use `beforeEach()` function to declare them before each testing case: 
      ```javascript
        describe('Description for group of tests', () => {
          beforeEach(() => {
              const wrapper = shallow(<MyCompnent title="Hello Jest!" />); // get your component and assign to variable
          });
          //then you can use wrapper in several test cases
          it("Should be first example", ()=>{
             expect(wrapper.html()).toMatch('<div>Hello Jest!</div>');
          })
          it("Should be second example", ()=>{
             expect(wrapper.html()).toMatch('<div>Hello World!</div>');
          })
        });
        ```
    - If you have some functions to be executed after test it can be done in `afterEach()` function

5. Type `npm test` or `npm run test` in command line
6. Wait until it finishes and check results in command line window

### Snapshot testing of component:

1. ```javascript
   import renderer from 'react-test-renderer';
   ```
2.  For grouping related tests use `describe()` function:

    ```javascript
    describe('description for group of tests', () => {
      //body of your test
    });
    ```

3.  Write your test using `it()` function:

    ```javascript
    it('here your description', () => {
      //body of your test
    });
    ```

4. Write body of your test:

    ```javascript
      const tree = renderer.create(<Heading title="Hello Jest1!" />).toJSON();
      //renders your component and assigns json to variable

      expect(tree).toMatchSnapshot();
      //expects that your component is equals(or matches) to snapshoted component
      });
    ```

5. Type `npm test` in command line
   - first time test is stores your component snapshot in **snapshots** folder
   - second and further times test will check if your component has any changes
   - in case if you changed your component and you need to update snapshot run `npm run test:snapshot`
6. Wait until it finishes and check results in command line window


###BDD testing with Cucumber.js
1. Create `*.feature` file in `/features` folder and write your `Feature: Description of your feature`. It has to be clear and easy understandable.
2. Write your test scenario `Scenario: One of many scenarios that user can do`
3. Write "Given" `Given: Pre-conditions to the test`
4. Write "When" `When: Some behavior that should be triggered`
5. Write "Then" `Then: Changes that you expect`
  More about Given,When,Then you can read [here](https://martinfowler.com/bliki/GivenWhenThen.html)


1) Create `YourSteps.ts` file in `/step_definitions` folder for testing by scenarios that declared in `/features`
2)  ```javascript
      import { binding, given, then, when } from 'cucumber-tsflow'; //cucumber.js for typescript
      const assert = require('assert'); // basic node built-in assert 
    ```
3) You should start with `@binding()` line at the beginning of your test class
4) ```javascript
      export class ExampleSteps { 
        //Your code here 
      }
    ``` 
5) Declare variables at the top:
   ```javascript  
    private today!: string;
    private actualAnswer!: string;
    ```
6)   
    ```javascript 
      @given(/today is Sunday/) // You should write in brackets exactly same as you wrote "Given" at *.feature file
      public givenTodayIsSunday() { //you can write any name of function, but try to use clear and understandable names
        this.today = 'Sunday';
      }
      ```
7) ```javascript   
      @when(/I ask whether it's Friday yet/)
      public whenAskIsItFriday() {
        this.actualAnswer = this.isItFriday(this.today);
      }
    ```
8)  ```javascript
      @then(/I should be told "([^"]*)"/) 
      // "([^"]*)" means that it assumes string that pass as parameter to function below
      // \d* assumes series of digits (or nothing)
      public accountBalanceShouldEqual(expectedAnswer: string) {
        assert.equal(this.actualAnswer, expectedAnswer);
      }
    ```
For full list of RegEx go [here](https://agileforall.com/wp-content/uploads/2011/08/Cucumber-Regular-Expressions-Cheat-Sheet.pdf)
Then check [cucumber-ts-flow docs](https://github.com/timjroberts/cucumber-js-tsflow) to get more info about testing features of [Cucumber](https://cucumber.io/) 
