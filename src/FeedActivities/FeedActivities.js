import React, { useEffect, useState } from "react";
import FeedActivitiesView from "./FeedActivitiesView";
import { useHistory } from "react-router-dom";
import { Form } from "./../common/services/form";
import { useForm } from "./../common/hooks/useForm";

const form = {
    username: {
        type: "string",
        initialValue: "",
        mandatory: false
    },
    mail: {
        type: "string",
        initialValue: "",
        mandatory: true
    },
    activity: {
        type: "string",
        initialValue: "Mime",
        mandatory: true
    },
    activityContent: {
        type: "object",
        initialValue: {},
        mandatory: true
    }
};
  
export default function FeedActivities() {
    const history = useHistory();
    const { formData, formErrors, isFormValid, formInputChange, checkForm } = useForm(form);
    
    const handleSubmit = () => {
        let result = checkForm();
        console.log(result);
    };
    
    // const handleSubmit = () => {
    //     console.log('ok')
    //     setDataValid(form.getIsValid());
    //     setFieldsError(form.getErrors());
    //     if (!form.getIsValid()) {
    //         return;
    //     }
    //     // Http request
    // };

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
            fieldsValue={formData}
            fieldsError={formErrors}
            isDataValid={isFormValid}
            
            formInputChange={formInputChange}
            
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}/>
    );
}
