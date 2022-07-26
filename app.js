//commomjs type
// const fs = require('fs');

//moduler type
import { writeFile, writeFileSync, appendFileSync, readFileSync, renameSync, unlink } from 'fs'

//async type 
writeFile('filename.text', 'hi node you are awesome', (err, data) => {
    console.log(err)
})

//sync type
writeFileSync('filenameSync.text', 'hi this sync file sytem')

//add in same file 
appendFileSync('filenameSync.text', '\nwe want to learn more')

// renameSync('file_location','rename')

//delete file
unlink('./filename.text', (err) => {
    console.log(err)
})

//read file sync
let data = readFileSync('./db.json')

//buffer system data return 
console.log(data)

//buffer convert into string
console.log(data.toString())