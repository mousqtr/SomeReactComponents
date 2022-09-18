import React, { useState } from 'react';

export function useForm (initialForm = {}) {
    
    const [formData, setFormData] = useState(Object.keys(initialForm).reduce((acc, curr) => {
        acc[curr] = initialForm[curr].initialValue;
        return acc;
    }, {}));
    
    const [formErrors, setFormErrors] = useState(Object.keys(initialForm).reduce((acc, curr) => {
        acc[curr] = false;
        return acc;
    }, {}));
    
    const [isFormValid, setIsFormValid] = useState(true);
     
    const formInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const checkForm = () => {
        let _formErrors = {...formErrors};
        let _isValid = true;
        Object.keys(formData).forEach((f) => {
            console.log(initialForm[f])
            if (initialForm[f].mandatory && (
                (initialForm[f].type === "string" && formData[f] === "") 
                // || (initialForm[f].type === "object" && Object.keys(formData[f]).length === 0)
            )) {
                _formErrors[f] = true;
                _isValid = false;
            } else {
                _formErrors[f] = false;
            }
        });
        setFormErrors(_formErrors);
        setIsFormValid(_isValid);
        return _isValid;
    }
    
    return { formData, formErrors, isFormValid, formInputChange, checkForm };
}