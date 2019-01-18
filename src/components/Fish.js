import React from 'react';
import fishes from "../sample-fishes";
import {formatPrice} from '../helpers';

class Fish extends React.Component{
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };
    render(){
        const {image, name, price, desc, status} = this.props.details;
        const isAvailabe = status === 'available';
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p className="description">{desc}</p>
                <button
                    onClick={this.handleClick} disabled={!isAvailabe}>{isAvailabe ? 'Add to Order': 'Sold Out'}
                </button>
            </li>

        );
    }
}

export default Fish;
