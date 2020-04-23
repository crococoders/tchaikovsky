[Jest](https://jestjs.io/docs/en/expect) - Main testing framework<br/>
[Enzyme](https://enzymejs.github.io/enzyme) - Helper testing framework for getting elements from the DOM

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
    
    - ```javascript
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
