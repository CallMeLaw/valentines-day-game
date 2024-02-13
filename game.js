const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
    }
})
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "Welcome to Ria's Valentine's Text Adventure Game! Would you like to begin?",
        options: [
            {
                text: "Yes.",
                nextText: 12
            },
            {
                text: "No.",
                nextText: 2
            },
        ]
    },
    {
        id: 2,
        text: "Tf you mean 'no'????? I made an entire text adventure game for you and you say 'no'???? what the fuck dude",
        options: [
            {
                text: "I'm soggy.",
                nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: 'You better be.',
        options:[
            {
                text: 'Restart.',
                nextText: 4,
            },
        ]
    },
    {
        id: 4,
        text: "Welcome to Ria's Valentine's Text Adventure Game! Would you like to begin?",
        options: [
            {
                text: "Yes.",
                nextText: 12
            },
            {
                text: "No.",
                nextText: 5
            },
        ]
    },
    {
        id: 5,
        text: "No???? Again???? You already did this!! Go play the fucking game!!",
        options: [
            {
                text: "I'm super soggy.",
                nextText: 6
            },
        ]
    },
    {
        id: 6,
        text: "Welcome to Ria's Valentine's Text Adventure Game! Would you like to begin?",
        options: [
            {
                text: "Yes.",
                nextText: 12
            },
            {
                text: "No.",
                nextText: 7
            },
        ]
    },
    {
        id: 7,
        text: "I hate you. Genuinely.",
        options: [
            {
                text: "I'm Ria and I'm annoying.",
                nextText: 8
            },
        ]
    },
    {
        id: 8,
        text: "I'm sending you back to the start now. I have not coded in any more quips in here! I hope you enjoy <3",
        options: [
            {
                text: "Thank you Law! Love you!",
                nextText: 9
            },
        ]
    },
    {
        id: 9,
        text: "I love you too <3",
        options: [
            {
                text: "Restart.",
                nextText: 10
            },
        ]
    },
    {
        id: 10,
        text: "Welcome to Ria's Valentine's Text Adventure Game! Would you like to begin?",
        options: [
            {
                text: "Yes.",
                nextText: 12
            },
            {
                text: "No.",
                nextText: 11
            },
        ]
    },
    {
        id: 11,
        text: "Fuck you",
        options: [
            {
                text: "Yeah.",
                nextText: -1
            },
        ]
    },
    {
        id: 12,
        text: "You are Ria (the silliest one). You wake up in your apartment. It's a bright, sunny morning.",
        options: [
            {
                text: 'Get out of bed.',
                nextText: 15
            },
            {
                text: 'Go back aeep.',
                setState: { noNote: true },
                nextText: 13
            },
        ]
    },
    {
        id: 13,
        text: "You are too tired and go back aeep. You have wonderful, sweet dreams, and never find out what the note on your fridge is all about.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            },
            {
                text: "There's a note on my fridge??",
                requiredState: (currentState) => currentState.noNote,
                nextText: 14
            },
        ]
    },
    {
        id: 14,
        text: "Oh shit. I wasn't meant to mention that. Uh, well. Listen, click the restart button and You'll find out what's going on. Forget I said anything.",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            },
        ]
    },
    {
        id: 15,
        text: "You get out of bed and notice that something is wrong. You can't seem to find Tattoo. You see a note on your fridge.",
        options: [
            {
                text: 'Read the note.',
                nextText: 16
            },
            {
                text: 'Go back aeep.',
                nextText: 13
            },
        ]
    },
    {
        id: 16,
        text: "You take the note off the fridge and read through hand-written paragraph. It says 'Hello Ria, or should I call you The Stinky One?? Mwahahahaha! I am the dark lord, the unSilly, the evilest of Evils, or as you know me by, Oottat!!!'",
        options: [
            {
                text: "Keep reading.",
                nextText: 18
            },
            {
                text: "Say 'Oottat?! But how?? Law said she buried you in the Albuquerque desert back in 1989!'",
                nextText: 17
            },
        ]
    },
    {
        id: 17,
        text: "'This is a note. And I cannot answer any questions you say out loud. However, I was rescued from the desert by a Dalmatian sometime last year, but that isn't central to what's happening right now.'",
        options: [
            {
                text: "Ah okay.",
                nextText: 18
            },
        ]
    },
    {
        id: 18,
        text: "'If you haven't noticed already, I have kidnapped your precious Tattoo! I despise her for being so cute and small and tiny and lovely, so I have taken her away! You'll never find where I am and you will never see her again!!! Mwahahahahahahaha!'",
        options: [
            {
                text: "Say 'Damn, that sucks' and go back aeep.",
                nextText: 19
            },
            {
                text: "Turn the paper over.",
                nextText: 20
            },
            {
                text: "Look around your apartment for equipment.",//LAW code in another path where you don't have the note here.
                nextText: 27//But not really
            },
            {
                text: "Set out to find Tattoo immediately.",//Code another path for not having any equipment or knowing the address
                nextText: 31
            },
        ]
    },
    {
        id: 19,
        text: "You get back into bed and go aeep. You have wonderful, sweet dreams, and never get Tattoo back. What is wrong with you???",
        options: [
            {
                text: 'Restart.',
                nextText: -1
            },
        ]
    },
    {
        id: 20,
        text: "You turn the piece of paper over. Your delivery address is written at the top, with a return address listed below. '946998 Evil Street, Toronto, Ontario, Canada.' That must be Oottat's hideout!",
        options: [
            {
                text: 'Go aeep.',
                setState: { knowsAddress: true },
                nextText: 21
            },
            {
                text: 'Flip the paper over and read the note again.',
                setState: { knowsAddress: true },
                nextText: 25
            },
            {
                text: "Look around your apartment for equipment.",
                setState: { knowsAddress: true },
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",//Code in branch where you don't have any gear.
                setState: { knowsAddress: true },
                nextText: 31
            },
        ]
    },
    {
        id: 21,
        text: "You get back into bed and prepare to go aeep. But then you pause and think. 'If I don't go now, then I may never get Tattoo back! Should I really be eeping now?'",
        options: [
            {
                text: "Say 'I should absolutely eep right now! Honk shoo.' and eep.",
                nextText: 22
            },
            {
                text: "Say 'Maybe now is not the time for eeping.' and get out of bed.",
                nextText: 23
            },
        ]
    },
    {
        id: 22,
        text: "You get back into bed and go aeep. You have wonderful, sweet dreams, and never get Tattoo back. I gave you a second chance and everything this time! Really, what is wrong with you???",
        options: [
            {
                text: "Restart.",
                nextText: -1
            },
        ]
    },
    {
        id: 23,
        text: "You leap out of bed and pick up the note once more. What do you do now?",
        options: [
            {
                text: "Go back aeep?",
                nextText: 24
            },
            {
                text: "Read the front side of the note again.",
                nextText: 25
            },
            {
                text: "Read the back side of the note again.",
                nextText: 26
            },
            {
                text: "Look around your apartment for equipment.",
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",
                nextText: 31
            },
        ]
    },
    {
        id: 24,
        text: "You approach your bed and it folds itself up into a small microwave sized box. It then compresses down until it is flat entirely. It seems Oottat booby trapped your bed, probably because I don't want to get on with the game instead of trying to go aeep!",
        options: [
            {
                text: "Read the front side of the note again.",
                nextText: 25
            },
            {
                text: "Read the back side of the note again.",
                nextText: 26
            },
            {
                text: "Look around your apartment for equipment.",
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",
                nextText: 31
            },
        ]
    },
    {
        id: 25,
        text: "You read the front side of the note again. 'Hello Ria, or should I call you The Stinky One?? Mwahahahaha! I am the dark lord, the unSilly, the evilest of Evils, or as you know me by, Oottat!!! This is a note. And I cannot answer any questions you say out loud. However, I was rescued from the desert by a Dalmatian sometime last year, but that isn't central to what's happening right now. If you haven't noticed already, I have kidnapped your precious Tattoo! I despise her for being so cute and small and tiny and lovely, so I have taken her away! You'll never find where I am and you will never see her again!!! Mwahahahahahahaha!'",
        options: [
            {
                text: "Read the back side of the note again.",
                nextText: 26
            },
            {
                text: "Look around your apartment for equipment.",
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",
                nextText: 31
            },
        ]
    },
    {
        id: 26,
        text: "You read the back side of the note again. Your delivery address is written at the top, with a return address listed below. '946998 Evil Street, Toronto, Ontario, Canada'. That must be Oottat's hideout!",
        options: [
            {
                text: "Read front side of the note again.",
                setState: { knowsAddress: true },
                nextText: 25
            },
            {
                text: "Look around your apartment for equipment.",
                setState: { knowsAddress: true },
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",
                setState: { knowsAddress: true },
                nextText: 31
            },
        ]
    },
    {
        id: 27,
        text: "You've got to be ready when you face Oottat, weapons, tools, aid, anything! But you don't have enough time to search everywhere place in your apartment though! Which place will you search?",
        options: [
            {
                text: "Search the cupboard.", //Should find Soft Food. Helps find Tattoo later in the game. (Oottat Kryptonite?)
                setState: { softFood: true },
                nextText: 28
            },
            {
                text: "Search the desk.", //Should find Seeing Stone from Coraline. Helps solve a puzzle that gets Tattoo out.
                setState: { seeingStone: true },
                nextText: 29
            },
            {
                text: "Search the kitchen.", //Scrummy meal that heals Ria later!
                setState: { scrummyMeal: true },
                nextText: 30
            },
            {
                text: "Ignore everything else and set out to find Tattoo immediately.",
                nextText: 31
            },
        ]
    },
    {
        id: 28,
        text: "You search the cupboard and discover a tin full of Soft Food! A nice treat to give to Tattoo if you manage to rescue her and bring her home.",
        options: [
            {
                text: "Leave the house.",
                nextText: 31
            },
        ]
    },
    {
        id: 29,
        text: "You search the desk and find the Seeing Stone! Maybe this will be useful for finding something in the future?",
        options: [
            {
                text: "Leave the house.",
                nextText: 31
            },
        ]
    },
    {
        id: 30,
        text: "You search the kitchen and find a scrummy meal! Best to take this with you incase you get hungry on your journey.",
        options: [
            {
                text: "Leave the house.",
                nextText: 31
            },
        ]
    },
    {
        id: 31,
        text: "You head outside ready to go after Oottat and rescue Tattoo!",
        options: [
            {
                text: "Wander aimlessly.",
                nextText: 32
            },
            {
                text: "Go to 946998 Evil Street.",
                requiredState: (currentState) => currentState.knowsAddress,
                nextText: -1
            },
        ]
    },
    {
        id: 32,
        text: "Without knowing Oottat's location, you wander off into the wilderness that is Toronto, and become lost forever. GAME OVER.",
        options: [
            {
                text: "Restart.",
                nextText: -1
            },
        ]
    },
    {
        id: 33,
        text: "You arrive at the front door of 946998 Evil Street. Before you is a large lair made of concrete and stone. A small, Tattoo-sized front door is ahead of you.",
        options: [
            {
                text: "Approach the front door.",
                nextText: 34
            },
        ]
    },
    {
        id: 34,
        text: ""
    }
]

startGame()