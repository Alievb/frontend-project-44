
import read from 'readline-sync';
export const cli = () => {
    var Name = read.question('May I have your name? ');
    return console.log('Hello,' + Name + '!');
};