import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
    const { address1, address2, city, state, zip } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep(); // Proceed to the next step without validation
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Address Line 1" 
                value={address1 || ''} 
                onChange={(e) => handleChange({ address1: e.target.value })} 
                required 
            />
            <input 
                type="text" 
                placeholder="Address Line 2" 
                value={address2 || ''} 
                onChange={(e) => handleChange({ address2: e.target.value })} 
            />
            <input 
                type="text" 
                placeholder="City" 
                value={city || ''} 
                onChange={(e) => handleChange({ city: e.target.value })} 
                required 
            />
            <input 
                type="text" 
                placeholder="State" 
                value={state || ''} 
                onChange={(e) => handleChange({ state: e.target.value })} 
                required 
            />
            <input 
                type="text" 
                placeholder="Zip Code" 
                value={zip || ''} 
                onChange={(e) => handleChange({ zip: e.target.value })} 
                required 
            />
            
        </form>
    );
};

export default Step2;
