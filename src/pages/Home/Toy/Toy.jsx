import React from 'react';

const Toy = () => {
    return (
        <div className='my-12'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-6 gap-5 px-10'>
                <div>
                    <img src="https://i.ibb.co/F76dhZ5/c.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Bicycle</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/jGLSDB0/d.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Doll</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/yfXDyns/t.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Teddy Bear</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/X5Vz2Xy/r.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Rubber Duck</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/wC8P7Q3/a.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Airplane</h4>
                </div>
                <div>
                    <img src="https://i.ibb.co/kJYZmGT/o.png" alt="" />
                    <h4 className='font-semibold hover:text-info py-5'>Rocking Horse</h4>
                </div>
            </div>
        </div>
    );
};

export default Toy;