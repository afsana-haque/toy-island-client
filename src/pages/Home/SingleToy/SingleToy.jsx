import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleToyCard from './SingleToyCard';

const SingleToy = () => {
    const {id} = useParams();
    console.log(id)
    const [singleToys, setSingleToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-island-server.vercel.app/allToy/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleToys(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center'>Toys Details</h2>
            <div>
                {
                    singleToys.map(singleToy => <SingleToyCard
                    key={singleToy._id}
                    singleToy={singleToy}
                    ></SingleToyCard>)
                }
            </div>
        </div>
    );
};

export default SingleToy;