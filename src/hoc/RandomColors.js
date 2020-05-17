import React from 'react'

const RandomColors = (WrappedComponent) => {
    const colours = ['blue','red','yellow','indigo'];
    const randomColour = colours[Math.floor(Math.random() *5)];
    const className = randomColour + '-text';
    return ( props ) => {
        return(
            <div className={className}>
            <WrappedComponent {...props}/>
            </div>
        )
    };
}
 
export default RandomColors;