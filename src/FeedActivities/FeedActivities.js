import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { constants } from './constants';
import FeedActivitiesView from './FeedActivitiesView';
import "./FeedActivities.scss";

 
const initialActivityData = Object.keys(constants.activities).reduce((acc, curr) => {
    acc[curr] = constants.activities[curr].default;
    return acc;
}, {});
  
export default function FeedActivities() {
    const history = useHistory();
    const [formData, setFormData] = useState(initialActivityData);
    const [validated, setValidated] = useState(false);
    const [currentActivity, setCurrentActivity] = useState('');
    
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
    };
    
    useEffect(() => {
        let activityName = formData.activity.toLowerCase();
        let activityData = {};
        if (formData.activity !== '') {
            activityData = Object.keys(constants[activityName]).reduce((acc, curr) => {
                acc[curr] = constants[activityName][curr].default;
                return acc;
            }, {});
        }
        setFormData({ ...formData, ...activityData});
        setValidated(false);
        setCurrentActivity(formData.activity);
    }, [formData.activity]);

    const handleCancel = () => {
        history.push({ pathname: "/" });
    };

    const handleReset = () => {
        setFormData(initialActivityData);
        setValidated(false);
    };

    return (
       <FeedActivitiesView
            formData={formData}
            validated={validated}
            currentActivity={currentActivity}
        
            change={handleChange}
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}/>
    );
}
