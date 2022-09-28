const CONSTANTS_ACTIVITIES = {
    username: {
        default: '',
    },
    mail: {
        default: '',
    },
    activity: {
        default: '',
        options: [
            '',
            'Quiz', 
            'Mime'
        ]
    }
}

const CONSTANTS_QUIZ = {
    theme: {
        default: 'Football', 
        options: [
            'Football', 
            'Geography', 
            'History', 
            'Mathematics'
        ]
    },
    difficulty: {
        default: 'Medium', 
        options: [
            'Easy', 
            'Medium', 
            'Hard'
        ]
    },
    question: {
        default: '', 
    },
    nbPropositions: {
        default: 2,
        options: [
            2, 
            3, 
            4
        ]
    },
    proposition: {
        default: Array(4).fill('')
    },
    answer: {
        default: '', 
    }
}

const CONSTANTS_MIME = {
    theme: {
        default: 'Action', 
        options: [
            'Action', 
            'Personnage', 
            'Métier'
        ]
    },
    word: {
        default: '',
        maxNumber: 10
    }
}

export const constants = {
    activities: CONSTANTS_ACTIVITIES,
    quiz: CONSTANTS_QUIZ,
    mime: CONSTANTS_MIME
}