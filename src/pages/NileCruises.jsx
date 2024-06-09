import { useEffect } from "react";

function NileCruises() {
    useEffect(() => {
        document.title = "Nile Cruises";
      }, []);
    return (
        <div>
            NileCruises
        </div>
    )
}

export default NileCruises
