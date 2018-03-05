let flag = 0;
let count = 0;
let desh = '-';
const fs = require('fs');
console.log(__dirname);
let traverseFileSystem = function (currentPath) {
  if(!flag) {
    console.log(currentPath);
    // console.log(count);
    // while(currentPath.includes('/')) {
    //   count++;
    //   console.log(count);
    // }
    path = currentPath;
    flag = 1;
  }
  if(flag) {
    // count = count++;
    // while(cnt--)
    let i = 0;
    let cnt = 0;
    // console.log(currentPath.length);
    // while(i < currentPath.length)
    // {
    //   if(currentPath[i] == '/');
    //   cnt++;
    // }
    desh = desh + '-';
    if(flag != 1)
      // console.log(desh + '|' + currentPath );
    flag = 2;
  }
  let files = fs.readdirSync(currentPath);
  currentPath = currentPath  + '/' ;
  let newPath = currentPath;
  let temp;
  while(newPath.includes('/')) {
    temp = newPath.indexOf('/');
    newPath[temp] = ' ';
  }

  for (let i in files) {
   let currentFile = currentPath + files[i];
   let stats = fs.statSync(currentFile);
   if (stats.isFile()) {
        // console.log('-');
        console.log(  files[i]);
      }
      else if (stats.isDirectory()) {
        console.log(files[i]);
       traverseFileSystem(currentFile);
     }
   }
 };
 traverseFileSystem('.');

 