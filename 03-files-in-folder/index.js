const fs = require('fs')
const path = require('path')

fs.readdir('./03-files-in-folder/secret-folder', (err, files) => {
    if(err) throw err; // не прочитать содержимое папки
   for(let i =0; i<files.length; i++){
    fs.stat(path.join('./', '03-files-in-folder/secret-folder/', files[i]), (err, stats) => {
        if(err) throw err;
        if(stats.isFile()){
            console.log(path.basename(files[i] , path.extname(files[i])) + " " + path.extname(files[i]) + " " 
            + stats.size +" byte")
            
        }
        else{

            return
        }
    })
 }
})

