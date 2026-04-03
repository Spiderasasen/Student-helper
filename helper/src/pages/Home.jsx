import "../styles/home_page.css"
import { useNavigate } from "react-router-dom";

function Home() {
    //navigation tab
    const navigate = useNavigate();

    return (
        <div className="home-container">

            <div className="home-title">
                <h1>Student Helper</h1>
                <h2>Calculate if you can pass your classes</h2>
            </div>

            <div className="home-buttons">

                {/* Upload Syllabus */}
                <div className="home-card" onClick={() => navigate("/upload")}>
                    <h3 className="card-title">Upload a Syllabus</h3>
                    <p className="card-description">
                        Scan your syllabus and extract assignment weights automatically.
                    </p>
                </div>

                {/* GPA Predictor */}
                <div className="home-card">
                    <h3 className="card-title">GPA Predictor</h3>
                    <p className="card-description">
                        Enter your GPA and classes to predict semester outcomes.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;
