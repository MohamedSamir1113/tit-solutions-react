import { useEffect } from "react";
import BgArea from "../components/BgArea"

function WebCheckInSolution() {
    useEffect(() => {
        document.title = "Web Check-In Solution";
      }, []);
    return (
        <>
        <BgArea
        title1={`Web Check-In Solution`}
        title2={`solutions`}
        path={`/solutions`}
        />
        </>
    )
}

export default WebCheckInSolution
