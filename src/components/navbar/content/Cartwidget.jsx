import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cartwidget = () => {


    return (
        <>
            <div className='iconCart'>
                <button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </>
    );
}

export default Cartwidget;
