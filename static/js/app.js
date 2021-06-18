function plots(subjectData) {
    d3.json("samples.json").then((data)=> {
        let subjects = data.samples;
        console.log(subjects);
        let resultsdata = subjects.filter(subject => subject.id == subjectData)[0];
        console.log(resultsdata);
        let ids = resultsdata.otu_ids;
        console.log(ids);
        let labels = resultsdata.otu_labels;
        console.log(labels);
        let values = resultsdata.sample_values;
        console.log(values);
        
// Create a bar chart that updates 
// based on the selected participant.It should 
// generate on the changing value of subject ul listing selection.
        let barchart =[
            {
            y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
            x:values.slice(0,10).reverse(),
            text:labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"
            }
        ];
    
        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };
    
        Plotly.newPlot("bar", barchart, barLayout);

        
// Create a bubble chart that updates 
// based on the selected participant.It should 
// generate on the changing value of subject ul listing selection.
        let bubbleLayout = {
            margin: { t: 0 },
            xaxis: { title: "Presence of Bacteria by OTU ID" },
            hovermode: "closest",
        };
        
        let bubbleData = [{
            x: ids,
            y: values,
            text: labels,
            mode: "markers",
            marker: {
                color: ids,
                size: values
            }
        }];
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    })
}
        
// Create a function for the demographics panel that updates based on the selected participant.

function panelInfo(subjectData) {
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        console.log(metadata);
        let resultsdata = metadata.filter(object => object.id == subjectData);
        console.log(resultsdata);
        let subject = resultsdata[0];
        let wfreq = subject.wfreq
        console.log(subject);
        let demographicPanel = d3.select("#sample-metadata");
        demographicPanel.html("");
        Object.entries(subject).forEach(([key, value]) => {   
            demographicPanel.append("p").text(`${key}: ${value}`);
        })
// Plot Gauge
        let gauge = [
            {
            domain: {x: [0,1], y:[0,1]},
              type: "indicator",
              mode: "gauge",
              value: wfreq,
              title: { text: "Frequency of Washing", font: { size: 24 } },
              gauge: {
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "black", tickmode: "linear" },
                bar: { color: "rbga(0, 128, 0, .9" },
                steps: [
                  { range: [0, 1], color: "rgba(0,130,130,.05)" },
                  { range: [1, 2], color: "rgba(0,130,130,.1)" },
                  { range: [2, 3], color: "rgba(0,130,130,.2)" },
                  { range: [3, 4], color: "rgba(0,130,130,.3)"},
                  { range: [4, 5], color: "rgba(0,130,130,.4)" },
                  { range: [5, 6], color: "rgba(0,130,130,.5)" },
                  { range: [6, 7], color: "rgba(0,130,130,.6)" },
                  { range: [7, 8], color: "rgba(0,130,130,.7)" },
                  { range: [8, 9], color: "rgba(0,130,130,.8)" }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: wfreq
                }
              }
            }
          ];
          
          let layout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "white",
            font: { color: "black", family: "Arial" }
          };
          
          Plotly.newPlot('gauge', gauge, layout);
    }
)}   
// Create the initiation function
function init() {
    let selectID = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
        let subjectNames = data.names;
        subjectNames.forEach((subject) => {
             selectID.append('option').text(subject).property("value", subject);
        });
        // get the first ID from the list for initial charts as a default
        const firstSample = subjectNames[0];
        plots(firstSample);
        panelInfo(firstSample);
    });
}

// Create function to update plots and demographics panel
function updatePlots(newSample) {
    plots(newSample);
    panelInfo(newSample);
}

// Initiate the functions
init();
