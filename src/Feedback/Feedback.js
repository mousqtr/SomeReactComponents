import React, { useState } from "react";
import FeedbackView from "./FeedbackView";
// import axios from "axios";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";

export default function Feedback() {
  const history = useHistory();
  // const dispatch = useDispatch();

  const initialData = {
    severity: "normal",
    username: "",
    mail: "",
    description: "",
    attachments: []
  };

  const initialConditions = {
    mail: true,
    description: true
  };

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

    // axios
    // .post(usersClient+'/account/signup', {
    //     username        : data.username,
    //     password        : data.password,
    //     mail            : data.mail,
    //     phone           : data.phone,
    //     city            : data.city,
    //     country         : data.country,
    //     gender          : data.gender,
    //     firstName       : data.firstName,
    //     lastName        : data.lastName,
    //     birthDate       : data.birthDate,
    //     biography       : data.biography
    // })
    // .then((res) =>{
    //     console.log(res);
    //     handleReset();
    //     handleCancel();
    //     dispatch(appActions.setMessage({
    //         type: 'success',
    //         data: 'Compte crée ! Connectez-vous dès maintenant'
    //     }));
    // })
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
      setData({
        ...data,
        attachments: atchs
      });
      console.log(atchs);
    }
  };

  const handleDeleteAttachment = (index) => {
    let atchs = [...data.attachments];
    if (index > -1) {
      atchs.splice(index, 1); // 2nd parameter means remove one item only
    }
    setData({
      ...data,
      attachments: atchs
    });
    console.log(atchs);
  };

  return (
    <FeedbackView
        data={data}
        conditions={conditions}
        conditionsValid={conditionsValid}
        setData={setData}
        submit={handleSubmit}
        cancel={handleCancel}
        reset={handleReset}
        addAttachments={handleAddAttachments}
        deleteAttachment={handleDeleteAttachment}/>
  );
}
