import React, { useState, useEffect, useCallback } from "react";
import { ColorsElements as colors } from "../styles/utils/colors/colors";

export function useBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState(backgroundColor);

  const changeBackgroundColor = useCallback(async (Color) => {
    await setBackgroundColor(Color);
    console.log("g1", Color);
  }, []);

  return {  backgroundColor, changeBackgroundColor };
}
