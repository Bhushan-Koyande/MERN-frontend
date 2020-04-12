import React from 'react';
import { Link } from 'react-router-dom';

const Exit=()=>{
    return(
        <div className='container center'>
            <div className='center white-text'>
                <h4>Your order was successfully placed.</h4>
                <h4>It will be delivered to your location in a few minutes.</h4>
                <h2 className='green-text'>Thanks for using Crave Better</h2>
            </div>
            <div className='center-align'>
                <Link to='/index' className='btn green'>Back</Link>
            </div>
        </div>
    )
}

export default Exit;