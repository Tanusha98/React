import React from "react";

function ClimateVerdict(props) {
  if (props.celsius > 40) return <div>The climate is very hot</div>;
  else if (props.celsius < 15) return <div>The climate is very cool</div>;
  return <div>The climate is optimal</div>;
}

export default ClimateVerdict;
