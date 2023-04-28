import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
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
import { MdDeleteOutline } from "react-icons/md";
import ColorBg from "./ColorBg/ColorBg";
import { BADGES_ICONS } from "./../data/badges.js";
import { SUCCESS_ICONS } from "./../data/success.js";

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
                {/* Profile image */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Image de profil
                  </FormLabel>
                  <Col sm="9">
                    <div className="image-profile">
                      <img src={props.formData.imageProfile} />
                    </div>
                    <div className="buttons-image">
                      <FormLabel
                        htmlFor="file"
                        className="label-file btn btn-purple"
                      >
                        <BiImport />
                        Importer une image
                      </FormLabel>
                      <FormControl
                        id="file"
                        className="input-file"
                        type="file"
                        onChange={props.changeImage}
                      />
                      <button
                        className="btn btn-red"
                        onClick={props.deleteImage}
                      >
                        <MdDeleteOutline />
                        Supprimer
                      </button>
                    </div>
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
                        {["France", "Allemange", "Belgique"].map(
                          (country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          )
                        )}
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

                {/* Description */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Description
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

                {[
                  {
                    label: "Succès",
                    name: "success",
                    icons: SUCCESS_ICONS,
                  },
                  {
                    label: "Badges",
                    name: "badges",
                    icons: BADGES_ICONS,
                  },
                ].map((type, indexType) => (
                  <FormGroup key={indexType} as={Row} className="mb-2">
                    <Form.Label column sm="3">
                      {type.label} favoris <br />
                      (3 max)
                    </Form.Label>
                    <Col sm="9">
                      {props.formData[type.name].length > 0
                        ? props.formData[type.name].map((elt, indexElt) => (
                            <div
                              key={indexElt}
                              className={[
                                "icon center",
                                elt.isFavorite ? "favorite" : "",
                              ].join(" ")}
                              onClick={() =>
                                props.changeFavorite(type.name, indexElt)
                              }
                            >
                              {type.icons[elt.name]}
                            </div>
                          ))
                        : "Aucun success pour l'instant"}
                    </Col>
                  </FormGroup>
                ))}

                {/* Background */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Arrière-plan
                  </FormLabel>
                  <Col sm="9">
                    <ColorBg
                      background={props.formData.background}
                      changeBackground={props.changeBackground}
                      colorsToString={props.colorsToString}
                    />
                  </Col>
                </FormGroup>

                {/* Preview */}
                <FormGroup as={Row} className="mb-2">
                  <FormLabel column sm="3">
                    Aperçu
                  </FormLabel>
                  <Col sm="9">
                    <button className="btn btn-purple btn-preview">
                      <BiUserCircle />
                      Afficher le profil
                    </button>
                  </Col>
                </FormGroup>

                <div className="buttons">
                  <button className="btn btn-red mr-1" onClick={props.cancel}>
                    Quitter
                  </button>
                  <button className="btn btn-green" onClick={props.submit}>
                    Sauvegarder
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
