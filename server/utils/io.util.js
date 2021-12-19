const fs = require('fs');

const readJsonFile = (path) => new Promise((resolve, reject) => fs.readFile(path, {encoding:'utf8'}, (error, data) => {
    if (!error) {
        resolve( JSON.parse(data) );
    } else {
        reject(error);
    }
}))


module.exports = {
    readJsonFile
}