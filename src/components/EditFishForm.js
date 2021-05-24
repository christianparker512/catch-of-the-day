import React from "react";


class EditFishForm extends React.Component {
    render(){
        return (
        <div className="fish-edit">
            <input type="text" name="name" />
            <input type="text" name="price" />
            <select type="text" name="status" />
                <option value="available">Fresh!</option>
                <option value="available">Fresh!</option>
            <textarea name="desc" />
            <input type="text"
             name="image"
            onChange={this.handleChange}
            value={this.props.fish.image}
            />
            <button>Remove Fish</button>
        </div>

    );
    }
}
export default EditFishForm;

