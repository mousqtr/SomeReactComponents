import React from "react";
import Breadcrumb from "./../Breadcrumb/Breadcrumb";
import FeedQuiz from "./FeedQuiz/FeedQuiz";
import FeedMime from "./FeedMime/FeedMime";
import { constants } from "./constants";
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

import "./FeedActivities.scss";

export default function FeedActivitiesView(props) {
  return (
    <div id="feedActivities" className="section-screen">
      <div className="section-central">
        <Breadcrumb paths={["Accueil", "Nous aider", "Activitiés"]} />
        <div className="special-section">
          <div className="special-section-title center">
            <h1>Contribuer aux activitiés</h1>
          </div>

          <div className="special-section-content">
            <div className="special-section-form">
              <Form
                noValidate
                validated={props.validated}
                onSubmit={props.submit}
              >
                {/* Username */}
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    *Nom d'utilisateur
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        name="username"
                        placeholder="Nom d'utilisateur"
                        aria-describedby="inputGroupPrepend"
                        value={props.formData.username}
                        onChange={props.change}
                        disabled
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>

                {/* Mail */}
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

                {/* Activity choice */}
                <Form.Group as={Row} className="mb-2">
                  <Form.Label column sm="3">
                    *Activité
                  </Form.Label>
                  <Col sm="9">
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        name="activity"
                        as="select"
                        aria-describedby="inputGroupPrepend"
                        value={props.formData.activity}
                        onChange={props.change}
                        required
                      >
                        {constants.activities.activity.options.map(
                          (activ, index) => (
                            <option key={index} value={activ}>
                              {activ}
                            </option>
                          )
                        )}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Merci de choisir une activité
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Col>
                </Form.Group>

                {props.currentActivity === "Mime" ? (
                  <FeedMime formData={props.formData} change={props.change} />
                ) : (
                  <></>
                )}
                {props.currentActivity === "Quiz" ? (
                  <FeedQuiz formData={props.formData} change={props.change} />
                ) : (
                  <></>
                )}

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
