import React from 'react';
import renderer from 'react-test-renderer';
import Employee from './Employee';


test('employee snapshort test',()=>{
    const components=renderer.create(
        <Employee/>
    );
    let employeetree=components.toJSON();

    expect(employeetree).toMatchSnapshot();
})