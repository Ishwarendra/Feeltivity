const greetings = [
    'Hi, how are you?',
    'How have you been doing?',
    'Hey! Whatsup!'
]

const happyResponses = [
    'Seems like you are happy right now.',
]

const sadResponses = [
    'Seems like you are sad right now.',
]

const surpriseResponses = [
    'Seems like you are surprised right now.',
]

const fearResponses = [
    'Seems like you are in fear right now.',
]

const angryResponses = [
    'Seems like you are angry right now.',
]

const chatBotResponses = {
    "greetings": greetings,
    "happyResponses": happyResponses,
    "sadResponses": sadResponses,
    "surpriseResponses": surpriseResponses,
    "fearResponses": fearResponses,
    "angryResponses": angryResponses,

}

const emotionsArray = ["happyResponses", "angryResponses", "surpriseResponses", "sadResponses", "fearResponses"]

export {chatBotResponses as default, emotionsArray}