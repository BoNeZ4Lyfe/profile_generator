const readline = require('readline');

let surveyAnswer = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
  surveyAnswer.push(answer);
  rl.question('What is an activity you like doing? ', (answer) => {
    surveyAnswer.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      surveyAnswer.push(answer);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        surveyAnswer.push(answer);
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          surveyAnswer.push(answer);
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            surveyAnswer.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              surveyAnswer.push(answer);
              
              console.log('\n');
              console.log(`Your name/nickname is ${surveyAnswer[0]}. The activity you like doing is ${surveyAnswer[1]}. You listening to ${surveyAnswer[2]}. Your favourite meal is ${surveyAnswer[3]}. Your favourite thing to eat is ${surveyAnswer[4]}. Your favourite sport is ${surveyAnswer[5]}. Your superpower is ${surveyAnswer[6]}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});