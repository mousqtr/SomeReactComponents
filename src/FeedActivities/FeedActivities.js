import React, { useState } from "react";
import FeedActivitiesView from "./FeedActivitiesView";
import { useHistory } from "react-router-dom";

const initialData = {
    username: "",
    mail: "",
    activity: "Quiz",
    activityData: {}
};

const initialConditions = {
    mail: true,
    activity: true
};
  
  
export default function FeedActivities() {
  const history = useHistory();
  const [data, setData] = useState(initialData);
  const [conditions, setConditions] = useState(initialConditions);
  const [conditionsValid, setConditionsValid] = useState(true);

  const handleSubmit = () => {
    let cond = { ...conditions };
    let condValid = true;
    Object.keys(initialConditions).forEach((field) => {
      if (data[field] === "") {
        console.log(field);
        cond[field] = false;
        condValid = false;
      } else {
        cond[field] = true;
      }
    });
    setConditions(cond);
    setConditionsValid(condValid);

    if (!condValid) {
      return;
    }

    // HTTP Request
  };

  const handleCancel = () => {
    history.push({ pathname: "/" });
  };

  const handleReset = () => {
    setData(initialData);
    setConditions(initialConditions);
    setConditionsValid(true);
  };

  const handleAddAttachments = (e) => {
    if (e.target.files[0]) {
      let url = URL.createObjectURL(e.target.files[0]);
      let atchs = [...data.attachments];
      atchs.push(url);
      setData({...data, attachments: atchs});
      console.log(atchs);
    }
  };

  const handleDeleteAttachment = (index) => {
    let atchs = [...data.attachments];
    if (index > -1) {
      atchs.splice(index, 1);
    }
    setData({...data, attachments: atchs});
    console.log(atchs);
  };

  return (
    <FeedActivitiesView
      data={data}
      conditions={conditions}
      conditionsValid={conditionsValid}
      setData={setData}
      submit={handleSubmit}
      cancel={handleCancel}
      reset={handleReset}
      addAttachments={handleAddAttachments}
      deleteAttachment={handleDeleteAttachment}
    />
  );
}
