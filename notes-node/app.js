console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });

const argv = yargs.argv;

var command = argv._[0];
console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  // task: print a message if note exist put a message that the note exist and
  // pring the title and the body
  // if the note does not exist that means there is duplicate and note does not exist
  // print message note tittle already in use
  if (note){
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title already in use!');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  if(note){
    console.log('Note found!');
    notes.logNote(note);
  } else {
    console.log('Note has not been found!')
  }
  //if finds note return the obj
  //if not return undefined just like we do add note
  // console logs as add notes

} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed!' : "Note not found!"
  console.log(message);
} else {
  console.log('Command not recognized!');
}
