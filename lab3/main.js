const process = require("process"); // to use process.argv
const fs = require('fs'); // for file making
const distance = require("./mathHelpers").distance; // distance call that function. 
let dirName  = "dataPoints";
let userInput = process.argv.slice(2);  //only getting the numbers. 

function processInput(dirName,data) {
    fs.mkdir(`./${dirName}`, (err) => {
        if (err && err.code == 'EEXIST') {
            console.log(`Older "dataPoints" already exists.`);
            let tempDirName = `temp_${dirName}`;
            processInput(tempDirName,data)
        }
        else{
            const fileData = `The user input is (${data[0]},${data[1]}),(${data[2]},${data[3]}). \nThe distance between points is ${distance(data)}`
            fs.writeFile(dirName+"/points.txt", fileData , function (err) {
                if (err) {
                    console.log(`Error occurred`); 
                } else {
                    console.log (`Content saved`);
                }
            }
            );
        }
    });
}

processInput(dirName,userInput);
//