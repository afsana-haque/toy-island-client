import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import AllToyTable from './AllToyTable';

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('https://toy-island-server.vercel.app/allToy',)
    .then(res => res.json())
    .then(data => {
      setAllToys(data)
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