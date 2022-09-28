import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FeedbackView from "./FeedbackView";

const initialFormData = {
    username: "",
    mail: "",
    description: ""
};

export default function Feedback() {
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        console.log('submit');
        const form = e.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };

    const handleCancel = () => {
        history.push({ pathname: "/" });
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setValidated(false);
    };
    
    const handleChange = (e) => { 
        setFormData({ ...formData, [e.target.name]:  e.target.value });
    }

    return (
        <FeedbackView
            formData={formData}
            validated={validated}
            change={handleChange}
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}/>
    );
}
