import React from "react";

class AddFishForm extends React.Component {
    createFish = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        console.log("Making a fish!")
    }
    render() {
        return (

                <form className="fish-edit" onSubmit={this.createFish}>
                    <input name="name" type="text" placeholder="Name"/>
                    <input name="price" type="text" placeholder="Price"/>
                    <select name ="status">
                        <option value="available">Fresh</option>
                        <option value="unavailable">Sold Out</option>

                    </select>
                    <textarea name="desc" placeholder="decs"/>
                    <input name="image" type="text" placeholder="name"/>
                    <button type="submit">+ Add Fish</button>
                </form>


        );
    }
}

export default AddFishForm;