import React from 'react';
import Parts from './Parts'


    function Features (props){
        return (
            <>
            <form className="main__form">
                <h2>Customize your laptop</h2>
                 <Parts 
                  USFormat={props.USFormat}
                  features={props.features} 
                  updateFeature={props.updateFeature}
                  selected={props.selected}/>
            </form>
            </>
            )
    }

export default Features