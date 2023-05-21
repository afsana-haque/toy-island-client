import React from 'react';

const GallerySection = () => {
    return (
        <div>
            <div className='my-12'>
                <h2 className='text-3xl font-bold text-center'>Gallery Section</h2>
            </div>
           <div className='grid lg:grid-cols-3 gap-6'>
           <div>
           <img src="https://i.ibb.co/0X9dvcV/consectetur-adipiscing.jpg" alt="" className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-2xl" />
           </div>
            <div>
            <img src="https://i.ibb.co/RYBp65d/lorem-ipsum-dolo.jpg" alt="" className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-2xl" />
            </div>
           <div>
           <img src="https://i.ibb.co/zftR20d/lorem-ipsum-dolor.jpg" alt="" className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-2xl" />
           </div>
           </div>

        </div>
    );
};

export default GallerySection;