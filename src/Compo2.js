import React from 'react';

const Compo2 =  (({name})=>{
    console.log('click')
    return (
        <div>
            test {name}
        </div>
    )
});

export default Compo2;