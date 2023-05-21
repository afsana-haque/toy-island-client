
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleToy = () => {
    const { id } = useParams();
    console.log(id)
    const [singleToys, setSingleToys] = useState([]);
    const { picture, name, seller, email, price, rating, quantity, description } = singleToys;

    useEffect(() => {
        fetch(`https://toy-island-server.vercel.app/allToy/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleToys(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center'>Toys Details</h2>
            <div className='m-12'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h4> Seller Name: {seller}</h4>
                        <p> Seller email: {email}</p>
                        <p> Price: ${price}</p>
                        <p> Rating: {rating}</p>
                        <p> Quantity: {quantity}</p>
                        <p> Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;