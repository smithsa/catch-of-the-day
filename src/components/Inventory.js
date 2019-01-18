import React from 'react';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import fishes from "../sample-fishes";

class Inventory extends React.Component{
    render(){
        return (
            <div className="inventory">
                <h2>Inventory !!!</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm key={key} fishKey={key} deleteFish={this.props.deleteFish} updateFish={this.props.updateFish} fish={this.props.fishes[key]}/>)}
                <AddFishForm
                    addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample</button>
            </div>
        );
    }
}

export default Inventory;
