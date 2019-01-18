import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';
class App extends React.Component{

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        //listening to changes here but we don't want a memory leak
        const {params} = this.props.match;

        //first reinstate localstorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)}); //because it is a string we need to Parse the JSON string
        }

        //storing a reference to the database
        this.ref = base.syncState(`${params.storeId}/fishes`, { //this is the naming structure of the object in the db
            context: this, // the context
            state: 'fishes' //the nested object we want to access
        });
    }

    componentWillUnmount(){
        //stopping listening to changes to prevent a memory leak
        base.removeBinding(this.ref);
    }

    componentDidUpdate(){
        const {params} = this.props.match;
        localStorage.setItem( params.storeId, JSON.stringify(this.state.order));
    }

    addFish = (fish) => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes});
    }

    updateFish = (key, updatedFish) =>{
        const fishes = {... this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({fishes});
    }

    deleteFish = (key) =>{
        //1. take a compuy of state.
        const fishes = {... this.state.fishes};
        //2. update the fish, turn it to null
        fishes[key] = null;
        this.setState({fishes});
    }
    loadSampleFishes = () =>{
        this.setState({'fishes': sampleFishes});
    }

    addToOrder = (key) =>{
        let order = {...this.state.order};
        //2. add to the order or update number in order
        order[key] = order[key] + 1 || 1;
        //3.call set state to update state object
        this.setState({order});
    }

    removeFromOrder = (key) =>{
        let order = {...this.state.order};
        delete order[key];
        this.setState({order});
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish
                            index={key}
                            key={key}
                            addToOrder={this.addToOrder}
                            details={this.state.fishes[key]} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory  deleteFish={this.deleteFish} updateFish={this.updateFish} fishes={this.state.fishes} addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App
