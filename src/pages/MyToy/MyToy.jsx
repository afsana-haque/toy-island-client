import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyToyTable from './MyToyTable';

const MyToy = () => {
    const [myToys, setMyToys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://toy-island-server.vercel.app/allToy',)
            .then(res => res.json())
            .then(data => {

                if (!data.error) {
                    setMyToys(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                          
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                 {
                    myToys.map(myToy => <MyToyTable
                    key={myToy._id}
                    myToy={myToy}
                    ></MyToyTable>)
                 }
         
                </tbody>
    

            </table>
        </div>
    );
};

export default MyToy;