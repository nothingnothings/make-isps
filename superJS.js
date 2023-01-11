const xlsxFile = require('read-excel-file/node');

// xlsxFile('./50 isps create.xlsx').then(async (rows) => {
//   const columnNames = rows.shift(); // Separate first row with column names
//   const objs = rows.map((row) => {
//     // Map the rest of the rows into objects
//     const obj = {}; // Create object literal for current row
//     row.forEach((cell, i) => {
//       obj[columnNames[i]] = cell; // Use index from current cell to get column name, add current cell to new object
//     });

//     console.log(objs);
//     // console.log(objs);
//     return obj;
//     // Display the array of objects on the console
//   });
// });

xlsxFile('./50 isps create.xlsx').then((rows) => {
  const columnNames = rows.shift(); // Separate first row with column names
  const objs = rows.map((row) => {
    // Map the rest of the rows into objects
    const obj = {}; // Create object literal for current row
    row.forEach((cell, i) => {
      obj[columnNames[i]] = cell; // Use index from current cell to get column name, add current cell to new object
    });
    console.log(obj);
    
    return obj;
    // Display the array of objects on the console
  });
});
