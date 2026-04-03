import "../styles/home_page.css"

function Home() {
    return (
        <div className="home-container">

            <h1 className="home-title">Student Helper</h1>

            <div className="home-buttons">

                {/* Upload Syllabus */}
                <div className="home-card">
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
