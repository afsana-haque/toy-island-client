import React from 'react';

const SingleToyCard = ({ singleToy }) => {
    const { picture, name, seller, email, price, rating, quantity, description } = singleToy;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> Seller Name: {seller}</p>
                <p> Seller email: {email}</p>
                <p> Price: {price}</p>
                <p> Rating: {rating}</p>
                <p> Quantity: {quantity}</p>
                <p> Description: {description}</p>
            </div>
        </div>
    );
};

export default SingleToyCard;