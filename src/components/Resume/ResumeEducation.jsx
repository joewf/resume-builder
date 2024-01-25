const ResumeEducation = ({ school, degree, location }) => {
    return (
        <>
            <h3 className="title" id="education-title">Education</h3>
            <div className="education-container">
                <div id="test">
                    <h3 id="school">{(school && school.length) ? school : ""}</h3>
                    <ul id="degree">
                        {(degree && degree.length) ? <li >{degree}</li> : ""}
                    </ul>
                </div>
                <span id="location">{(location && location.length) ? location : ""}</span>
            </div>


        </>
    )
}

export default ResumeEducation