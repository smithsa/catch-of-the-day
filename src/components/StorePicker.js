import {Component} from "react";
import React from "react";
import {getFunName} from '../helpers.js';

class StorePicker extends Component{
    myInput = React.createRef();
    goToStore = (e) => {
        // 1.stop the form from submitting
        e.preventDefault();

        // 2. get the text from the input
        console.log(this.myInput);
    }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" required ref={this.myInput} placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}
export default StorePicker;
