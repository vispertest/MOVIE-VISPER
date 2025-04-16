const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'GrJkyQCQ#QxLj6sxUCKu6UX3anpF4pW2Q2NQOlxmQCMLb2RMwmOo' : process.env.SESSION_ID, 
PORT: process.env.PORT === undefined ? '8000' : process.env.PORT, 
SESSION_NAME: process.env.SESSION_NAME === undefined ? 'hiranyasathsara' : process.env.SESSION_NAME,  

};
