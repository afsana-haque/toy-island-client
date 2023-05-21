import React from 'react';
import { Link } from 'react-router-dom';

const SubCategoryCard = ({barbi}) => {

    const {name, picture,price,rating } = barbi;

    return (
        <div className="card w-96 bg-base-100 shadow-xl my-6">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to="/allToy">
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;