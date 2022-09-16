import { useState } from "react";
import FeedQuizView from "./FeedQuizView";

export default function FeedQuiz() {
    
    const [question, setQuestion] = useState('');
    
    return (
        <FeedQuizView />
    )
}