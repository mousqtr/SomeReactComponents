import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
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
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import "./Feedback.scss";

export default function FeedbackView(props) {
  return (
    <div id="feedback" className="section-screen">
        <Breadcrumb paths={ ['Accueil', 'Nous aider', 'Votre avis']} /> 
        <div className="feedbackForm">
            <div className="feedbackForm-header center">
                <h1>Donner nous votre avis</h1>
                </div>

                <div className="feedbackForm-content">
                <Form>
                    <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="3">
                        *Nom d'utilisateur
                    </FormLabel>
                    <Col sm="9">
                        <FormControl
                        type="username"
                        placeholder="Nom d'utilisateur"
                        value={props.data.username}
                        onChange={(e) =>
                            props.setData({ ...props.data, username: e.target.value })
                        }
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
                        onChange={(e) =>
                            props.setData({ ...props.data, mail: e.target.value })
                        }
                        style={{
                            border: props.conditions.mail ? "" : "2px solid red"
                        }}
                        />
                    </Col>
                    </FormGroup>
                    
                    <FormGroup as={Row} className="mb-2">
                    <FormLabel column sm="3">
                        *Description
                    </FormLabel>
                    <Col sm="9">
                        <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Description"
                        value={props.data.description}
                        onChange={(e) =>
                            props.setData({
                            ...props.data,
                            description: e.target.value
                            })
                        }
                        style={{
                            border: props.conditions.description ? "" : "2px solid red"
                        }}
                        />
                    </Col>
                    </FormGroup>

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
                </Form>
            </div>
        </div>
    </div>
  );
}
