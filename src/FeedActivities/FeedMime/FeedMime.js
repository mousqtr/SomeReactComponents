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
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                *Theme
                            </Form.Label>
                            <Col sm="9">
                                <FormControl
                                name="theme"
                                as="select"
                                value={props.formData.theme}
                                onChange={props.formInputChange}
                                style={{ border: props.formErrors.theme ? "2px solid red" : "" }}>
                                    {constants.mime.themes.map((them, index) => <option key={index} value={them}>{them}</option>)}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        
                        {/* Word */}
                        <FormGroup as={Row} className="mb-2">
                            <FormLabel column sm="3">
                                *Mot
                            </FormLabel>
                            <Col sm="9">
                                <FormControl
                                    name="word"
                                    type="text"
                                    placeholder={"Mot à deviner"}
                                    value={props.formData.word}
                                    onChange={props.formInputChange}
                                    style={{border: props.formErrors.word ? "2px solid red" : ""}}/>
                            </Col>
                        </FormGroup>   
                    </div>
                </div>
            </div>             
        </div>
    )
}