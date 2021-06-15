let selectID = d3.select("#selDataset");
console.log(selectID);
let demographics = d3.select("#sample-metadata");
console.log(demographics);
let barChart = d3.select("bar");
let gauge = d3.select("#guage");
let bubble = d3.select("#bubble");


d3.json("samples.json")


// Create the unpack data function
// function unpackData(rows, index) {
//     console.log(rows, index, "rows and index")
//     return rows.map(function(row) {
//         return row[index]
//     });
// };
// unpackData()

// Testing build a plot function