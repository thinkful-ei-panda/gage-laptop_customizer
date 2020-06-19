import React from "react";
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import Features from './Features';

describe('<Features/>' , () => {
    it('Runs without crashing ', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Features />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    // it('renders <Features/> snapshot', ()=>{
    //     const tree = renderer.create(<Features/>).toJSON();

    //     expect(tree).toMatchSnapshot();
    // }
    // )
})