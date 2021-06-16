function plots(subjectData) {
    d3.json("samples.json").then((data)=> {
        let subjects = data.samples;
        console.log(subjects)
        let resultsdata = subjects.filter(subject => subject.id == subjectData);
        console.log(resultsdata)
        let result = resultsdata[0];
        console.log(result);
});
}
        

        
// Create a bar chart that updates 
// based on the selected participant.It should 
// generate on the changing value of subject ul listing selection.
/*        let traceBar = {
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

    //}));    
//})}
/*

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

function updatePlots(newData) {
    plots(newData);
    jsonData(newData);
};

// select the user input field


// select the demographic info div's ul list group
let demographicsTable = d3.select("#sample-metadata");

// select the bar chart div
let barChart = d3.select("#bar");

// select the bubble chart div
let bubbleChart = d3.select("bubble");

// select the gauge chart div
let gaugeChart = d3.select("gauge");

function init() {
    let selectID = d3.select("#selDataset");
    d3.json("samples.json").then((data => {
        var subjectNames = data.names;
        subjectNames.forEach((subject => {
             selectID.append('li').text(subject).property("value", subject);
        }));

        // get the first ID from the list for initial charts as a default
        const fillerData = subjectNames[0];
        plots(fillerData);
        buildMetadata(fillerData);

    })); // close .then()
}; // close init() function

init();