import { useState } from "react";
import FeedMimeView from "./FeedMimeView";
import { CONSTANTS_MIME } from './../constantsActivities';

export default function FeedMime() {
    
    const [theme, setTheme] = useState(CONSTANTS_MIME.themes[0]);
    const [word, setWord] = useState('');
    
    const handleSetTheme = (pTheme) => setTheme(pTheme);
    const handleSetWord = (pWord) => setWord(pWord);
    
    return (
        <FeedMimeView
            theme={theme}
            word={word}

            setTheme={handleSetTheme}
            setWord={handleSetWord}
        />
    )
}