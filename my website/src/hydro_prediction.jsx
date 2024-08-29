import h2_paper from "./assets/images/h2_paper.pdf";
export default function H2_PREDICTION() {
    return (
        <div>
            <div className="hydro_predict" style={{ height: "100vh", margin: "0 auto" }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: "bolder", textAlign: "center", fontFamily: "lora", padding: "15rem 0 2rem 0" }}>HydroPredict</h3>


                <p style={{ fontFamily: "lora", padding: "0 5rem 0 5rem", overflowY: "hidden" }}>
                    Hydrogen has emerged as a promising replacement for fossil fuels in this era of energy transition. As the demand for clean energy grows, various methods have been employed to produce it. However, recent discoveries suggest that natural hydrogen from water-rock interactions could offer a cost-effective and viable solution. Estimating natural hydrogen concentrations is complex, particularly when using thermodynamic models.
                    Therefore this <a href={h2_paper} style={{ textDecoration: "none" }} target="_blank">work</a> explores how neural networks can contribute to modeling and predicting natural hydrogen concentrations. Here, four neural network models—SNN, BPNN, ELM, and RBFNN—were evaluated using seven different metrics.
                </p>

               
            </div>

        </div>

    );
}