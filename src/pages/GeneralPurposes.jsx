import { useEffect } from "react";

function GeneralPurposes() {
    useEffect(() => {
        document.title = "General Purposes";
      }, []);
    return (
        <div>
            GeneralPurposes
        </div>
    )
}

export default GeneralPurposes
