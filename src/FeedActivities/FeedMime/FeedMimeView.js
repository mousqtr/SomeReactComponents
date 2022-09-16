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
                                Theme
                            </Form.Label>
                            <Col sm="9">
                                <FormControl
                                as="select"
                                value={props.theme}
                                onChange={(e) => props.setTheme(e.target.value)}>
                                    {CONSTANTS_MIME.themes.map((them, index) => <option key={index} value={them}>{them}</option>)}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        
                        {/* Word */}
                        <FormGroup as={Row} className="mb-2">
                            <FormLabel column sm="3">
                                Mot
                            </FormLabel>
                            <Col sm="9">
                                <FormControl
                                    type="text"
                                    placeholder={"Mot à deviner"}
                                    value={props.word}
                                    onChange={(e) => props.setWord(e.target.value)}
                                    style={{ border: true ? "" : "2px solid red" }}
                                />
                            </Col>
                        </FormGroup>   
                    </div>
                </div>
            </div>             
        </div>
    )
}