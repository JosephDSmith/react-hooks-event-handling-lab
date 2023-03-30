import React from "react";

function Keypad (){
    function handleInput(event){
        event.preventDefault();
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handleInput}></input>
        </div>
    )
}

export default Keypad;