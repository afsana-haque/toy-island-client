import React, { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';

const SubCategory = () => {
    const [barbie, setBarbie] = useState([]);
    const [baby, setBaby] = useState([]);
    const [american, setAmerican] = useState([]);

    useEffect(() => {
        fetch(`https://toy-island-server.vercel.app/toyByCategory?subCategory=barbie`)
        .then(res => res.json())
        .then(data => {
            setBarbie(data);
        })
    },[])
    useEffect(() => {
        fetch(`https://toy-island-server.vercel.app/toyByCategory?subCategory=baby dolls`)
        .then(res => res.json())
        .then(data => {
            setBaby(data);
        })
    },[])
    useEffect(() => {
        fetch(`https://toy-island-server.vercel.app/toyByCategory?subCategory=American girl`)
        .then(res => res.json())
        .then(data => {
            setAmerican(data);
        })
    },[])
    return (
        <div className='my-24'>
            <Tabs>
                <TabList>
                    <Tab>Barbie Doll</Tab>
                    <Tab>Baby Doll</Tab>
                    <Tab>American Girl</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        barbie.map(barbi => <SubCategoryCard
                        key={barbi._id}
                        barbi={barbi}
                        ></SubCategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        baby.map(barbi => <SubCategoryCard
                        key={barbi._id}
                        barbi={barbi}
                        ></SubCategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        american.map(barbi => <SubCategoryCard
                        key={barbi._id}
                        barbi={barbi}
                        ></SubCategoryCard>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;