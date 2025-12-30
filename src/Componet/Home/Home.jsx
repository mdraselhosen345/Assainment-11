import React from 'react';
import Banner from '../Banner/Banner';
import Brend from '../brend/Brend';
import Categories from '../Categories/Categories';
import Audio from '../Audio-C/Audio';
import Profile from '../Profile/Profile';
import Card from '../Card/Card';
import Login from '../Login/Login';
import Register from '../Register/Register';
const Home = () => {
    return (
        <div className='max-w-7xl justify-center'>
            <Banner></Banner>
            <Brend></Brend>
            <Categories></Categories>
            <Audio></Audio>
            <Card></Card>
            <Profile></Profile>
            {/* <Login></Login> */}
            {/* <Register></Register> */}
        </div>
    );
};

export default Home;