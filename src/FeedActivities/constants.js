const CONSTANTS_ACTIVITIES = {
    list: [
        '',
        'Quiz', 
        'Mime'
    ]
}

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
    activities: CONSTANTS_ACTIVITIES,
    quiz: CONSTANTS_QUIZ,
    mime: CONSTANTS_MIME
}