  let row = +prompt("Enter number of rows you want in your table: ", 3);
  let column = +prompt("Enter number of columns you want in your table: ", 4);

  let printTable = '';

  function showTable(row, column, printTable) {

    for(let rowIndex = 0; rowIndex < row; rowIndex++)
    {

      printTable = '';

      for(let columnIndex = 0; columnIndex < column; columnIndex++)
      {
        printTable = printTable + (`R${rowIndex} ,C${columnIndex}`) + ' | ';
      }
    
      console.log(printTable);
    
    }

  }

  showTable(row, column, printTable);


