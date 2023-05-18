import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_homeslider/images/banner-1.jpg" className="w-full h-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-36 left-12 top-1/2">
                        <div>
                            <h2 className='lg:text-4xl text-xl font-bold text-white pb-4'>Baby & Kids<br/> Toys Sale</h2>
                            <p className='text-gray-100 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Accusantium enim non aut perferendis tempora modi.</p>
                            <button className='btn btn-info text-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_homeslider/images/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-36 left-12 top-1/2">
                        <div>
                            <h2 className='lg:text-4xl text-xl font-bold text-white pb-4'>Baby & Kids<br/> Toys Sale</h2>
                            <p className='text-gray-100 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Accusantium enim non aut perferendis tempora modi.</p>
                            <button className='btn btn-info text-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_homeslider/images/banner-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-36 left-12 top-1/2">
                        <div>
                            <h2 className='lg:text-4xl text-xl font-bold text-white pb-4'>Baby & Kids<br/> Toys Sale</h2>
                            <p className='text-gray-100 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Accusantium enim non aut perferendis tempora modi.</p>
                            <button className='btn btn-info text-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://www.mahardhi.com/prestashop/MT03/kiddle/modules/mt_homeslider/images/banner-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-info text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-info text-white">❯</a>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-36 left-12 top-1/2">
                        <div>
                            <h2 className='lg:text-4xl text-xl font-bold text-white pb-4'>Baby & Kids<br/> Toys Sale</h2>
                            <p className='text-gray-100 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Accusantium enim non aut perferendis tempora modi.</p>
                            <button className='btn btn-info text-white'>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;