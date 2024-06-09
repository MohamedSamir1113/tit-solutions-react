import { useEffect } from "react";

function HospitalityPhotography() {
    useEffect(() => {
        document.title = "Hospitality Photography";
      }, []);
    return (
        <div>
            Hospitality Photography
        </div>
    )
}

export default HospitalityPhotography
