import { constants } from './constants';

const formActivity = {
    username: {
        type: "input",
        default: "",
        mandatory: false
    },
    email: {
        type: "input",
        default: "",
        mandatory: true
    },
    activity: {
        type: "select",
        default: "Mime",
        mandatory: true,
        options: ["Quiz", "Mime"]
    }
};

const formMime = {
    theme: {
        type: "select",
        default: constants.mime.themes[0],
        mandatory: true,
        options: constants.mime.themes
    },
    word: {
        type: "input",
        default: "",
        mandatory: true
    },
};

export const forms = {
    activity: formActivity,
    mime: formMime
}