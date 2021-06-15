// Select the user input field.
let selectID = d3.select("#selDataset");
selectID.on("change", function() {
    var node = select.node();
    console.log(node.value);
});

// Select the demographics for participant listing div.
let demographicsPanel = d3.select("#sample-metadata");
console.log(demographics);

// Select bar chart div.
let barChart = d3.select("bar");
console.log(selectID);

// Select guage chart div.
let gaugeChart = d3.select("#guage");

// Select bubble chart div.
let bubbleChart = d3.select("#bubble");

// Import JSON file to view data
let json = d3.json("samples.json").then(result => {
    console.log(result);
});

/*  Import participant list into ul listing 
for the dropdown menu.*/



/* Create a demographics panel that updates 
based on the selected participant. It should 
generate on the changing value of subject ul listing selection.*/



/* Create a bar chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



/* Create a guage chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



/* Create a bubble chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/






/* Create the unpack data function
function unpackData(rows, index) {
   console.log(rows, index, "rows and index")
   return rows.map(function(row) {
       return row[index]   
    });
};
unpackData(result,0)*/

// Testing build a plot function