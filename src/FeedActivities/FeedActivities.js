import React, { useEffect, useState } from "react";
import FeedActivitiesView from "./FeedActivitiesView";
import FeedMime from "./FeedMime/FeedMime";
import { useHistory } from "react-router-dom";
import { useForm } from "./../common/hooks/useForm";
import { forms } from './forms';

  
export default function FeedActivities() {
    const history = useHistory();
    const [isFormValid, setIsFormValid] = useState(true);
    // const [formData, formErrors, formInputChange, checkForm] = useForm(forms.activity);
    // const [formDataMime, formErrorsMime, formInputChangeMime, checkFormMime] = useForm(forms.mime);
    const formActivity = useForm(forms.activity);
    const formMime = useForm(forms.mime);

    const handleSubmit = () => {
        let check = formActivity.checkForm();
        let checkMime = formMime.checkForm();
        setIsFormValid(check && checkMime);
    };
    
    const getActivityForm = () => {
        const activities = {
            'Mime' : 
                <FeedMime 
                    formData={formMime.formData} 
                    formErrors={formMime.formErrors} 
                    formInputChange={formMime.formInputChange}/>   
        }
        return activities[formActivity.formData.activity];
    }

    const handleCancel = () => {
        history.push({ pathname: "/" });
    };

    const handleReset = () => {
        // setFieldsValue(formValues);
        // setFieldsError(formErrors);
        // setDataValid(true);
    };

    return (
        <FeedActivitiesView
            fieldsValue={formActivity.formData}
            fieldsError={formActivity.formErrors}
            formInputChange={formActivity.formInputChange}
            
            getActivityForm={getActivityForm}
            
            isFormValid={isFormValid}
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}/>
    );
}
