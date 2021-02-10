const { Console } = require('console');
const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    console.log(`Hello there, ${name}!`);
  
    rl.question("What's an activity you like doing? ", (activity) => {
      console.log(`Me too!`);

      rl.question("What do you listen to while doing that? ", (music) => {
        console.log(`Have fun listening to ${music}!`);
      
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
          console.log(`That's my favourite too!`);
        
          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            console.log(`Great, we'll serve you ${food} next time.`);
          
            rl.question("which sport is your absolute favourite? ", (sport) => {
              console.log(`Let's go for some ${sport} one of these days!`);
            
              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                console.log(`You should use that to become a superhero!`);
              
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});











