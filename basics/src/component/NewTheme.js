import React, { useMemo, useState } from "react";

const NewTheme = () => {
  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const myMemo = useMemo(() => {
  return myCal(num)
  }, [num]);

  const cssStyle = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "100px",
    margin: "100px",
  };

  return (
    <div style={cssStyle}>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <h2>Cal:{myMemo}</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  );
};

function myCal(num) {
  console.log("loop started");
  for (let i = 0; i < 100000; i++) {}
  return num;
}

export default NewTheme;
