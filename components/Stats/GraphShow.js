import React from "react";
import CardLineChart from "components/Cards/CardLineChart.js";

function GraphShow() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {});

  return (
    <>
      <div style={{ paddingTop: "1em" }}>
        <CardLineChart />
      </div>
    </>
  );
}

export default GraphShow;
