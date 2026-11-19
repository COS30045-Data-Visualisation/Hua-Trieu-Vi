const drawDonutChart = data => {
    const width=1000;
    const height=500;
    const radius= Math.min(width,height)/2 -20

    const color=d3.scaleOrdinal()
    .domain(data.map(d => d.Screensize_Category))
    .range(d3.schemeSet2);

    const pie = d3.pie()
        .value(d => d.Count)
        .sort(null);

    const arcGenerator= d3.arc()
        .innerRadius(radius*0.6)
        .outerRadius(radius)
        .padAngle(0.01)
        .cornerRadius(10);

    const svg = d3.select("#donut-chart")
    .append("svg")
    .attr("viewBox", `0, 0, ${width}, ${height}`)
    .style("border", "1px solid black");

    const innerChart = svg
    .append("g")
    .attr("transform", `translate(${width/2}, ${height/2})`);

    innerChart
        .selectAll("path")
        .data(pie(data))
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", d => color(d.data.Screensize_Category)) // Use category for color
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    innerChart
        .selectAll(".donut-label")
        .data(pie(data))
        .join("text")
        .attr("class", "donut-label")
        .attr("transform", d => `translate(${arcGenerator.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text(d => `${d.data.Screensize_Category}:${d.data.Count}`);
}