// Select the user input field.
let selectID = d3.select("#selDataset");
console.log(selectID);
// Select the demographics for participant listing div.
let demographicsPanel = d3.select("#sample-metadata");
console.log(demographicsPanel);

// Select bar chart div.
let barChart = d3.select("bar");
console.log(selectID);

// Select guage chart div. 
let gaugeChart = d3.select("#guage");

// Select bubble chart div.
let bubbleChart = d3.select("#bubble");

// Import JSON file to view data
// let json = d3.json("samples.json").then(result => {
//    console.log(result);
// });

/*  Import participant list into ul listing 
for the dropdown menu.*/



/* Create a demographics panel that updates 
based on the selected participant. It should 
generate on the changing value of subject ul listing selection.*/

function init() {

    // reset any previous data
    resetData();

    // read in samples from JSON file
    d3.json("samples.json").then((result => {

            let selectID = d3.select("#selDataset");
        
            d3.json("samples.json").then((result)=> {
                console.log(result)
        
                results.names.forEach(function(name) {
                    selectID.append("option").text(name).property("value");
                });
        });

function resetData() {
    demographicsPanel.html("");
    barChart.html("");
    bubbleChart.html("");
    gaugeChart.html("");
}

init();

/*function plotCharts(id) {

    // read in the JSON data
    d3.json("samples.json").then((derek => {

        der.metadata.filter(participant => participant.id == id)[0];

        // get the wash frequency for gauge chart later
        // var washfreq = individualMetadata.wfreq;

        // Full Value and Key
        Object.entries(individualSubject).forEach(([key, value]) => {

            let newList = demographicsPanel.append("ul");
            let subjectList = newList.append("li");
            // add the key value pair from the metadata to the demographics list
            subjectList.text(`${key}: ${value}`);

        });
    }))
}
*/

//let individualSubject = json.metadata.filter(participant => participant.id == id)[0];
//console.log(individualSubject);


/* Create a bar chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



/* Create a guage chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



// Create a bubble chart that updates 
// based on the selected participant.It should 
// generate on the changing value of subject ul listing selection.
