const uuidv4 = require('uuid/v4');
let items = [
    {
        id: uuidv4(),
        name: "Don’t cry because it’s over, smile because it happened.",
        level: 0
    },
    {
        id: uuidv4(),
        name: "You only live once, but if you do it right, once is enough",
        level: 1
    },
    {
        id: uuidv4(),
        name: "To live is the rarest thing in the world. Most people exist, that is all.",
        level: 2
    },
    {
        id: uuidv4(),
        name: "In three words I can sum up everything I’ve learned about life: it goes on.",
        level: 2
    }
]

export default items;