import { useEffect } from "react";
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
import { constants } from './../constants';

import "./FeedMime.scss";

export default function FeedMime(props) {
    
    useEffect(() => {
        console.log(props.formData)
    }, [props.formData]);
    
    return (
        <div id='feedMime'>
            <div className="special-section">
                <div className="special-section-title center">
                    <h1>Mime</h1>
                </div>
                
                <div className="special-section-content">
                    <div className="special-section-form"> 
                        
                        {/* Theme */}
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                *Theme
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="activity"
                                        as="select"
                                        aria-describedby="inputGroupPrepend"
                                        value={props.formData.theme}
                                        onChange={props.formInputChange}
                                        required>
                                            {constants.mime.themes.map((theme, index) => (
                                            <option key={index} value={theme}>{theme}</option>
                                        ))}
                                    </Form.Control> 
                                </InputGroup>
                            </Col>
                        </Form.Group>
                        
                        {/* Word */}
                        <Form.Group as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                *Mot
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup hasValidation>
                                    <Form.Control
                                        type="text"
                                        name="word"
                                        placeholder="Mot"
                                        aria-describedby="inputGroupPrepend"
                                        value={props.formData.word}
                                        onChange={props.change}
                                        required/>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner un mot
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                    </div>
                </div>
            </div>             
        </div>
    )
}