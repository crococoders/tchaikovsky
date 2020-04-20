import 'jsdom-global/register';

import React from 'react';
import { shallow } from 'enzyme';
import { Heading } from '../Heading';

import renderer from 'react-test-renderer';

test('Heading using children', () => {
  const wrapper = shallow(<Heading>Hello Jest!</Heading>);
  expect(wrapper.html()).toMatch('<h1>Hello Jest!</h1>');
});

test('Heading using props', () => {
  const wrapper = shallow(<Heading title="Hello Jest!" />);
  expect(wrapper.html()).toMatch('<h1>Hello Jest!</h1>');
});

test('onClick counter should be 1', () => {
  const wrapper = shallow(<Heading title="Hello Jest!" />);
  wrapper.find('h1').simulate('click');
  expect(wrapper.state('counter')).toEqual(1);
});

test('Snapshot test if Heading renders correctly', () => {
  const tree = renderer.create(<Heading title="Hello Jest1!" />).toJSON();
  expect(tree).toMatchSnapshot();
});
