const fs = require('fs');

// Read the whole file, store in memory then display
//console.log(fs.readFileSync('./sampleText.txt', {encoding: "utf8"}));

// Create a writable stream
let writeFullLoremStream = fs.createWriteStream("./full.txt");
let writeChunksLoremStream = fs.createWriteStream("./chunk.txt");

// Create readable streams
// Read the file piece by piece and store into buffer and repeats until process is completed
// No need to wait for the whole file. It can display one piece as soon as it is retrived.
let readLoremStream = fs.createReadStream("./sampleText.txt", "utf8");

let i = 1;
let completeText = "";

// Events generated by the createReadStream
// data = still streaming
readLoremStream.on('data', (chunk) => {
    console.log('Chunk ' + i + ' received...');
    completeText = completeText + chunk;
    writeChunksLoremStream.write(chunk);
    i++;
});

// close = done. nothing more to stream
readLoremStream.on('close', () => {
    console.log("\n\n\n\n\n\n\n\n\n\n" + completeText);
    writeFullLoremStream.write(completeText);
});
