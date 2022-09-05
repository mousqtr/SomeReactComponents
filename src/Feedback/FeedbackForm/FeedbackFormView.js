import React from "react";
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

import "./FeedbackForm.scss";

export default function FeedbackFormView(props) {
  return (
    <div id="feedbackForm" className="section-screen">
      <div className="sub-feedbackForm">
        <div className="feedbackForm-header center">
          <h4>Bug à remonter</h4>
        </div>

        <div className="feedbackForm-content">
          <Form>
            <FormGroup as={Row} className="mb-2">
              <Form.Label column sm="3">
                Sévérité
              </Form.Label>
              <Col sm="9">
                <FormControl
                  as="select"
                  value={props.data.severity}
                  onChange={(e) =>
                    props.setData({ ...props.data, severity: e.target.value })
                  }
                >
                  {["low", "normal", "high"].map((sev, index) => (
                    <option value={sev}>{sev}</option>
                  ))}
                </FormControl>
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel column sm="3">
                Nom d'utilisateur *
              </FormLabel>
              <Col sm="9">
                <FormControl
                  type="username"
                  placeholder="Nom d'utilisateur"
                  value={props.data.username}
                  onChange={(e) =>
                    props.setData({ ...props.data, username: e.target.value })
                  }
                  style={{
                    border: props.conditions.username ? "" : "2px solid red"
                  }}
                  disabled
                />
              </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-2">
              <FormLabel column sm="3">
                Email *
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
                Description
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
                {props.data.attachments.map((attachment, index) => (
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

            {!props.conditionsValid ? (
              <small className="form-text">
                * Veuillez compléter les champs obligatoires
              </small>
            ) : (
              <></>
            )}

            <div className="buttons">
              <Button
                type="button"
                className="btn-purple float-left"
                onClick={props.reset}
              >
                Vider les champs
              </Button>
              <Button type="button" className="btn-red" onClick={props.cancel}>
                Quitter
              </Button>
              <Button
                type="button"
                className="btn-green"
                onClick={props.submit}
              >
                Valider
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
