const fs = require('fs');
require('colors');

const createFile = async (multiplier = 1, list = false, until = 10) => {
    try {

        const multiplierThreshold = until;
        let resultDataText = '';
        let consoleOutputDataText = '';

        for (let target = 1; target <= multiplierThreshold; target++) {
            resultDataText += `${multiplier} X ${target} = ${ multiplier * target } \n`;
            consoleOutputDataText += `${multiplier} X ${target} = ${ multiplier * target } \n`.bgYellow.black;
        }

        if (list) {
            console.log("===================================");
            console.log("Tabla del 5");
            console.log("===================================");
            console.log(consoleOutputDataText);
        }

        const fileName = `./output/table-${multiplier}.txt`;
        fs.writeFileSync(fileName, resultDataText);
        return `The file name is ${fileName}`;
    } catch (err) {
        throw err;
    }
    
    
}

module.exports = {
    createFile
};