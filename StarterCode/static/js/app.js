// Select the user input field.
let selectID = d3.select("#selDataset");
selectID.on("change", function() {
    var node = select.node();
    console.log(node.value);
});

// Select the demographics for participant listing div.
let demographicsPanel = d3.select("#sample-metadata");
console.log(demographicsPanel);

// Select bar chart div.
let barChart = d3.select("bar");
console.log(selectID);

// Select guage chart div. 
// let gaugeChart = d3.select("#guage");

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

        result.names.forEach((name => {
            let option = selectID.append("option");
            option.text(name);
        })); // close forEach

        // get the first ID from the list for initial charts as a default
        let updateID = selectID.property("value");

        // plot charts with initial ID
        plotCharts(updateId);

    }));

}

function resetData() {
    demographicsPanel.html("");
    barChart.html("");
    bubbleChart.html("");
    // gaugeChart.html("");
}

init();

function plotCharts(id) {

    // read in the JSON data
    d3.json("samples.json").then((data => {

        // ----------------------------------
        // POPULATE DEMOGRAPHICS TABLE
        // ----------------------------------

        // filter the metadata for the ID chosen
        var individualSubject = data.metadata.filter(participant => participant.id == id)[0];

        // get the wash frequency for gauge chart later
        // var washfreq = individualMetadata.wfreq;

        // Iterate through each key and value in the metadata
        Object.entries(individualSubject).forEach(([key, value]) => {

            var newList = demographicsTable.append("ul");
            newList.attr("class", "list-group list-group-flush");

            // append a li item to the unordered list tag
            var subjectList = newList.append("li");

            // change the class attributes of the list item for styling
            subjectList.attr("class", "list-group-item p-1 demo-text bg-transparent");

            // add the key value pair from the metadata to the demographics list
            subjectList.text(`${key}: ${value}`);

        });
    }))

//let individualSubject = json.metadata.filter(participant => participant.id == id)[0];
//console.log(individualSubject);


/* Create a bar chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



/* Create a guage chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



/* Create a bubble chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/
