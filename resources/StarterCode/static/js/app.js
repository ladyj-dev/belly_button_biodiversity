// 


// create a function called buildBiodata
function buildBiodata(sample) {
    // grab data using d3.json and use then method to chain



    // filter data

    // grab panel from index html panel class (can be seen inside inspect) by grabing sample metadata id
    var Panel = d3.select("#sample-metadata");
    // clear html in the panel 
    Panel.html("");
    
    // Object.entries
}

function buildCharts(sample) {
    // grab data
    console.log("buildCharts output");

    // build bar chart



    // build bubble chart


}




// create an init function
function init() {
    console.log("start of init");
    // get a reference to selDataset
    var selector = d3.select("#selDataset");


    // create a dropdown menu with names
    d3.json("samples.json")


    // call functions;
    
    // grab initial value - sample #947 (testSample)
    
    
    // buildBiodata(testSample)


    // buildCharts(testSample)
}















// create the init function
init();