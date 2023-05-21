import React from 'react';
import { Link } from 'react-router-dom';

const AllToyTable = ({ allToy }) => {
    const {_id, name,category,price,quantity, seller} = allToy;
    return (
        <>
            <tr>
                <td>{seller}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><Link to={`/singleToy/${_id}`}>
                <button className='btn btn-info text-white'>View Details</button>
                </Link></td>
            </tr>

        </>
    );
};

export default AllToyTable;