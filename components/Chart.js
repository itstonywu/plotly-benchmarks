import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const Chart = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          marker: { color: "red" },
        },
      ]}
      layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
    />
  );
};

export default Chart;
