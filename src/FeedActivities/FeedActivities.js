import React, { useEffect, useState } from "react";
import FeedActivitiesView from "./FeedActivitiesView";
import FeedMime from "./FeedMime/FeedMime";
import { useHistory } from "react-router-dom";
// import { useForm } from "./../common/hooks/useForm";
import { forms } from './forms';

  
export default function FeedActivities() {
    const history = useHistory();
    // const [isFormValid, setIsFormValid] = useState(true);
    // const [formData, formErrors, formInputChange, checkForm] = useForm(forms.activity);
    // const [formDataMime, formErrorsMime, formInputChangeMime, checkFormMime] = useForm(forms.mime);
    // const formActivity = useForm(forms.activity);
    // const formMime = useForm(forms.mime);
    const [formData, setFormData] = useState({
        name: '',
        mail: '',
        activity: ''
    });
    const [validated, setValidated] = useState(false);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        console.log('submit');
        const form = e.currentTarget;
        console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);
        // let check = formActivity.checkForm();
        // let checkMime = formMime.checkForm();
        // setIsFormValid(check && checkMime);
    };
    
    useEffect(() => {
        let activityData = {};
        switch(formData.activity) {
            case 'Mime':
                activityData = {theme: 'Football', word: ''};
                break;
            default:
                break;     
        }
        setFormData({ ...formData, activityData});
    }, [formData.activity])
    
    const getActivityForm = useMemo(() => {
        const activities = {
            '' : <></>,
            'Mime' : <FeedMime formData={formData} change={handleChange}/>   
        }
        return activities[formData.activity]; 
    }, [formData.activity]);

    const handleCancel = () => {
        history.push({ pathname: "/" });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            mail: '',
            activity: 'Mime'
        });
        setValidated(false);
    };

    return (
        <FeedActivitiesView
            formData={formData}
            validated={validated}
            change={handleChange}
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}
            getActivityForm={getActivityForm}/>
    );
}
