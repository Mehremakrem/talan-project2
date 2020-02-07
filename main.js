const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin , output: process.stdout});


rl.question('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ? \n ',(nb)=>{
  if(nb<=25){
  console.log("Voici la pyramide : \n");
    for(let i=0;i<nb;i++){
      let s=2*nb-1;
      let str="";
      for (let j=0;j < nb-i-1;j++){
        //console.log(" ");
        str += " ";
      }
     for(let k=0; k < 2*i+1;k++){
       //console.log("#");
      str += "#";
     }
     console.log(str);

    }
  }
})