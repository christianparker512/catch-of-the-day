import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    goToStore(event){
        event.preventDefault();
        console.log("Going to the store");
        //1. Stop the form from submitting
        //2. get the text from that input

        //3. change the page to /store/whatever-they-entered.
    }

    render() {
    return (
        <form className="store-selector">
        <h2>Please Enter a Store</h2>
            <button onClick={this.handleClick}>Click Me!</button>
        <input type="text" required placeholder = "Store name" defaultValue={getFunName()}/>
        <button type="submit">Visit store</button>
        </form>

    );
}
}
export default StorePicker;