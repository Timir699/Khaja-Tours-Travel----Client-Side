import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'


// Banner Component
const Banner = () => {
    return (
        <div className="banner text-center">
            <div className="bg-overlay">
                <h2 className="mb-4">Welcome to Khaja Tours & Travels</h2>
                <button type="button" class="btn btn-outline-success">Book Here</button>
            </div>

        </div>
    );
};

export default Banner;