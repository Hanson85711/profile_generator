const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;
let activity;
let listen;
let meal;
let favEat;
let sport;
let sPower;


rl.question(" What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  name = answer;
  rl.question(" What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    activity = answer;
    rl.question(" What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      listen = answer;
      rl.question(" Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        meal = answer;
        rl.question(" What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          favEat = answer;
          rl.question(" Which sport is your absolute favourite? ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            sport = answer;
            rl.question(" What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              sPower = answer;

              console.log(`${name} loves to do some ${activity} while listening to ${listen}.\n`
              + `Their favorite meal of the day is ${meal} with ${favEat} as their favorite thing to eat.\n`
              + `Their favorite sport is ${sport} and they excel with ${sPower} being their superpower.`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});


