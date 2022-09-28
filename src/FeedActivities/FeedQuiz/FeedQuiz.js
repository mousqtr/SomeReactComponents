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
import { constants } from "./../constants";

import "./FeedQuiz.scss";

export default function FeedQuiz(props) {
    
    useEffect(() => {
        console.log(props.formData)
    }, [props.formData])
    
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
                                <InputGroup hasValidation>
                                    <FormControl
                                    as="select"
                                    name="difficulty"
                                    value={props.formData.difficulty}
                                    onChange={props.change}
                                    required>
                                        {constants.quiz.difficulty.options.map((dif, index) => <option key={index} value={dif}>{dif}</option>)}
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner une difficulté
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        
                        {/* Theme */}
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                Theme
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup hasValidation>
                                    <FormControl
                                    as="select"
                                    name="theme"
                                    value={props.formData.theme}
                                    onChange={props.change}
                                    required>
                                        {constants.quiz.theme.options.map((them, index) => <option key={index} value={them}>{them}</option>)}
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner un thème
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        
                        {/* Question */}
                        <FormGroup as={Row} className="mb-2">
                            <FormLabel column sm="3">
                                Question
                            </FormLabel>
                            <Col sm="9">
                                <InputGroup hasValidation>
                                    <FormControl
                                        type="text"
                                        name="question"
                                        placeholder="Question"
                                        value={props.formData.question}
                                        onChange={props.change}
                                        style={{ border: true ? "" : "2px solid red" }}
                                        required/>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner une question
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        
                        {/* Nombre de propositions */}
                        <FormGroup as={Row} className="mb-2">
                            <Form.Label column sm="3">
                                Nombre de propositions
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup hasValidation>
                                    <FormControl
                                    as="select"
                                    name="nbPropositions"
                                    value={props.formData.nbPropositions}
                                    onChange={props.change}
                                    required>
                                        {constants.quiz.nbPropositions.options.map((nb, index) => <option key={index} value={nb}>{nb}</option>)}
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner le nombre de propositions
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                        
                        {/* Propositions */}
                        {
                            Array(parseInt(props.formData.nbPropositions)).fill('').map((prop, index) => 
                                <FormGroup key={index} as={Row} className="mb-2">
                                    <FormLabel column sm="3">
                                        Proposition {index + 1}
                                    </FormLabel>
                                    <Col sm="9">
                                        <InputGroup hasValidation>
                                            <FormControl
                                                type="text"
                                                name={"proposition".concat("_", index)}
                                                placeholder={"Proposition".concat(" ", index + 1)}
                                                value={props.formData.proposition[index]}
                                                onChange={props.change}
                                                style={{ border: true ? "" : "2px solid red" }}
                                                required/>
                                            <Form.Control.Feedback type="invalid">
                                                Merci de renseigner cette proposition
                                            </Form.Control.Feedback>
                                        </InputGroup>
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
                                <InputGroup hasValidation>
                                    <FormControl
                                    as="select"
                                    name="answer"
                                    value={props.formData.answer}
                                    onChange={props.change}>
                                        {
                                            Array(parseInt(props.formData.nbPropositions)).fill('').map((prop, index) => 
                                            <option key={index} value={index+1}>{index+1}</option>)
                                        }
                                    </FormControl>
                                    <Form.Control.Feedback type="invalid">
                                        Merci de renseigner une réponse
                                    </Form.Control.Feedback>
                                 </InputGroup>
                            </Col>
                        </FormGroup>
                    </div>
                </div>
            </div>             
        </div>
    )
}