import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(() => {
        return JSON.parse(localStorage.getItem('formData')) || {};
    });
    const [canProceed, setCanProceed] = useState(false);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const nextStep = () => {
        if (canProceed) {
            setStep((prev) => Math.min(prev + 1, 3));
        } else {
            alert("Please fill in all required fields."); // Alert if fields are not filled
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const resetFormData = () => {
        setFormData({});
    };

    const handleSubmit = () => {
        alert('Form submitted! Thank you for your application.');
        localStorage.removeItem('formData'); // Clear local storage after submission
        resetFormData(); // Reset form data
        setStep(1); // Reset to Step 1 for a new form
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 handleChange={handleChange} formData={formData} setCanProceed={setCanProceed} />;
            case 2:
                return <Step2 handleChange={handleChange} formData={formData} />;
            case 3:
                return <Step3 formData={formData} prevStep={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="tab-navigation">
                <button onClick={() => setStep(1)} disabled={step === 1}>Step 1</button>
                <button onClick={() => setStep(2)} disabled={step === 2}>Step 2</button>
                <button onClick={() => setStep(3)} disabled={step === 3}>Step 3</button>
            </div>
            {renderStep()}
            <div className="navigation-buttons">
                {step > 1 && (
                    <button onClick={prevStep} disabled={step === 1}>Back</button>
                )}
                {step === 3 ? (
                    <button type="button" onClick={handleSubmit}>Submit</button>
                ) : (
                    <button onClick={nextStep} disabled={!canProceed}>Next</button> // Enable based on canProceed
                )}
            </div>
        </div>
    );
};

export default MultiStepForm;
