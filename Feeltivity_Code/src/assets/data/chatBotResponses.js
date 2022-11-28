const greetings = [
    'Hi, how are you?',
    'Hey! Whatsup!',
    'Hey there!',
    'Hey there, I am Feeltivity chatbot and I am here to help.',
    "It's a pleasure to meet you.",
    "Konichiwa, it's a pleasure to meet you.",
    "Ciao, it's a pleasure to meet you.",
    "Hola, it's a pleasure to meet you.",
    "Konichiwa, nice to meet you.",
    "Ciao, nice to meet you.",
    "Hola, nice to meet you.",
    "Hello, nice to meet you.",

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