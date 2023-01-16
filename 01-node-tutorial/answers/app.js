fs = require('fs').promises;

const { writeFile } = require('fs');

// I can choose to put this array('lines') in another module and require(import) it in this one.
const lines = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',   
    '8',
    '9',
    '10'
];

const makeFile = async () => {
    try {
        await fs.writeFile('./content/practice2.txt',
        `This is the first line. \n`,
        );
        //To loop through the array('lines')
        for (let line of lines) {
                await fs.writeFile('./content/practice2.txt',
                `This is line ${line}`,
                { flag: 'a' }
                );
        };
    } catch(error) {
        console.log(error)
    }
}; 

makeFile()
