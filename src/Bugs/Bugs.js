import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BugsView from "./BugsView";


const initialFormData = {
    severity: "normal",
    username: "",
    mail: "",
    description: "",
    attachments: []
};

export default function Bugs() {
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
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

    const handleAddAttachments = (e) => {
        if (e.target.files[0]) {
            let url = URL.createObjectURL(e.target.files[0]);
            let atchs = [...formData.attachments];
            atchs.push(url);
            setFormData({...formData, attachments: atchs });
        }
    };

    const handleDeleteAttachment = (index) => {
        let atchs = [...formData.attachments];
        if (index > -1) {
            atchs.splice(index, 1);
        }
        setFormData({...formData, attachments: atchs });
    };

    return (
        <BugsView
            formData={formData}
            validated={validated}
            change={handleChange}
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}
            addAttachments={handleAddAttachments}
            deleteAttachment={handleDeleteAttachment}/>
  );
}
