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
            xaxis: { title: "OTU ID" },
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
        console.log(subject);
        let demographicPanel = d3.select("#sample-metadata");
        demographicPanel.html("");
        Object.entries(subject).forEach(([key, value]) => {   
                demographicPanel.append("p").text(`${key}: ${value}`);
        })
    }
)};   

function updatePlots(newData) {
    plots(newData);
    panelInfo(newData);
}

function init() {
    let selectID = d3.select("#selDataset");
    d3.json("samples.json").then((data => {
        var subjectNames = data.names;
        subjectNames.forEach((subject => {
             selectID.append('option').text(subject).property("value", subject);
        }));

        // get the first ID from the list for initial charts as a default
        const firstSample = subjectNames[0];
        plots(firstSample);
        panelInfo(firstSample);

    }));
}



init();