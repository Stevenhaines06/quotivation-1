import React from "react";

const Message = ({ messageText, removeMessage }) => {



    return (

        <div className="message">
            <p>{messageText}</p>
            <span className="close-message" onClick={removeMessage}>X</span>
            {/* no parameter on the removeMessage means we don't need to invoke a callback function */}
        </div>
    )
}

export default Message;