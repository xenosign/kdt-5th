import React, { useEffect, useState } from "react";

export default function ExampleUseEffect() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const styleObj = { backgroundColor: "skyblue" };

  if (width < 500) {
    styleObj.backgroundColor = "orange";
  } else {
    styleObj.backgroundColor = "skyblue";
  }

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth);
  //   });
  // }, []);

  return <div style={styleObj}>{width}</div>;
}
