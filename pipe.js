const fs = require('fs');

// Pipe = elegant approach to createReadStream & createWriteStream
// Pipe can only be used on readable streams
let writeStream = fs.createWriteStream("./pipe.txt");
let readStream = fs.createReadStream("./sampleText.txt", "utf8");

readStream.pipe(writeStream);

readStream.on('close', () => {
    console.log("Reading process completed");
});

writeStream.on('close', () => {
    console.log("Writting process completed");
});
