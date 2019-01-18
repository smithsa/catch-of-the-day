import React from 'react';

class EditFishForm extends React.Component{
    handleChange = (event) =>{
        console.log(event.currentTarget.value);
        const updatedFish = {
            ... this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.fishKey, updatedFish);
    }
    render(){
        return (
            <div className="fish-edit">
                <input type="text" onChange={this.handleChange} name="name" value={this.props.fish.name}/>
                <input type="text" onChange={this.handleChange} name="price" value={this.props.fish.price} />
                <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" onChange={this.handleChange} name="desc" value={this.props.fish.desc}/>
                <input type="text" onChange={this.handleChange} name="image" value={this.props.fish.image}/>
                <button onClick={() => {
                    this.props.deleteFish(this.props.fishKey);
                }}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFishForm;
