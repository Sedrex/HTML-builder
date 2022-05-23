


const fs = require('fs');


fs.writeFile('./02-write-file/secTxt.txt', '' , function(error){
 
    if(error) throw error; 
});


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
 

readline.setPrompt('Are you sure?\n');
readline.prompt();
readline.on('line', (txt) => {
        if (txt == 'exit'){
            readline.setPrompt('GOODBYE\n');
            readline.prompt();
            readline.close()
        }
        else{
            readline.prompt();
            fs.appendFile("./02-write-file/secTxt.txt",  txt  , function(error){
          if(error) throw error; // если возникла ошибка
            }
    )
    }});
  
    readline.on('SIGINT',() => {

          readline.setPrompt('GOODBYE\n');
          readline.prompt();
          readline.close()
        }
    )



