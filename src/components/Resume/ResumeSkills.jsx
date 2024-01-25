
import { useState } from "react"

const ResumeSkills = ({ skills }) => {

    return (
        <>
            <h3 className="title">Skills</h3>
            <div className="skills-container">
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index} className="skills-list">
                            {index !== 0 ? "" : null}
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default ResumeSkills
