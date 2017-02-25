import React from 'react';
import { ButtonComponent } from '../src/components/Button/';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('Button should render', () => {
  const spy = sinon.spy();
  const component = renderer.create(<ButtonComponent actionOnClick={spy} buttonText='Cick me!' />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Passed function shoul be triggere on click', () => {
  const onButtonClick = sinon.spy();
  const Btn = shallow(<ButtonComponent actionOnClick={onButtonClick} buttonText='Cick me!' />);
  Btn.find('button').simulate('click');
  sinon.assert.called(onButtonClick);
});
