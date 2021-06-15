let selectID = d3.select("#selDataset");
selectID.on("change", function() {
    var node = select.node();
    console.log(node.value);
});
let demographics = d3.select("#sample-metadata");
console.log(demographics);
let barChart = d3.select("bar");
console.log(selectID);
let gauge = d3.select("#guage");
let bubble = d3.select("#bubble");


let result = d3.json("samples.json").then(result => {
    console.log(result);
})



// Create the unpack data function
function unpackData(rows, index) {
   console.log(rows, index)
   return rows.map(function(row) {
       return row[index]   
    });
};
unpackData(result,0)

// Testing build a plot function