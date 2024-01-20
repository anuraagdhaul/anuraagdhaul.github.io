import * as d3 from "d3";

let width = 300;
let height = 400;

const svg = d3.select("#calculator")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("margin", "0 auto")

svg.append("rect")
  .attr("fill", "black")
  .attr("id", "calculator")
  .attr("x", 50)
  .attr("y", 75)
  .attr("width", 200)
  .attr("height", 300);

svg.append("rect")
  .attr("fill", "white")
  .attr("x", 75)
  .attr("y", 100)
  .attr("width", 150)
  .attr("height", 30);

svg.append("text")
  .attr("id", "output")
  .attr("fill", "black")
  .attr("text-anchor", "middle")
  .attr("x", 150)
  .attr("y", 120)

svg.append("input")
  .attr("type", "text")
  .attr("id", "number-one")

d3.select("#add")
  .on("click", () => {
    let valueOne = +d3.select('#number').property("value");
    let valueTwo =+d3.select("#number-two").property("value");
    d3.select('#output').text (valueOne + valueTwo);
  })

d3.select("#sub")
  .on("click", () => {
    let valueThree = +d3.select('#number').property("value");
    let valueFour =+d3.select("#number-two").property("value");
    d3.select('#output').text (valueThree - valueFour);
  })


d3.select("#mult")
  .on("click", () => {
    let valueThree = +d3.select('#number').property("value");
    let valueFour =+d3.select("#number-two").property("value");
    d3.select('#output').text (valueThree * valueFour);
  })

d3.select("#div")
  .on("click", () => {
    let valueThree = +d3.select('#number').property("value");
    let valueFour =+d3.select("#number-two").property("value");
    d3.select('#output').text (valueThree / valueFour);
  })