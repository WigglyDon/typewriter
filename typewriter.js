const sentence = "wiggly donnie's comin' to get'cha hahahahaaaa!!";

let timer = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  
  }, timer * 50 );
  timer ++;
}

setTimeout(() => {
console.log('');
}, sentence.length * timer * 1.1)
