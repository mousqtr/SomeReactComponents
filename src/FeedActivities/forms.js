import { constants } from './constants';

const formActivity = {
    username: {
        type: "string",
        initialValue: "",
        mandatory: false
    },
    mail: {
        type: "string",
        initialValue: "",
        mandatory: true
    },
    activity: {
        type: "string",
        initialValue: "Mime",
        mandatory: true
    }
};

const formMime = {
    theme: {
        type: "string",
        initialValue: constants.mime.themes[0],
        mandatory: true
    },
    word: {
        type: "string",
        initialValue: "",
        mandatory: true
    },
};

export const forms = {
    activity: formActivity,
    mime: formMime
}