
import React, { useContext, useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';
import { useNavigate } from 'react-router-dom';


const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://toy-island-server.vercel.app/allToy',)
    .then(res => res.json())
    .then(data => {
    
      if(!data.error){
        setAllToys(data)
    }
    else{
        navigate('/');
    }
    })
  },[])
  
  return (
        <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr> 
              <th>Seller</th> 
              <th>Toy Name</th> 
              <th>Sub-category</th> 
              <th>Price</th> 
              <th>Available Quantity</th> 
              <th>View Details button</th>
              <th></th>
            </tr>
          </thead> 
          <tbody>
            {
              allToys.map(allToy => <AllToyTable 
              key={allToy._id}
              allToy={allToy}
              ></AllToyTable>)
            }
          </tbody> 
        </table>
      </div>
    );
};

export default AllToy;