// Load the CSV file with a row conversion function
d3.csv("./Data/Ex6_TVdata_withStar.csv", d => ({
    brand: d.brand,
    model: d.model,
    screenSize: +d.screenSize, // Convert screenSize to a number
    screenTech: d.screenTech,
    star: +d.star, // Convert to number
    energyConsumption: +d.energyConsumption // Convert energyConsumption to a number
})).then(data => {
    // Log the processed data to the console
    console.log(data);

    // Call functions after data is loaded
    drawHistogram(data);
    populateFilters(data);
    drawScatterplot(data);
    createTooltip();
    handleMouseEvents();
    
}).catch(error => {
    console.error("Error loading the CSV file:", error);
});