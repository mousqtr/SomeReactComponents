import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import ModalUser from "./../ModalUser/ModalUser";
import {
  FormGroup,
  Form,
  Col,
  Row,
  FormLabel,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { BiImport, BiUserCircle } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineAddBox } from "react-icons/md";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

import { SUCCESS_ICONS } from "./../data/data.js";

import "./MediaSettings.scss";

export default function MediaSettingsView(props) {
  return (
    <div id="mediaSettings" className="section-screen">
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

                <div className="buttons">
                  <button className="btn btn-green" onClick={props.submit}>
                    Sauvegarder
                  </button>
                </div>
              </Form>
              <div className="preview-section">
                <p>Aperçu</p>
                <ModalUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
