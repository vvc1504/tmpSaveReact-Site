import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('First snapshort test 1',()=>{
    const component=renderer.create(
        <App/>
);
  let tree =component.toJSON();

  expect(tree).toMatchSnapshot();
})