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
import { BiPlus } from "react-icons/bi";

import "./EditProfile.scss";

export default function EditProfileView(props) {
  return (
    <div id="editProfile" className="section-screen">
      <div className="section-central">
        <Breadcrumb paths={["Accueil", "Paramètres", "Editer son profil"]} />
        <div className="special-section">
          <div className="special-section-title center">
            <h1>Editer son profil</h1>
          </div>

          <div className="special-section-content">
            <div className="special-section-form">
              <Form
                noValidate
                validated={props.validated}
                onSubmit={props.submit}
              >
                {/* Attachments */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Image de profil
                  </FormLabel>
                  <Col sm="9">
                    <FormControl
                      type="file"
                      single
                      onChange={props.addAttachments}
                    />
                  </Col>
                </FormGroup>
                
                {/* Background */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Background
                  </FormLabel>
                  <Col sm="9">
                    <FormControl
                      type="file"
                      single
                      onChange={props.addAttachments}
                    />
                  </Col>
                </FormGroup>
                
                {/* Country */}
                <FormGroup as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    Pays
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup>
                      <FormControl
                        as="select"
                        name="country"
                        value={props.formData.country}
                        onChange={props.change}
                      >
                        {["France", "Allemange", "Belgique"].map((country, index) => (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        ))}
                      </FormControl>
                    </InputGroup>
                  </Col>
                </FormGroup>

                {/* Gender */}
                <FormGroup as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    Genre
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup>
                      <FormControl
                        as="select"
                        name="gender"
                        value={props.formData.gender}
                        onChange={props.change}
                      >
                        {["Male", "Female", "Other"].map((gender, index) => (
                          <option key={index} value={gender}>
                            {gender}
                          </option>
                        ))}
                      </FormControl>
                    </InputGroup>
                  </Col>
                </FormGroup> 
                
                {/* Badges */}
                <FormGroup as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    Badges
                  </Form.Label>
                  <Col sm="9">
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
                  </Col>
                </FormGroup> 
                
              {/* Succès */}
                <FormGroup as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    Succès
                  </Form.Label>
                  <Col sm="9">
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
                      <div className="icon center">
                        <div className="center empty"><BiPlus /></div>
                      </div>
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
