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
  InputGroup,
} from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

import "./Bugs.scss";

export default function BugsView(props) {
  return (
    <div id="bugs" className="section-screen">
      <div className="section-central">
        <Breadcrumb paths={["Accueil", "Nous aider", "Anomalies"]} />
        <div className="special-section">
          <div className="special-section-title center">
            <h1>Remonter une anomalie</h1>
          </div>

          <div className="special-section-content">
            <div className="special-section-form">
              <Form
                noValidate
                validated={props.validated}
                onSubmit={props.submit}
              >
                {/* Username */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    *Nom d'utilisateur
                  </FormLabel>
                  <Col sm="9">
                    <FormControl
                      type="text"
                      name="username"
                      placeholder="Nom d'utilisateur"
                      value={props.formData.username}
                      onChange={props.change}
                      disabled
                    />
                  </Col>
                </FormGroup>

                {/* Email */}
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    *E-mail
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        name="mail"
                        placeholder="E-mail"
                        aria-describedby="inputGroupPrepend"
                        value={props.formData.mail}
                        onChange={props.change}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Merci de renseigner un Email
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </Form.Group>

                {/* Severity */}
                <FormGroup as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    *Sévérité
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup hasValidation>
                      <FormControl
                        as="select"
                        name="severity"
                        value={props.formData.severity}
                        onChange={props.change}
                      >
                        {["Faible", "Normal", "Elevé"].map((sev, index) => (
                          <option key={index} value={sev}>
                            {sev}
                          </option>
                        ))}
                      </FormControl>
                      <Form.Control.Feedback type="invalid">
                        Merci de renseigner une severité
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Description */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    *Description
                  </FormLabel>
                  <Col sm="9">
                    <InputGroup hasValidation>
                      <FormControl
                        as="textarea"
                        name="description"
                        aria-label="With textarea"
                        placeholder="Description"
                        value={props.formData.description}
                        onChange={props.change}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Merci de saisir une description
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Attachments */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Pièces-jointes
                  </FormLabel>
                  <Col sm="9">
                    <FormControl
                      type="file"
                      multiple
                      onChange={props.addAttachments}
                    />
                  </Col>
                </FormGroup>

                <FormGroup as={Row} className="mb-2">
                  <Col sm="3"></Col>
                  <Col sm="9">
                    {props.formData.attachments.map((attachment, index) => (
                      <div key={index} className="attachment">
                        <img src={attachment} alt="attachment" />
                        <FaTrashAlt
                          className="cross"
                          onClick={() => props.deleteAttachment(index)}
                        />
                      </div>
                    ))}
                  </Col>
                </FormGroup>

                <div className="buttons">
                  <button
                    className="btn btn-purple float-left"
                    onClick={props.reset}
                  >
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
      </div>
    </div>
  );
}
