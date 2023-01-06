// I want to this variable accessible only locally
const secret = 'SUPER SECRET';

// I want to share these variables. 
const john = 'john';
const peter = 'peter';

// exports is an object. So to share variables or functions in modules, use "module.exports":
module.exports = {john, peter};  // multiple values captured this way.