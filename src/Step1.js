import React, { useEffect } from 'react';

const Step1 = ({ handleChange, formData, setCanProceed }) => {
    const { name, email, phone } = formData;

    useEffect(() => {
        // Check if all fields are filled
        setCanProceed(!!(name && email && phone));
    }, [name, email, phone, setCanProceed]);

    return (
        <form>
            <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name || ''} 
                    onChange={(e) => handleChange({ name: e.target.value })} 
                />
            </div>
            <div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email || ''} 
                    onChange={(e) => handleChange({ email: e.target.value })} 
                />
            </div>
            <div>
                <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={phone || ''} 
                    onChange={(e) => handleChange({ phone: e.target.value })} 
                />
            </div>
        </form>
    );
};

export default Step1;
