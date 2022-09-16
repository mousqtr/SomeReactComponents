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
                        <FormGroup as={Row} className="mb-2">
                        <FormLabel column sm="3">
                            *Nom d'utilisateur
                        </FormLabel>
                        <Col sm="9">
                            <FormControl
                                type="username"
                                placeholder="Nom d'utilisateur"
                                value={props.data.username}
                                onChange={(e) => props.setData({ ...props.data, username: e.target.value })}
                                disabled
                            />
                        </Col>
                        </FormGroup>

                        <FormGroup as={Row} className="mb-2">
                        <FormLabel column sm="3">
                            *Email
                        </FormLabel>
                        <Col sm="9">
                            <FormControl
                                type="email"
                                placeholder="Email"
                                value={props.data.mail}
                                onChange={(e) => props.setData({ ...props.data, mail: e.target.value })}
                                style={{ border: props.conditions.mail ? "" : "2px solid red" }}/>
                        </Col>
                        </FormGroup>
                        
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                *Activité
                            </Form.Label>
                            <Col sm="9">
                                <FormControl
                                    as="select"
                                    value={props.data.activity}
                                    onChange={(e) => props.setData({ ...props.data, activity: e.target.value })}>
                                        {["Quiz", "Mime"].map((activ, index) => (
                                            <option key={index} value={activ}>{activ}</option>
                                        ))}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        
                        { (props.data.activity === 'Quiz') ? <FeedQuiz /> : <></>}
                        { (props.data.activity === 'Mime') ? <FeedMime /> : <></>}

                        {!props.conditionsValid ? (
                        <small className="form-text">
                            * Veuillez compléter les champs obligatoires
                        </small>
                        ) : (
                        <></>
                        )}

                        <div className="buttons">
                            <button className="btn btn-purple float-left" onClick={props.reset}>
                                Vider les champs
                            </button>
                            <button className="btn btn-red mr-1" onClick={props.cancel}>
                                Quitter
                            </button>
                            <button className="btn btn-green" onClick={props.submit}>
                                Valider
                            </button>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </div>    
  );
}
