const readline = require('readline');

let surveyAnswer = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feeback ${answer}.`);
  surveyAnswer.push(answer);
  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`The activity you like doing is ${answer}.`);
    surveyAnswer.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`You listening to ${answer}.`);
      surveyAnswer.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Your favourite meal is ${answer}.`);
        surveyAnswer.push(answer);
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Your favourite thing to eat is ${answer}.`);
          surveyAnswer.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Your favourite sport is ${answer}.`);
            surveyAnswer.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Your superpower is ${answer}.`);
              surveyAnswer.push(answer);
              console.log(surveyAnswer);

              rl.close();
            });
          });
        });
      });
    });
  });
});