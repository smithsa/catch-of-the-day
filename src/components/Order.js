import React from 'react';
import {formatPrice} from "../helpers";

class Order extends React.Component{
    renderOrder = (key, index) =>{
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        if(!fish){
            return null;
        }

        if(!isAvailable){
            return (<li key={index}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>);
        }
        return <li key={index}>
            {count} lbs {fish.name}
            {formatPrice(fish.price * count)}
            </li>;
    }
    render(){
        const orderIDs = Object.keys(this.props.order);
        const total = orderIDs.reduce((orderTotal, orderID) => {
            const fish = this.props.fishes[orderID];
            const count = this.props.order[orderID];
            const isAvailabe = fish && fish.status === 'available';
            if(isAvailabe){
                const price = fish.price;
                return orderTotal += (count * price);
            }
            return orderTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Your Order</h2>
                <ul className="order">
                    {orderIDs.map((key, index) => this.renderOrder(key, index))}
                </ul>
                <ul>
                    <li>{formatPrice(total)}</li>
                </ul>
            </div>
        );
    }
}

export default Order;
