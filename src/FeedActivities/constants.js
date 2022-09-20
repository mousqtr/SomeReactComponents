const CONSTANTS_QUIZ = {
    themes: [
        'Football', 
        'Geography', 
        'History', 
        'Mathematics'
    ],
    difficulties: [
        'Easy', 
        'Medium', 
        'Hard'
    ],
    maxNumberPropositions: 4
}

const CONSTANTS_MIME = {
    themes: [
        'Action', 
        'Personnage', 
        'Métier'
    ],
    maxNumberWords: 10
}

export const constants = {
    mime: CONSTANTS_MIME,
    quiz: CONSTANTS_QUIZ
}