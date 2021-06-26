import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h5>Welcome to Home page</h5>
            <Link to='/'>return</Link>
        </div>
    );
};

export default Home;