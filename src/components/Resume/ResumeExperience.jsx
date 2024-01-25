import PropTypes from 'prop-types';

export default function ResumeExperience({ experiences }) {

    function BulletPoints({ text }) {
        const bulletPoints = text.split('•');

        return (
            <ul>
                {bulletPoints
                    .filter(point => point.length > 0) // Removes empty bullet points
                    .map((point, index) => (
                        <li key={index}>{point.trim()}</li>
                    ))}
            </ul>
        );
    }

    return (
        <>
            <h3 className="title">Experience</h3>
            <div className="job-div">
                {experiences.map((experience, index) => (
                    <>
                        <div className='job' key={index}>
                            <p>
                                <span className="company-name">{experience.company}</span>{experience.company && experience.company.length ? ", " : ""}
                                <span className="company-location">{experience.location}</span>
                            </p>
                            <p id="date">
                                <span className="start-date">{experience.startDate}</span> {experience.startDate && experience.startDate.length ? " - " : ""}
                                <span className="end-date">{experience.endDate}</span>
                            </p>
                        </div>
                        <h2 className="job-title">{experience.title.length ? experience.title : ""}</h2>
                        <div className='job-description'>
                            <BulletPoints text={experience.jobDescription}></BulletPoints>
                        </div>
                    </>
                ))}
            </div>

        </>
    )
}



