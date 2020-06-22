import React from "react";
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import Parts from './Parts';


describe('<Parts/>' , () => {
    it('Runs without crashing ', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Parts />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    // it('renders <Parts/> snapshot', ()=>{
    //     const tree = renderer.create(<Parts/>).toJSON();

    //     expect(tree).toMatchSnapshot();
    // }
    // )
})