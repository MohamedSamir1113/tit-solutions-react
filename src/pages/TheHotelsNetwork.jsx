import { useEffect } from "react";

function TheHotelsNetwork() {
    useEffect(() => {
        document.title = "The Hotels Network";
      }, []);
    return (
        <div>
            TheHotelsNetwork
        </div>
    )
}

export default TheHotelsNetwork
