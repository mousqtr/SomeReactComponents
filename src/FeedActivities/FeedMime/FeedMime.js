import { useState, useEffect } from "react";
import FeedMimeView from "./FeedMimeView";
import { CONSTANTS_MIME } from './../constantsActivities';


const FIELDS = {
    theme: {
        type: "string",
        value: CONSTANTS_MIME.themes[0],
        mandatory: true
    },
    word: {
        type: "string",
        value: "",
        mandatory: true
    },
};

const FIELDS_VALUE = Object.keys(FIELDS).reduce((acc, curr) => {
  acc[curr] = FIELDS[curr].value;
  return acc;
}, {});

const FIELDS_ERROR = Object.keys(FIELDS).reduce((acc, curr) => {
  acc[curr] = false;
  return acc;
}, {});

export default function FeedMime(props) {
    
    const [fieldsValue, setFieldsValue] = useState(FIELDS_VALUE);
    const [fieldsError, setFieldsError] = useState(FIELDS_ERROR);
       
    const checkActivityContent = (newFields) => {
        let isValid = true;
        Object.keys(FIELDS).forEach((f) => {
            isValid = (FIELDS[f].mandatory && FIELDS[f].type === "string" && newFields[f] === "") ? false : true;
        });
        props.setActivityValue(isValid ? newFields : {});
    }
    
    const showErrors = () => {
        let fieldsError = { ...fieldsError };
        Object.keys(FIELDS).forEach((f) => {
            let isError = (FIELDS[f].mandatory && FIELDS[f].type === "string" && fieldsValue[f] === "") ? true : false;
            fieldsError[f] = props.isValid ? false : isError;
        });
        setFieldsError(fieldsError);
    }
    
    useEffect(() => {
        console.log(props.isValid)
        showErrors();
    }, [props.isValid])   
    
    const updateFieldsValue = (newFields) => {
        checkActivityContent(newFields);
        setFieldsValue(newFields);
    }

    return (
        <FeedMimeView
            fieldsValue={fieldsValue}
            fieldsError={fieldsError}
            
            setFieldsValue={updateFieldsValue}
            checkActivityContent={checkActivityContent}
        />
    )
}