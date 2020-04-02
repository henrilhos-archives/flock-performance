import "./App.css";
import {
  bodyWeight,
  bodyWeightGoal,
  caseWeight,
  caseWeightGoal,
  cumEggs,
  cumEggsGoals,
  cumTotalMortality,
  cumTotalMortalityGoal,
  feedIntake,
  feedIntakeGoal,
  henDay,
  henDayGoal,
} from "./data";
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
      data: cumTotalMortality,
    },
    {
      name: "Cum. total mortality goal (%)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.PURPLE,
      marker: { symbol: Symbols.CIRCLE },
      data: cumTotalMortalityGoal,
    },
    {
      name: "Hen-day (%)",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.AQUA,
      marker: { symbol: Symbols.SQUARE },
      data: henDay,
    },
    {
      name: "Hen-day goal (%)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 0,
      tooltip: { valueSuffix: "%" },
      color: Colors.AQUA,
      marker: { symbol: Symbols.SQUARE },
      data: henDayGoal,
    },
    {
      name: "Feed intake (lbs/100 birds/day)",
      type: "line",
      yAxis: 1,
      color: Colors.BROWN,
      marker: { symbol: Symbols.DIAMOND },
      data: feedIntake,
    },
    {
      name: "Feed intake goal (lbs/100 birds/day)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 1,
      color: Colors.BROWN,
      marker: { symbol: Symbols.DIAMOND },
      data: feedIntakeGoal,
    },
    {
      name: "Cum. eggs/hen housed",
      type: "line",
      yAxis: 1,
      color: Colors.PINK,
      marker: { symbol: Symbols.TRIANGLE },
      data: cumEggs,
    },
    {
      name: "Cum. eggs/hen housed goal",
      dashStyle: "Dash",
      type: "line",
      yAxis: 1,
      color: Colors.PINK,
      marker: { symbol: Symbols.TRIANGLE },
      data: cumEggsGoals,
    },
    {
      name: "Case weight (lbs/30doz)",
      type: "line",
      yAxis: 1,
      color: Colors.ORANGE,
      marker: { symbol: Symbols.CIRCLE },
      data: caseWeight,
    },
    {
      name: "Case weight goal (lbs/30doz)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 1,
      color: Colors.ORANGE,
      marker: { symbol: Symbols.CIRCLE },
      data: caseWeightGoal,
    },
    {
      name: "Body weight (lbs/30doz)",
      type: "line",
      yAxis: 1,
      color: Colors.GREEN,
      marker: { symbol: Symbols.CIRCLE },
      data: bodyWeight,
    },
    {
      name: "Body weight goal (lbs/30doz)",
      dashStyle: "Dash",
      type: "line",
      yAxis: 1,
      color: Colors.GREEN,
      marker: { symbol: Symbols.CIRCLE },
      data: bodyWeightGoal,
    },
  ],
};

const App = (): JSX.Element => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default App;
