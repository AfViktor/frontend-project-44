import readlineSync from 'readline-sync';

const greetings = () => {
    const name = readlineSync.question('May I have your name?: ');
};

export default greetings;