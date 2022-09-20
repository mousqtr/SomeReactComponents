import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import FeedQuiz from "./FeedQuiz/FeedQuiz";
import FeedMime from "./FeedMime/FeedMime";
import {
  Button,
  FormGroup,
  Form,
  Col,
  Row,
  FormLabel,
  FormControl,
  FormCheck,
  InputGroup
} from "react-bootstrap";

import "./FeedActivities.scss";

export default function FeedActivitiesView(props) {
  return (
    <div id="feedActivities" className="section-screen">
        <div className="section-central">
            <Breadcrumb paths={ ['Accueil', 'Nous aider', 'Activitiés']} /> 
            <div className="special-section">
                <div className="special-section-title center">
                    <h1>Contribuer aux activitiés</h1>
                </div>

                <div className="special-section-content">
                    <div className="special-section-form">
                        <Form noValidate validated={props.validated} onSubmit={props.submit}>
                            <FormGroup as={Row} className="mb-2">
                                <FormLabel column sm="3">
                                    *Nom d'utilisateur
                                </FormLabel>
                                <Col sm="9">
                                    <FormControl
                                        type="username"
                                        name="username"
                                        placeholder="Nom d'utilisateur"
                                        value={props.formData.username}
                                        onChange={props.change}
                                        disabled
                                    />
                                </Col>
                            </FormGroup>
                            
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column sm="3">
                                    *Email
                                </Form.Label>
                                <Col sm="9">
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            name="mail"
                                            placeholder="Mail"
                                            aria-describedby="inputGroupPrepend"
                                            value={props.formData.mail}
                                            onChange={props.change}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a mail.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            
                            <FormGroup as={Row} className="mb-2">
                                <Form.Label column sm="3">
                                    *Activité
                                </Form.Label>
                                <Col sm="9">
                                    <FormControl
                                        name="activity"
                                        as="select"
                                        value={props.formData.activity}
                                        onChange={props.change}
                                        required>
                                            {["Quiz", "Mime"].map((activ, index) => (
                                                <option key={index} value={activ}>{activ}</option>
                                            ))}
                                    </FormControl>
                                </Col>
                            </FormGroup>

                            <div className="buttons">
                                <button className="btn btn-purple float-left" onClick={props.reset}>
                                    Vider les champs
                                </button>
                                <button className="btn btn-red mr-1" onClick={props.cancel}>
                                    Quitter
                                </button>
                                <button className="btn btn-green" type="submit">
                                    Valider
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>       
        </div>
    </div>    
  );
}
