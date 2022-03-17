import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// data = {x: ..., y: ...}

const Chart = ({ data }) => {
  const {x, y} = data
  return (
    <Plot
      data={[
        {
          x,
          y,
          type: "scatter",
          marker: { color: "red" },
        }
      ]}
      layout={{ width: 1000, height: 300, title: "A Fancy Plot" }}
    />
  );
};

export default Chart;

// 0: {y: 1078, x: 446, id: '1'}
// 1: {y: 1827, x: 489, id: '2'}
// 2: {y: 1496, x: 411, id: '3'}
