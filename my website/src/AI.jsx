import dl1 from "./assets/images/DL1.jpg";
import dl2 from "./assets/images/DL2.webp";
import dl3 from "./assets/images/DL3.jpg";
import dl4 from "./assets/images/DL4.jpg";
import ml_h2 from "./assets/images/ml_h2.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function Artificial() {

    const image_list = [dl1, dl2, dl3, dl4];
    const [image, setImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(false)
            setTimeout(() => {
                setImage(previousImage => ((previousImage + 1) % image_list.length));
                setFade(true)


            }, 500)
        }, 5000)

        return () => clearTimeout(timer)
    })


    return (
        <div>
            <div>
                <div style={{ marginTop: "4rem" }} className="AI_container">
                    <img src={image_list[image]} alt="" style={{ width: "100%", height: "34rem", padding: "0", objectFit: "cover", transition: "opacity 500ms ease-in-out", opacity: fade ? 1 : 0 }} />
                    <div className="AI_insc1"><p>Next Generation Technology, Today!</p></div>
                    <div className="AI_insc2"><p>Transforming Ideas into Reality with AI</p></div>

                </div>

                <div style={{display:"flex", gap: "1rem"}}>
                    <div className = "h2_container" style={{ display: "flex", position: "relative" }}>
                        <Link to="/h2_prediction">  <div className="dl1" style={{ height: "30rem" }}> <img src={ml_h2} alt="" style={{ width: "100%", height: "100%", objectFit: "fill" }} /> </div> </Link>
                        <h2 className="predicting_h2">Predicting Hydrogen</h2>
                    </div>

                    <div className="dl1" style={{ height: "30rem" }}> <img src={dl1} alt="" style={{ width: "100%", height: "100%" }} /> </div>

                </div>

                <div style={{display:"flex", gap: "1rem"}}>
                    <div className = "h2_container" style={{ display: "flex", position: "relative" }}>
                        <Link to="/h2_prediction">  <div className="dl1" style={{ height: "30rem" }}> <img src={ml_h2} alt="" style={{ width: "100%", height: "100%", objectFit: "fill" }} /> </div> </Link>
                        <h2 className="predicting_h2">Predicting Hydrogen</h2>
                    </div>

                    <div className="dl1" style={{ height: "30rem" }}> <img src={dl1} alt="" style={{ width: "100%", height: "100%" }} /> </div>

                </div>







            </div>







        </div>
    );
}