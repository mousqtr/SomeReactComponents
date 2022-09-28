import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import {
  FormGroup,
  Form,
  Col,
  Row,
  FormLabel,
  FormControl,
  InputGroup
} from "react-bootstrap";

import "./Settings.scss";

export default function SettingsView(props) {
  return (
    <div id="settings" className="section-screen">
        <div className="section-central">
            <Breadcrumb paths={ ['Accueil', 'Nous aider', 'Votre avis']} /> 
            <div className="special-section">
                <div className="special-section-title center">
                    <h1>Paramètres utilisateur</h1>
                </div>

                <div className="special-section-content">
                    <div className="special-section-form">
                        <Form noValidate validated={props.validated} onSubmit={props.submit}>
                            
                            {/* Username */}
                            <FormGroup as={Row} className="mb-2">
                                <FormLabel column sm="3">
                                    *Nom d'utilisateur
                                </FormLabel>
                                <Col sm="9">
                                    <InputGroup hasValidation>
                                    <FormControl
                                        type="text"
                                        name="username"
                                        placeholder="Nom d'utilisateur"
                                        value={props.formData.username}
                                        onChange={props.change}
                                        required/>
                                        <Form.Control.Feedback type="invalid">
                                            Merci de renseigner un username
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            {/* Email */}
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column sm="3">
                                    *E-mail
                                </Form.Label>
                                <Col sm="9">
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            name="mail"
                                            placeholder="E-mail"
                                            aria-describedby="inputGroupPrepend"
                                            value={props.formData.mail}
                                            onChange={props.change}
                                            required/>
                                        <Form.Control.Feedback type="invalid">
                                            Merci de renseigner un Email
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                        
                            {/* Bio */}
                            <FormGroup as={Row} className="mb-2">
                                <FormLabel column sm="3">
                                    Bio
                                </FormLabel>
                                <Col sm="9">
                                    <FormControl
                                        as="textarea"
                                        name="bio"
                                        aria-label="With textarea"
                                        placeholder="Bio"
                                        value={props.formData.bio}
                                        onChange={props.change}/>
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
