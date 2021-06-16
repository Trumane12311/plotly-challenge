function plots(id) {
    d3.json("samples.json").then((data)=> {
        console.log(data);
 
        var samples = data.samples.filter(s => s.id.toString() === id)[0];
        console.log(`Samples: ${samples}`);
        
        data.samples.forEach((sample => {
            let topTen = samples.sample_values.slice(0, 10).reverse();
            console.log(`Top Ten Samples: ${topTen}`);

        let topOTU = samples.otu_ids.slice(0, 10).reverse();
        console.log(`Top Ten OTUs: ${topOTU}`);

            let OTUids = topOTU.map(d => "OTU " + d)
        console.log(`OTU IDS: ${OTUids}`);

        let OTUlabels = samples.otu_labels.slice(0, 10);
        console.log(`Labels: ${OTUlabels}`);

        let bX = samples.otu_ids;
        console.log(bX);

            let bY = samples.sample_values;
        console.log(bY);

            let bSize = samples.sample_values;
        console.log(bSize);

        let bColor = samples.otu_ids;
        console.log(bColor);

            let bText = samples.otu_labels;
        console.log(bText);

        
// Create a bar chart that updates 
// based on the selected participant.It should 
// generate on the changing value of subject ul listing selection.
        let traceBar = {
            x: topTen,
            y: OTUids,
            text: OTUlabels,
            type:"bar",
            orientation: "h",
        };

        let dataBar = [traceBar];

        let layoutBar = {
            title: "Top 10 Bacteria Cultures Found",
            yaxis:{
                tickmode:"linear",
            }
        };

        Plotly.newPlot("bar", dataBar, layoutBar);
        
        //Bubble chart 
        let traceBubble = {
            x: bX,
            y: bY,
            mode: "markers",
            marker: {
                size: bSize,
                color: bColor
            },
            text:bText
        };

        let layoutBubble = {
            title: "Bacteria Cultures Per Sample",
            xaxis:{title: "OTU ID"},
        };

        let dataBubble = [traceBubble];

        Plotly.newPlot("bubble", dataBubble, layoutBubble); 

    }));    
})}

/* Create a function for the demographics panel that updates 
based on the selected participant. It should 
generate on the changing value of subject ul listing selection.*/

function jsonData(id) {
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        console.log(metadata)

        let result = metadata.filter(meta => meta.id.toString() === id)[0];

        let demographicPanel = d3.select("#sample-metadata");
        demographicPanel.html("");

        Object.entries(result).forEach((key) => {   
                demographicPanel.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

function updatePlots(id) {
    plots(id);
    jsonData(id);
};

// select the user input field
let selectID = d3.select("#selDataset");

// select the demographic info div's ul list group
let demographicsTable = d3.select("#sample-metadata");

// select the bar chart div
let barChart = d3.select("#bar");

// select the bubble chart div
let bubbleChart = d3.select("bubble");

// select the gauge chart div
let gaugeChart = d3.select("gauge");

function init() {

    d3.json("samples.json").then((data => {

        // ----------------------------------
        // POPULATE DROPDOWN MENU WITH IDs 
        // ----------------------------------

        //  use a forEach to loop over each name in the array data.names to populate dropdowns with IDs
        data.names.forEach((name => {
             selectID.classed("dropdown-item")
             let option = selectID.append('li');
            option.text(name);
        })); // close forEach

        // get the first ID from the list for initial charts as a default
        var initId = selectID.property("value")

        // plot charts with initial ID
        plots(initId);

    })); // close .then()

} // close init() function

init();



/*function resetData() {
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

    // clear data from html ids
    demographicsPanel.html("");
    barChart.html("");
    bubbleChart.html("");
    gaugeChart.html("");
}
*/

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






/* Create a guage chart that updates 
based on the selected participant.It should 
generate on the changing value of subject ul listing selection.*/



// Create a bubble chart that updates 
// based on the selected participant.It should generate on the changing value of subject ul listing selection.
