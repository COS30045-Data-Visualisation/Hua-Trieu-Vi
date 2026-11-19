const drawScatterplot = (data) => {

    // Set the dimensions and margins of the chart area
    const svg = d3.select("#scatterplot")
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`); // Responsive SVG[cite: 10]

    // Create an inner chart group with margins
    innerChartS = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Set up x and y scales (using 'star' instead of 'starRating')
    xScales
        .domain([0, d3.max(data, d => +d.star)])
        .range([0, innerWidth])
        .nice();

    yScales
        .domain([0, d3.max(data, d => +d.energyConsumption)])
        .range([innerHeight, 0])
        .nice();

    // Set up the color scale
    colorScale
        .domain(data.map(d => d.screenTech)) // Get unique screenTech values[cite: 11]
        .range(d3.schemeCategory10); // Use a predefined color scheme[cite: 11]

    // Draw the circles for the scatterplot (using 'd.star' for cx)
    innerChartS.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => xScales(+d.star))
        .attr("cy", d => yScales(+d.energyConsumption))
        .attr("r", 4)
        .attr("fill", d => colorScale(d.screenTech))
        .attr("opacity", 0.5)
        .attr("stroke", null);

    // Add Bottom Axis (X Axis)
    const xAxis = d3.axisBottom(xScales);
    innerChartS.append("g")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(xAxis);

    // Add Left Axis (Y Axis)
    const yAxis = d3.axisLeft(yScales);
    innerChartS.append("g")
        .call(yAxis);

    // Add Axis Labels
    innerChartS.append("text")
        .attr("x", innerWidth / 2)
        .attr("y", innerHeight + 40)
        .attr("text-anchor", "middle")
        .text("Star Rating");

    innerChartS.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -innerHeight / 2)
        .attr("y", -50)
        .attr("text-anchor", "middle")
        .text("Labeled Energy Consumption (kWh/year)");

    // Add a legend for the color scale
    const legend = svg
        .append("g")
        .attr("transform", `translate(${width - 100}, ${margin.top})`); // Position the legend

    // Loop through the color scale domain to create legend entries
    colorScale.domain().forEach((screenTech, i) => {

        // Create a group for each legend entry
        const legendRow = legend
            .append("g")
            .attr("transform", `translate(0, ${i * 20})`); // Space rows vertically

        // Add a colored rectangle for each screenTech
        legendRow.append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", colorScale(screenTech)); //

        // Add text next to the rectangle
        legendRow.append("text")
            .attr("x", 20) // Position text to the right of the rectangle
            .attr("y", 10) // Align text with the rectangle
            .attr("text-anchor", "start")
            .style("alignment-baseline", "middle")
            .text(screenTech); // Display the screenTech value
    });
};