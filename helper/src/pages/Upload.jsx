import "../styles/main.css"
import "../styles/upload.css"

function Upload(){
    return(
        <div className="home-container">

            {/*title of the page*/}
            <div className="home-title">
                <h1>Upload a Syllabus</h1>
                <p className="title">Please upload your syllabus, so we can grab all the weights of the grades and give you an accurate account of all your grades</p>
            </div>

            {/*upload area*/}
            <div>
                <div>
                    <p>Please enter here</p>
                </div>

                {/*button to submit only if the file has been uploaded*/}
                <div>
                    <p>Button goes here</p>
                </div>
            </div>

        </div>

    )
}
export default Upload;