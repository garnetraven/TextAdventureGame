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
    while(optionButtonsElement.firstChild){
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
        text:'You wake up on the edge of Mount Lytherum. You have no recollection of how you ended up here. A voice whispers behind you...',
        options: [
            {
                text:'Follow the voice',
                nextText: 3
            },
            {
                text:'Jump off mountain',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You died...',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 3,
        text: 'You followed the voice into The Deep Fark Forest. You notice the North Star while walking... You see his shadow... ',
        options: [
            {
                text: 'Talk to the shadow',
                nextText: 4
            },
            {
                text: 'There is a light to your right.. Run to it!',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'The voice turned out to be a merchant. He offers you a diamond... But only for a limb.',
        options: [
            {
                text: 'Give him your right arm',
                setState: { diamond: true },
                nextText: 5
            },
            {
                text: 'Tell him no, and punch him!',
                nextText: 6
            },
        ]
    },
    {
        id: 5,
        text: 'You now have a diamond... but no right arm... You and the merchant part ways... Suddenly, a pack of wolves surround you.',
        options: [
            {
                text: 'Fight them with your bare left hand!!??',
                nextText: 9
            },
            {
                text: 'Pray you do not die...',
                nextText: 10
            },
            {
                text: 'Act like a wolf and hope they think you are one of them.',
                nextText: 11
            }
        ]
    },
    {
        id: 6,
        text: "You accidentally killed him!",
        options: [
            {
                text: 'The light.. Run to it.',
                nextText: 7
            },
            {
                text: 'Search his body for items...',
                setState: { diamond: true, sword: true },
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: "The light source turned out to be a Lamp Post. How strange? All alone in this forest... I better get out of here before something else comes here.",
        options: [
            {
                text: 'Locate the North Star from earlier and go south',
                nextText: 12
            },
            {
                text: 'There is something strange about this Lamp Post... Search it.',
                setState: { metallicBeetle: true },
                nextText: 13
            }
        ]
    },
    {
        id: 8,
        text: "While you were searching, you found a sword on his body. You also got the diamond. Suddenly, a pack of wolves surround you.",
        options: [
            {
                text: 'Fight the wolves with your sword...',
                nextText: 14
            },
            {
                text: 'Pray you do not die...',
                setState: { lightningInBottle: true },
                nextText: 10
            },
            {
                text: 'Act like a wolf and hope they think you are one of them.',
                nextText: 11
            }
        ]
    },
    {
        id: 9,
        text: "Are you stupid? You just gave away your right hand and now you are trying to fight wolves with one hand?... You died a painful death. ",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
           
        ]
    },
    {
        id: 10,
        text: "Your prayers some how magically worked!!?? Lightning obliterated your wolf foes. All that remains is Lightning in a bottle. You pick it up...",
        options: [
            {
                text: 'You thank the Lightning God and decide to go south',
                nextText: 12
            },
        ]
    },
    {
        id: 10.5,
        text: "Your prayers some how magically worked!!?? Lightning obliterated your wolf foes. All that remains is Lightning in a bottle. You pick it up...",
        options: [
            {
                text: 'You thank the Lightning God and decide to go south',
                nextText: 12
            },
        ]
    },
    {
        id: 11,
        text: "This is even more pathetic than praying or trying to fight the wolves. They thought you were a wolf for a second and then realized how stupid you were and ate you to tiny pieces.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            },
          
           
        ]
    },
    {
        id: 12,
        text: "You finally are out of that weird forest. You arrive at a town! You see an inn and another merchant.",
        options: [
            {
                text: 'Visit the inn for the night.',
                nextText: 15
            },
            {
                text: 'Talk to the merchant.',
                nextText: 16
            },
           
        ]
    },
    {
        id: 13,
        text: "You found a rare metallic beetle hiding on the post. You decide to go south to get out of this creepy forest.",
        options: [
            {
                text: 'Continue South',
                nextText: 12
            },
          
           
        ]
    },
    {
        id: 14,
        text: "You were able to kill the wolves... barely... whew... You think to yourself, I am getting the hell out of this forest.",
        options: [
            {
                text: 'Go south and get the hell out of here',
                nextText: 12
            },
          
           
        ]
    },
    {
        id: 15,
        text: "",
        options: [
            {
                text: '',
                nextText: 17
            },
          
           
        ]
    },
    {
        id: 16,
        text: "",
        options: [
            {
                text: '',
                nextText: 18
            },
          
           
        ]
    },
    
]

startGame()