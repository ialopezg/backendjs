import readline from 'readline';
import { greeting } from './name';

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('What is your name?: ', (name) => {
  greeting(name);
});
