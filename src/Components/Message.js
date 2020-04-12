import React from 'react';

const Message=props =>{
    return(
        <div className='red-text center'>
            {props.message.msgbody}
        </div>
    )
}

export default Message;