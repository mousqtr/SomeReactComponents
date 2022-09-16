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

import "./FeedQuiz.scss";

export default function FeedQuizView(props) {
    return (
        <div id='feedQuiz'>
            <div className="feedQuiz-header center">
                <h1>Quiz</h1>
            </div>
            
            <div className="feedQuiz-content">
                <div className="feedQuiz-form">
                    <FormGroup as={Row} className="mb-2">
                        <FormLabel column sm="3">
                            Question
                        </FormLabel>
                        <Col sm="9">
                            <FormControl
                                type="question"
                                placeholder="Question"
                                value={props.question}
                                onChange={(e) => props.setQuestion(e.target.value)}
                                style={{ border: true ? "" : "2px solid red" }}
                            />
                        </Col>
                    </FormGroup>
                </div>
            </div>
                        
        </div>
    )
}