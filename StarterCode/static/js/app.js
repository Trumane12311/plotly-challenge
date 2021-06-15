var selectID = d3.select("#selDataset");
console.log(selectID)
var demographics = d3.select("#sample-metadata");
console.log(demographics)


d3.json("data/samples.json")


// Create the unpack data function
function unpackData(rows, index) {
    return rows.map(function(row) {
        return row[index]
    });
};

// Testing build a plot function