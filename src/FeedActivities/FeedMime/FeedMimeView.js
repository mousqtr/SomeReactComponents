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
import { CONSTANTS_MIME } from './../constantsActivities';

import "./FeedMime.scss";

export default function FeedMimeView(props) {
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
                                as="select"
                                value={props.fieldsValue.theme}
                                onChange={(e) => props.setFieldsValue({ ...props.fieldsValue, theme: e.target.value })}
                                style={{ border: props.fieldsError.theme ? "2px solid red" : "" }}>
                                    {CONSTANTS_MIME.themes.map((them, index) => <option key={index} value={them}>{them}</option>)}
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
                                    type="text"
                                    placeholder={"Mot à deviner"}
                                    value={props.fieldsValue.word}
                                    onChange={(e) => props.setFieldsValue({ ...props.fieldsValue, word: e.target.value })}
                                    style={{ border: props.fieldsError.word ? "2px solid red" : "" }}/>
                            </Col>
                        </FormGroup>   
                    </div>
                </div>
            </div>             
        </div>
    )
}