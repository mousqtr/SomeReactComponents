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
// import { CONSTANTS_QUIZ } from './../constantsActivities';

import "./FeedQuiz.scss";

export default function FeedQuizView(props) {
    return (
        <div id='feedQuiz'>
            <div className="special-section">
                <div className="special-section-title center">
                    <h1>Quiz</h1>
                </div>
                
                <div className="special-section-content">
                    <div className="special-section-form">
                        
                        {/* Difficulty */}
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                Difficulty
                            </Form.Label>
                            <Col sm="9">
                                <FormControl
                                as="select"
                                value={props.difficulty}
                                onChange={(e) => props.setDifficulty(e.target.value)}>
                                    {CONSTANTS_QUIZ.difficulties.map((dif, index) => <option key={index} value={dif}>{dif}</option>)}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        
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
                                    {CONSTANTS_QUIZ.themes.map((them, index) => <option key={index} value={them}>{them}</option>)}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        
                        {/* Question */}
                        <FormGroup as={Row} className="mb-2">
                            <FormLabel column sm="3">
                                Question
                            </FormLabel>
                            <Col sm="9">
                                <FormControl
                                    type="text"
                                    placeholder="Question"
                                    value={props.question}
                                    onChange={(e) => props.setQuestion(e.target.value)}
                                    style={{ border: true ? "" : "2px solid red" }}
                                />
                            </Col>
                        </FormGroup>
                        
                        {/* Propositions */}
                        {
                            props.propositions.map((prop, index) => 
                                <FormGroup key={index} as={Row} className="mb-2">
                                    <FormLabel column sm="3">
                                        Proposition {index + 1}
                                    </FormLabel>
                                    <Col sm="9">
                                        <FormControl
                                            type="text"
                                            placeholder={"Proposition".concat(" ", index + 1)}
                                            value={prop}
                                            onChange={(e) => props.setProposition(index, e.target.value)}
                                            style={{ border: true ? "" : "2px solid red" }}
                                        />
                                    </Col>
                                </FormGroup>
                            )
                        }
                        
                         {/* Answer */}
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                Answer
                            </Form.Label>
                            <Col sm="9">
                                <FormControl
                                as="select"
                                value={props.answer}
                                onChange={(e) => props.setAnswer(e.target.value)}>
                                    {props.propositions.map((prop, index) => <option key={index} value={index+1}>{index+1}</option>)}
                                </FormControl>
                            </Col>
                        </FormGroup>
                    </div>
                </div>
            </div>             
        </div>
    )
}