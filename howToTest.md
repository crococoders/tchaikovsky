[Jest](https://jestjs.io/docs/en/expect) main testing framework
[Enzyme](https://enzymejs.github.io/enzyme) - Helper testing framework for getting elements from the DOM

###Basic settings:

1. Create '**tests**' folder in component's folder
2. Create <my-component>.spec.tsx
3. First line must be (it's IMPORTANT) **import 'jsdom-global/register';**
4. Then import :
   - import React from 'react';
   - import { MyCompnent } from '../MyCompnent'; // your components

###Unit testing of component:

1. - import { shallow } from 'enzyme';
     shallow or mount or render
     You should read enzyme [API reference](https://enzymejs.github.io/enzyme/docs/api/) to

2. write your test using 'test' or 'it' function:

   ```javascript
   test('here your description', () => {
     //body of your test
   });

   //there no difference between 'it' and 'test' you can use both of them, 'it' is an alias of 'test' function

   it('here your description', () => {
     //body of your test
   });
   ```

3. Write body of your test:

```javascript
const wrapper = shallow(<MyCompnent title="Hello Jest!" />); // get your component and assign to variable
expect(wrapper.html()).toMatch('<div>Hello Jest!</div>');
// check for eqality(or match) you component output with your expected data
```

4. type 'npm test' or 'npm run test' in command line
5. wait until it finishes and check results in command line window

###Snapshot testing of component:

1. import renderer from 'react-test-renderer';
2. write your test using 'test' or 'it' function:

   ```javascript
   test('here your description', () => {
     //body of your test
   });

   //there no difference between 'it' and 'test' you can use both of them, 'it' is an alias of 'test' function

   it('here your description', () => {
     //body of your test
   });
   ```

3. Write body of your test:

```javascript
  const tree = renderer.create(<Heading title="Hello Jest1!" />).toJSON();
  //renders your component and assigns json to variable

  expect(tree).toMatchSnapshot();
  //expects that your component is equals(or matches) to snapshoted component
  });
```

4. type 'npm test' in command line
   //first time test is stores your component snapshot in **snapshots** folder
   //second and further times test will check if your component has any changes
   - in case if you changed your component and you need to update snapshot run 'npm run test:snapshot'
5. wait until it finishes and check results in command line window
