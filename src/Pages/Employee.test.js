import React from 'react';
import renderer from 'react-test-renderer';
import Employee from './Employee';
import Home from './Home';


test('employee snapshort test',()=>{
    const components=renderer.create(
        <Employee/>
    );
    let employeetree=components.toJSON();

    expect(employeetree).toMatchSnapshot();
})
test('home snapshort test',()=>{
    const components=renderer.create(
        <Home/>
    );
    let employeetree=components.toJSON();

    expect(employeetree).toMatchSnapshot();
})