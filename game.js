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
                setState: { undamaged: true },
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
        text: "You are too tired and go back aeep. You have wonderful, sweet dreams, and never find out what the note on your fridge is all about. GAME OVER.",
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
                setState: { knowsAddress: true },
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
        text: "You get back into bed and go aeep. You have wonderful, sweet dreams, and never get Tattoo back. What is wrong with you??? GAME OVER.",
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
                nextText: 21
            },
            {
                text: 'Flip the paper over and read the note again.',
                nextText: 25
            },
            {
                text: "Look around your apartment for equipment.",
                nextText: 27
            },
            {
                text: "Set out to find Tattoo immediately.",//Code in branch where you don't have any gear.
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
        text: "You get back into bed and go aeep. You have wonderful, sweet dreams, and never get Tattoo back. I gave you a second chance and everything this time! Really, what is wrong with you??? GAME OVER.",
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
                setState: { knowsAddress: true },
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
                nextText: 25
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
                nextText: 33
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
        text: "On closer inspection, the door is reinforced with steel. A keypad sits on the wall to the left of the doorway. Instead of posessing numbers '0-9', the keypad only has a single button, '8'.",
        options: [
            {
                text: "Try to open the door.",
                nextText: 35
            },
            {
                text: "Press the button on the keypad.",
                nextText: 42
            },
        ]
    },
    {
        id: 35,
        text: "You try to push the door open, but it's locked tight.",
        options: [
            {
                text: "Try the door again.",
                nextText: 36
            },
            {
                text: "Press the button on the keypad.",
                nextText: 42
            },
        ]
    },
    {
        id: 36,
        text: "You... just tried the door. Are you stupid?",
        options: [
            {
                text: "Try the door again.",
                nextText: 37
            },
            {
                text: "Press the button on the keypad.",
                nextText: 42
            },
        ]
    },
    {
        id: 37,
        text: "Stop trying the fucking door!",
        options: [
            {
                text: "Try the door again.",
                nextText: 38
            },
            {
                text: "Press the button on the keypad, I beg you.",
                nextText: 42
            },
        ]
    },
    {
        id: 38,
        text: "The door heats up to an incomprhensibly high temperature. Please don't try it again or it will kill you and you'll have to start the game again.",
        options: [
            {
                text: "Try the door again.",
                nextText: 39
            },
            {
                text: "Press the button on the keypad, PLEEEEEEASE.",
                nextText: 42
            },
        ]
    },
    {
        id: 39,
        text: "You touch the door and... nothing happens? Shit. I messed up some code and the heat door is broken. Um, well. First, I can't believe you actually clicked on this after I told you it would kill you! You sure do seem to like messing with the game, don't you? Second, there was literally a SINGLE button you had to press and you messed that up. Like, Tattoo's been kidnapped, she's stuck inside this building, and all you had to do was press that button but NOOOO you had to keep trying the locked door, didn't you? I even labelled the button 8 because it's your favourite number and you just ignored it! Ugh. If you're not going to press the button I'll open the door for you. I'll even scale it up to your height so you don't have to crawl through. Congrats.",
        options: [
            {
                text: "Go through the open door.",
                nextText: 41
            },
            {
                text: "Press the button.",
                nextText: 40
            },
        ]
    },
    {
        id: 40,
        text: "Oh so NOW you press the button! You press the button and explode into flames. Ah, it seems I- I mean, Oottat, wired the door's heat defence system wrong and channelled all the heat into the button instead of the door! Oops. Sorry about that. GAME OVER.",
        options: [
            {
                text: "Restart.",
                nextText: -1
            },
        ]
    },
    {
        id: 41,
        text: "You walk through the doorway and enter Oottat's lair. The faint, florescent lights hanging from the ceiling struggle to light the interior. From what you can see, the grand chamber is made of concrete and metal. Darkness envelops the center of the room, so you walk along the perimeter of the room. You feel indents in the walls, etching out images and accompanying text in a language you can't read. It seems to be telling some kind of story. Fields of black-and-white cats, a light of some the descending from the sky and a sky beam consuming one of the cats. a white-and-black cat emerges. Is this... the origin of Oottat????",
        options: [
            {
                text: "Continue into the room.",
                nextText: 43
            },
        ]
    },
    {
        id: 42,
        text: "You press the button marked 8 and the door slides open. You squeeze through the small doorway and enter Oottat's lair. The faint, florescent lights hanging from the ceiling struggle to light the interior. From what you can see, the grand chamber is made of concrete and metal. Darkness envelops the center of the room, so you walk along the perimeter of the room. You feel indents in the walls, etching out images and accompanying text in a language you can't read. It seems to be telling some kind of story. There are fields of black-and-white cats, possibly Tattoo bears? A light of some kind descends from the sky and a sky beam consuming one of the bears. a white-and-black bear emerges. Is this... the origin of Oottat????",
        options: [
            {
                text: "Continue into the room.",
                nextText: 43
            },
        ]
    },
    {
        id: 43,
        text: "As you attempt to study the the murals, you hear the tip-tapping of small feet growing louder. You look across the chamber to see a small Tattoo bear approaching! Stepping into the light, you see the fluffy black creature has white patches of fur. Her purple eyes light up the area around her. This isn't Tattoo. It's Oottat!",
        options: [
            {
                text: "Say 'Oottat!!! I've tracked you down, you evil one!'",
                nextText: 44
            },
        ]
    },
    {
        id: 44,
        text: "Oottat smiles evilly. She says 'You'll never get your precious bear back! She'll stay here forever, and I'll siphon all of the cutenss out of her to power my evil machines! Now die, Ria of Stinky!'",
        options: [
            {
                text: "Fight Oottat (No weapons).",
                nextText: 45
            },
            {
                text: "Fight Oottat (Use the Soft Food).",
                requiredState: (currentState) => currentState.softFood,
                nextText: 67
            },
            {
                text: "Flee Oottat.",
                setState: { legDamage: true, undamaged: false },
                nextText: 46
            },
        ]
    },
    {
        id: 45,
        text: "You lunge at Oottat with nothing but your bare fists! She grabs onto your face and punches you with her tiny paws. As you raise your hands to defend the sides of you head, she takes BIG nom nom nom's out of your hands. You fall to the ground. Oottat leaves temporarily to fetch a baseball bat, and returns to beat you up even more. You die at the hands of the unSilly One. GAME OVER.",
        options: [
            {
                text: "Restart.",
                nextText: -1
            },
        ]
    },
    {
        id: 46,
        text: "You run as fast as you can to escape Oottat! As you flee, she takes a big nom out of your leg. Despite your limp, you manage to give Oottat the slip.",
        options: [
            {
                text: "Heal yourself (Use the Scrummy Meal).",
                requiredState: (currentState) => currentState.scrummyMeal,
                setState: { legDamage: false, undamaged: true },
                nextText: 47
            },
            {
                text: "Search for Tattoo.",
                nextText: 48
            },
        ]
    },
    {
        id: 47,
        text: "You eat some of your Scrummy Meal and it's SO scrummy! Your damaged leg heals rapidly and is as good as new!",
        options: [
            {
                text: "Search for Tattoo.",
                nextText: 48
            },
        ]
    },
    {
        id: 48,
        text: "You enter a corridor marked 'ENTRANCE WAY'. You can only go forward.",
        options: [
            {
                text: "Go to CORRIDOR INTERSECTION.",
                nextText: 49
            }
        ]
    },
    {
        id: 49,
        text: "You enter a corridor marked 'CORRIDOR INTERSECTION'.",
        options: [
            {
                text: "Go to CORRIDOR 1A.",
                nextText: 50
            },
            {
                text: "Go to CORRIDOR 2A.",
                nextText: 56
            },
        ]
    },
    {
        id: 50,
        text: "You enter a corridor marked 'CORRIDOR 1A'.",
        options: [
            {
                text: "Go to CORRIDOR INTERSECTION.",
                nextText: 49
            },
            {
                text: "Go to ROOM.",
                nextText: 51
            },
            {
                text: "Go CORRIDOR 1B.",
                nextText: 52
            },
        ]
    },
    {
        id: 51,
        text: "You enter a white-walled room, it almost looks like a hospital, or a laboratory.. A 7-foot-tall humanoid shape is suspended in the center by cables from the roof. Upon closer inspection it seems to be made of metal, with wires protruding from undeneath metal plates, and hydraulics within it's limbs. It lacks a face, instead having five 'petals' blooming from the head, making a flower-like shape around where the face would be. Tattoo doesn't seem to be in here.",
        options: [
            {
                text: "Go to CORRIDOR 1A.",
                nextText: 50
            },
        ]
    },
    {
        id: 52,
        text: "You enter a corridor marked 'CORRIDOR 1B'.",
        options: [
            {
                text: "Go to CORRIDOR 1A.",
                nextText: 50
            },
            {
                text: "Go to ROOM.",
                nextText: 62
            },
            {
                text: "Go to CORRIDOR 1C.",
                nextText: 53
            },
        ]
    },
    {
        id: 53,
        text: "You enter a corridor marked 'CORRIDOR 1C'.",
        options: [
            {
                text: "Go to CORRIDOR 1B.",
                nextText: 52
            },
            {
                text: "Go to CORRIDOR 1D.",
                nextText: 54
            },
        ]
    },
    {
        id: 54,
        text: "You enter a corridor marked 'CORRIDOR 1D'.",
        options: [
            {
                text: "Go to CORRIDOR 1C.",
                nextText: 53
            },
            {
                text: "Go to CORRIDOR 1E.",
                nextText: 55
            },
        ]
    },
    {
        id: 55,
        text: "You enter a corridor marked 'CORRIDOR 1E'.",
        options: [
            {
                text: "Go to CORRIDOR 1D.",
                nextText: 54
            },
            {
                text: "Go to ROOM.",
                nextText: 66
            },
        ]
    },
    {
        id: 56,
        text: "You enter a corridor marked 'CORRIDOR 2A'.",
        options: [
            {
                text: "Go to CORRIDOR INTERSECTION.",
                nextText: 49
            },
            {
                text: "Go to CORRIDOR 2B.",
                nextText: 57
            },
        ]
    },
    {
        id: 57,
        text: "You enter a corridor marked 'CORRIDOR 2B'.",
        options: [
            {
                text: "Go to CORRIDOR 2A.",
                nextText: 56
            },
            {
                text: "Go to CORRIDOR 3A.",
                nextText: 58
            },
            {
                text: "Go to CORRIDOR 2C.",
                nextText: 59
            },
        ]
    },
    {
        id: 58,
        text: "You enter a corridor marked 'CORRIDOR 3A'.",
        options: [
            {
                text: "Go to CORRIDOR 2A.",
                nextText: 57
            },
            {
                text: "Go to ROOM.",
                nextText: 65
            },
        ]
    },
    {
        id: 59,
        text: "You enter a corridor marked 'CORRIDOR 2C'.",
        options: [
            {
                text: "Go to CORRIDOR 2B.",
                nextText: 57
            },
            {
                text: "Go to CORRIDOR 2D.",
                nextText: 60
            },
        ]
    },
    {
        id: 60,
        text: "You enter a corridor marked 'CORRIDOR 2D'.",
        options: [
            {
                text: "Go to CORRIDOR 2C.",
                nextText: 59
            },
            {
                text: "Go to CORRIDOR 2E.",
                nextText: 61
            },
            {
                text: "Go to ROOM.",
                nextText: 64
            },
        ]
    },
    {
        id: 61,
        text: "You enter a corridor marked 'CORRIDOR 2E'.",
        options: [
            {
                text: "Go to CORRIDOR 2D.",
                nextText: 60
            },
            {
                text: "Go to ROOM.",
                nextText: 63
            },
        ]
    },
    {
        id: 62,
        text: "You enter a dark room. The wall on the other end is made of glass, with water filled to the top on the other side. It's some sort of large wall-long fish tank. Teal light illuminates the room. Within the tank, you can see a figure silhouetted by the water. They're around your height, around your size. As you tilt your head in curiosity. It tilts it's head too. It's definitely not a reflection. Something is in there. Tattoo doesn't seem to be in here.",
        options: [
            {
                text: "Go to CORRIDOR 1B.",
                nextText: 52
            },
        ]
    },
    {
        id: 63,
        text: "You enter the room and see a locked door with a window.",
        options: [
            {
                text: "Look through the window.",
                nextText: 69
            },
        ]
    },
    {
        id: 64,
        text: "You enter a room that looks like the inside of a vault. At the center of the room is a podium, with a section of a wall propped up on it. The wall has old wallpaper on it, and seems to be taken from a house of some kind. A small, square-sized door is at the bottom-middle of the wall. It has no door handle, just a key hole. You walk around the podium to see that the door doesn't lead anywhere on the other side, but you swear you can hear a voice faintly humming a tune from the door. Tattoo doesn't seem to be in here.",
        options: [
            {
                text: "Go to CORRIDOR 2D.",
                nextText: 60
            },
        ]
    },
    {
        id: 65,
        text: "You enter a room that looks like a garage. Between several Oottat-sized workbench, a car is parked, with a cloak covering it. There are a pair of scorch marks parallel to each other across the floor of the room. Tattoo doesn't seem to be in here.",
        options: [
            {
                text: "Go to CORRIDOR 3A",
                nextText: 58
            },
        ]
    },
    {
        id: 66,
        text: "You enter a room that appears to be an armoury. The walls are lined with weapon racks with weapons on them. You don't recognise many, but one does stand out. Between an egg-whisk-esk blaster, and a can marked 'Fake Soft Food', a headband with a purple crystal attached dangles from a hook. Tattoo doesn't seem to be in here.",
        options: [
            {
                text: "Go to CORRIDOR 1E.",
                nextText: 55
            },
        ]
    },
    {
        id: 67,
        text: "You open the Soft Food can and lunge at her, throwing Soft Food everywhere! As she tries to jump and grab at you, she is covered in Soft Food. Steam rises out of her fur and she screams a blood-curling scream. She runs off into the darkness, cursing at you as she does. She's gone, for now.",
        options: [
            {
                text: "Search for Tattoo.",
                nextText: 48
            },
            {
                text: "Search for Tattoo (Use Soft Food).",
                nextText: 68
            },
        ]
    },
    {
        id: 68,
        text: "You open the Soft Food can again and let the smell of it waft through the lair. You hear a faint 'Meow !' from far away. You run towards the noise until you reach a locked door. There's a window on the door.",
        options: [
            {
                text: "Look through the window.",
                nextText: 69
            },
        ]
    },
    {
        id: 69,
        text: "Looking peer through the window in the door to see a small, fluffy bear with white fur and black spots curled up on the floor on the other side.",
        options: [
            {
                text: "Say 'Tattoo?'.",
                nextText: 70
            },
        ]
    },
    {
        id: 70,
        text: "The bear perks up, recognising your voice. She looks over with her beautiful green eyes and smiles. It's Tattoo!! She gets up and runs over to the door. She sits in front of it, staring up at you. She says 'Meow!'.",
        options: [
            {
                text: "Find a way to open the door.",
                nextText: 71
            },
        ]
    },
    {
        id: 71,
        text: "To the right of the door is a line of six dials. Law doesn't quite know how to code the puzzle she has in mind for this, but don't worry, she'll explain how it was meant to work after you're done playing. You have two options below instead.",
        options: [
            {
                text: "Punch the puzzle.",
                setState: { handDamage: true, undamaged: false },
                nextText: 72
            },
            {
                text: "Solve the puzzle (Use Seeing Stone).",
                requiredState: (currentState) => currentState.seeingStone,
                nextText: 74
            },
        ]
    },
    {
        id: 72,
        text: "You punch the puzzle extremely hard. It hurts your hand badly, but the door unlocks.",
        options: [
            {
                text: "Heal yourself (Use Scrummy Meal).",
                requiredState: (currentState) => currentState.scrummyMeal,
                setState: { handDamage: false, undamaged: true },
                nextText: 73
            },
            {
                text: "Open the door.",
                nextText: 75
            },
        ]
    },
    {
        id: 73,
        text: "You eat some of your Scrummy Meal and it's SO scrummy! Your hand heals rapidly. As good as new!",
        options: [
            {
                text: "Open the door.",
                nextText: 75
            },
        ]
    },
    {
        id: 74,
        text: "You look through the Seeing Stone and it unveils the solution to the puzzle to you! You twist the dials into the correct position and the door unlocks.",
        options: [
            {
                text: "Open the door.",
                nextText: 75
            },
        ]
    },
    {
        id: 75,
        text: "You open the door and Tattoo jumps up into your arms! You cuddle her tightly and she nuzzles her little head into your neck, purring affectionately.",
        options: [
            {
                text: "Go home.",
                nextText: 76
            },
        ]
    },
    {
        id: 76,
        text: "You turn around and go back the way you came. As you return to the main chamber of the lair, Oottat jumps down from the rafters high above and lands infront of you! She's got a headband on, with a purple crystal of some kind at the front. 'You can't take her! I need her! I have goals beyond your understanding, stinky one. And I can't acomplish them without her! Hand her over and I'll let you leave here alive!'.",
        options: [
            {
                text: "Hand Tattoo over.",
                nextText: 77
            },
            {
                text: "Fight Oottat.",
                nextText: 78
            },
            {
                text: "Fight Oottat (Use Soft Food).",
                requiredState: (currentState) => currentState.softFood,
                nextText: 79
            },
            {
                text: "Flee Oottat.",
                requiredState: (currentState) => currentState.legDamage,
                requiredState: (currentState) => currentState.handDamage,
                nextText: 80
            },
            {
                text: "Flee Oottat.",
                requiredState: (currentState) => currentState.undamaged,
                nextText: 81
            },
        ]
    },
    {
        id: 77,
        text: "Not wanting to fuck about with Oottat again, you decide to hand Tattoo over to Oottat. Oottat smiles evilly and says 'I can't believe you actually handed Tattoo over! How heartless! I respect that though, however. You are free to leave.'. You go back to your home without Tattoo, you monster. THE END. THE EVIL ENDING. ENDING ONE OF FOUR.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            },
        ]
    },
    {
        id: 78,
        text: "You set Tattoo down and charge at Otttat! The crystal in her headband glows brightly. 'Courtesy of all the cuteness I've harvested from Tattooo, I have crafted this crystal in my headband! It's an anti-Ria crystal! It channels energy that destroys yellow!' a beam of purple energy fires from the crystal and hits you square in the chest. All the yellow in your clothing disappears and you disappear into nothing. GAME OVER.",
        options: [
            {
                text: "Restart.",
                nextText: -1
            },
        ]
    },
    {
        id: 79,
        text: "You set Tattoo down and open the can of Soft Food. You chuck it and it covers Oottat entirely. She bursts into flames and fire and yells 'Noooooo!'. The crystal in her headband goes haywire and fires several beams of red energy into the roof supports. As she flails around, you carry Tattoo and both run out of the lair. The building collapses behind you both. Oottat has been defeated! You both return home, and snuggle together! Tattoo gets lots of Soft Food, Wet Food, and Hard Food as a treat! Oottat is gone forever... But for how long? THE END. THE GOOD ENDING. ENDING TWO OF FOUR.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            },
        ]
    },
    {
        id: 80,
        text: "You do your best to dash past Oottat but the damage that's been done to your leg and hand is too much. As you burst out of the front door, a beam of purple energy shoots into your back. You fall to the ground. Tattoo gives you a big cuddle. As you disappear into nothing, Tattoo runs off into the wilderness that is Toronto! Tattoo has escaped but is on the run, and Oottat is still after her... THE END. THE NEUTRAL ENDING. ENDING THREE OF FOUR.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            },
        ]
    },
    {
        id: 81,
        text: "You dash past Oottat, who fires several beams of purple energy at you. You dodge and weave and burst out through the front door. After making your way down the street, you consider your options. You can't go home, Oottat knows where you live. You'll have to live on the run from now on. But where could you go? Oottat can search all across Toronto for you! There's only one last option, one place that would take Oottat a very long time to catch up to you. You pull out your phone and book the next plane to the UK... THE END. THE TRUE ENDING. FOUR OF FOUR.",
        options: [
            {
                text: "Play Again!",
                nextText: -1
            },
        ]
    },
]

startGame()