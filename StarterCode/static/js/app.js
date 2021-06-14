let json = "data/samples.json"

// Create the unpack data function
function unpackData(rows, index) {
    return rows.map(function(row) {
        return row[index]
    })
}

// Testing build a plot function
function buildPlot () {
    d3.json(json).then(result => {
        console.log(result);
    })
}