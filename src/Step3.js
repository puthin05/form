import React from 'react';

const Step3 = ({ formData }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted! Thank you for your application.');
        localStorage.removeItem('formData'); // Clear local storage after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form Review</h2>
            <p>Please review your information before submitting:</p>
            <div style={{ 
                whiteSpace: 'pre-wrap', 
                backgroundColor: '#f8f8f8', 
                padding: '10px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', // Optional: add border for better box effect
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)' // Optional: add shadow for depth
            }}>
                <h3>Your Information:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
           
        </form>
    );
};

export default Step3;
