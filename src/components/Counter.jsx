import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import useOnScreen from "./useOnScreen";
const Counter = ({ end }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldStart(true);
    } else {
      setShouldStart(false);
    }
  }, [isVisible]);

  return (
    <span ref={ref}>
      {shouldStart && <CountUp start={0} end={end} duration={3} />}
    </span>
  );
};

export default Counter;
