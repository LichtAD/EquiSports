// my equipment list - 4th in nav
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMyEquipment from './SingleMyEquipment';
import { AuthContext } from '../provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';

const EquipmentList = () => {

    const { user } = useContext(AuthContext);

    const loadedEquipment = useLoaderData();
    // console.log(loadedEquipment);

    const filterdData = loadedEquipment.filter(data => data.email === user?.email);
    // console.log(filterdData);

    const [myEquipment, setMyEquipment] = useState(filterdData);

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Equipment | EquiSports</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className='text-center text-3xl font-bold my-4'>
                <Fade delay={1e3} cascade damping={1e-1}>My Equipment</Fade>
            </h1>
            <div className='my-4'>
                {/* <h3 className='text-center text-3xl font-bold'>Equipment List</h3> */}
                <h1 className='text-center text-2xl font-bold'>Name: {user?.displayName}</h1>
                <h2 className='text-center text-2xl font-bold'>Email: {user?.email}</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    myEquipment.map((equipment, index) => <SingleMyEquipment key={index} equipment={equipment} myEquipment={myEquipment} setMyEquipment={setMyEquipment}></SingleMyEquipment>)
                }
            </div>
        </div>
    );
};

export default EquipmentList;