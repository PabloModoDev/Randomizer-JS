const process = require('child_process')
const pdata = require('./data/rwdata.json')
let listadp = pdata.words
  function palabraRandom() {
    return listadp[randInt(listadp.length)];
  }
  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }
  function separar(palabra1, palabra2){
      return palabra1 + palabra2
  }
  let foldern = separar(palabraRandom(), palabraRandom())
  console.log(`Folder ${foldern} creado en ./${foldern}`)
    const x ='mkdir ' + foldern 
    if(!x){
        return; 
    }
    process.exec(x, (error, stdout) => {
        let response = (error || stdout);
        console.log(response)
    })
    return;
    