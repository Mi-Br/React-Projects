import React, { useState } from "react";

const inputStyle: React.CSSProperties = {
  position: "absolute",
  width: "30px",
  height: "10px",
  background: "white",
  fontSize: "7px",
  color: "black",
  padding: "1px",
};

type BorderRadiusValues = {
  tl: number;
  tr: number;
  bl: number;
  br: number;
};
export function Card() {
  const [borderRadius, setBorderRadiusValues] = useState<BorderRadiusValues>({
    tl: 1,
    tr: 2,
    bl: 3,
    br: 4,
  });

  function changeBorderRadius(
    property: keyof BorderRadiusValues,
    value: number
  ) {
    const next = { ...borderRadius, [property]: value };
    setBorderRadiusValues(next);
  }

  const cardStyle: React.CSSProperties = {
    margin: "4rem",
    position: "relative",
    width: "100px",
    height: "100px",
    background: "#2d2d2d",
    border: "1px solid white",
    borderTopLeftRadius: borderRadius.tl + "px",
    borderTopRightRadius: borderRadius.tr + "px",
    borderBottomLeftRadius: borderRadius.bl + "px",
    borderBottomRightRadius: borderRadius.br + "px",
  };

  let { tl, tr, bl, br } = borderRadius;

  return (
    <>
      <div style={cardStyle}>
        <input
          type="number"
          style={{ ...inputStyle, left: "-30px", top: "-20px" }}
          value={tl}
          onChange={({ target }) =>
            changeBorderRadius("tl", parseInt(target.value))
          }
        ></input>
        <input
          type="number"
          style={{ ...inputStyle, right: "-30px", top: "-20px" }}
          value={tr}
          onChange={({ target }) =>
            changeBorderRadius("tr", parseInt(target.value))
          }
        ></input>
        <input
          type="number"
          style={{ ...inputStyle, left: "-30px", bottom: "-20px" }}
          value={bl}
          onChange={({ target }) =>
            changeBorderRadius("bl", parseInt(target.value))
          }
        ></input>
        <input
          type="number"
          style={{ ...inputStyle, right: "-30px", bottom: "-20px" }}
          value={br}
          onChange={({ target }) =>
            changeBorderRadius("br", parseInt(target.value))
          }
        ></input>
      </div>
    </>
  );
}
