import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {


    myInput = React.createRef();
    goToStore = event => {
        event.preventDefault();

        //1. Stop the form from submitting
        //2. get the text from that input
        console.log(this.myInput.value.value);
        //3. change the page to /store/whatever-they-entered.
        this.props.history.push(`/store/${storeName}`);
    }
    componentDidMount() {
        console.log("Mounted!");
        console.log(this);
    }

    render() {

    return (
        <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <button onClick={this.handleClick}>Click Me!</button>
        <input type="text"
        ref={this.myInput}
       required
       placeholder = "Store name"
       defaultValue={getFunName()}/>
        <button type="submit">Visit store</button>
        </form>

    );
}
}
export default StorePicker;