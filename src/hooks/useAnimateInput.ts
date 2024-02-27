import { useState } from "react";

export default function useAnimateInput() {
  const [isFocus, setFocus] = useState(false);
  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  return { isFocus, handleFocus, handleBlur };
}
