import React, { Fragment, useState } from 'react';

import FRIinput from './FRIinput';

const FRIinputRef = () => {

    const ref = React.createRef();

    const clickHandler = () => {

        ref.current.focus()
    }


    return (
        <Fragment>
            <button onClick={() => {

                clickHandler()
            }}>
                Click Me
            </button>
            <FRIinput ref={ref}/>
        </Fragment>
    )
}

export default FRIinputRef