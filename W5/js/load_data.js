const energyconsumption = "Mean(Labelled energy consumption (kWh/year))"
d3.csv("data/data1.csv", d => {
  return {
    Screen_Tech: d.Screen_Tech,
    Labelled_energy_consumption: +d[energyconsumption]
    };

}).then(data => {
  data.sort((a, b) => b.Labelled_energy_consumption - a.Labelled_energy_consumption);
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.Labelled_energy_consumption));
  console.log(d3.min(data, d => d.Labelled_energy_consumption));
  console.log(d3.extent(data, d => d.Labelled_energy_consumption));

  drawBarChart(data);
});


const Average_price = "Average Price (notTas-Snowy)"
d3.csv("data/data2.csv", d => {
  return {
    Year: +d.Year,
    Average_price: +d[Average_price]
    };

}).then(data => {
  data.sort((a, b) => a.Year - b.Year);
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.Average_price));
  console.log(d3.min(data, d => d.Average_price));
  console.log(d3.extent(data, d => d.Average_price));

  drawLineChart(data);
});

d3.csv("data/data3.csv", d => {
  return {
    Screensize_Category: d.Screensize_Category,
    Count: +d.Count
    };

}).then(data => {
  data.sort((a, b) => a.Count - b.Count);
  console.log(data);
  console.log(data.length);
  console.log(d3.max(data, d => d.Count));
  console.log(d3.min(data, d => d.Count));
  console.log(d3.extent(data, d => d.Count));

    drawDonutChart(data);

});
