import { useState } from "react";
import FeedQuizView from "./FeedQuizView";
// import { CONSTANTS_QUIZ } from './../constantsActivities';

export default function FeedQuiz() {
    
    const [difficulty, setDifficulty] = useState(CONSTANTS_QUIZ.difficulties[0]);
    const [theme, setTheme] = useState(CONSTANTS_QUIZ.themes[0]);
    const [question, setQuestion] = useState('');
    const [propositions, setPropositions] = useState(Array(4).fill(''));
    const [answer, setAnswer] = useState(1);
    
    const handleSetDifficulty = (pDifficulty) => setDifficulty(pDifficulty);
    const handleSetTheme = (pTheme) => setTheme(pTheme);
    const handleSetQuestion = (pQuestion) => setQuestion(pQuestion);
    const handleSetProposition = (pIndex, pValue) => {
        let propositions_ = [...propositions];
        propositions_[pIndex] = pValue;
        setPropositions(propositions_);
    }
    const handleSetAnswer = (pAnswer) => setAnswer(pAnswer);
    
    return (
        <FeedQuizView 
            difficulty={difficulty}
            theme={theme}
            question={question}         
            propositions={propositions}
            answer={answer}
            
            setDifficulty={handleSetDifficulty}
            setTheme={handleSetTheme}
            setQuestion={handleSetQuestion}
            setProposition={handleSetProposition}
            setAnswer={handleSetAnswer}
        />
    )
}