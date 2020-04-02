import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

enum Colors {
  PURPLE = "#7E5B99",
  AQUA = "#018787",
  BROWN = "#744730",
  PINK = "#CB4777",
  ORANGE = "#FF6000",
  GREEN = "#9CD70F",
}

enum Symbols {
  CIRCLE = "circle",
  SQUARE = "square",
  DIAMOND = "diamond",
  TRIANGLE = "triangle",
  TRIANGLE_DOWN = "triangle-down",
}

const options: Highcharts.Options = {
  title: { text: "Flock performance over time" },
  legend: {
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
  },
  navigation: { buttonOptions: { enabled: false } },
  xAxis: {
    title: { text: "Age (weeks)" },
    crosshair: true,
  },
  yAxis: [
    { title: { text: undefined }, labels: { format: "{value}%" } },
    { title: { text: undefined }, opposite: true },
  ],
  plotOptions: {
    series: {
      selected: true,
      showCheckbox: true,
      marker: { enabled: false },
      label: { enabled: false },
    },
  },
  series: [
    {
      name: "Cum. total mortality (%)",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.PURPLE,
      marker: { symbol: Symbols.CIRCLE },
      data: [1, 2, 3],
    },
    {
      name: "Cum. total mortality goal (%)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.PURPLE,
      marker: { symbol: Symbols.CIRCLE },
      data: [3, 2, 1],
    },
    {
      name: "Hen-day (%)",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.AQUA,
      marker: { symbol: Symbols.SQUARE },
      data: [2, 3, 1],
    },
  ],
};

const App = (): JSX.Element => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default App;
