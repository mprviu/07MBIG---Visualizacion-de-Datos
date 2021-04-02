//import "./styles.css";

// Gráfico de columnas.
var visualization = d3plus
  .viz()
  .container("#viz1")
  .data([
    { year: 1991, name: "alpha", value: 15 },
    { year: 1992, name: "alpha", value: 20 }
  ])
  .type("bar")
  .id("name")
  .x("year")
  .y("value")
  .draw();
