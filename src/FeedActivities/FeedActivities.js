import React, { useState } from "react";
import FeedActivitiesView from "./FeedActivitiesView";
import { useHistory } from "react-router-dom";

const FIELDS = {
    username: {
        type: "string",
        value: "",
        mandatory: false
    },
    mail: {
        type: "string",
        value: "",
        mandatory: true
    },
    activity: {
        type: "string",
        value: "Mime",
        mandatory: true
    },
    activityContent: {
        type: "object",
        value: {},
        mandatory: true
    }
};

const FIELDS_VALUE = Object.keys(FIELDS).reduce((acc, curr) => {
  acc[curr] = FIELDS[curr].value;
  return acc;
}, {});

const FIELDS_ERROR = Object.keys(FIELDS).reduce((acc, curr) => {
  acc[curr] = false;
  return acc;
}, {});

  
export default function FeedActivities() {
    const history = useHistory();
    const [fieldsValue, setFieldsValue] = useState(FIELDS_VALUE);
    const [fieldsError, setFieldsError] = useState(FIELDS_ERROR);
    const [isDataValid, setDataValid] = useState(true);
  
    const handleSubmit = () => {
        let fieldsError = { ...fieldsError };
        let isValid = true;
        Object.keys(FIELDS).forEach((f) => {
            if (FIELDS[f].mandatory && (
                (FIELDS[f].type === "string" && fieldsValue[f] === "") ||
                (FIELDS[f].type === "object" && Object.keys(fieldsValue[f]).length === 0)
            )) {
                fieldsError[f] = true;
                isValid = false;
            } else {
                fieldsError[f] = false;
            }
        });
        setDataValid(isValid);
        setFieldsError(fieldsError);

        if (!isValid) {
            return;
        }

        // Http request
    };

    const handleCancel = () => {
        history.push({ pathname: "/" });
    };

    const handleReset = () => {
        setFieldsValue(FIELDS_VALUE);
        setFieldsError(FIELDS_ERROR);
        setDataValid(true);
    };

    return (
        <FeedActivitiesView
            fieldsValue={fieldsValue}
            fieldsError={fieldsError}
            isDataValid={isDataValid}
            
            setFieldsValue={setFieldsValue}
            
            submit={handleSubmit}
            cancel={handleCancel}
            reset={handleReset}/>
    );
}
