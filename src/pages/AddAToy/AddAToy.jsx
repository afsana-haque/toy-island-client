import React from 'react';

const AddAToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const newToy = {name, picture, seller, email, category, price, rating, quantity, description};
        console.log(newToy);
        fetch('https://toy-island-server.vercel.app/addToy', {
            method: "POST",
            headers: {
                'content-type': "application/json"
               
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='bg-blue-50 p-24 mb-8 rounded'>
            <h2 className='text-center text-3xl mb-8 font-extrabold'>Add a toy</h2>
            <form onSubmit={handleAddToy}>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='picture' placeholder="Picture URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='seller' placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name='email' placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Sub-category " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex mb-6'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Toy" className="btn btn-block btn-info text-white" />


            </form>
        </div>
    );
};

export default AddAToy;