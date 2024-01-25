import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Experience({
    onAddExperience,
    onEditExperience,
    onDeleteExperience
}) {

    const [experiences, setExperiences] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [isCollapse, setIsCollapse] = useState(false);
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [title, setTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const companyInputRef = useRef(null);
    const [editIndex, setEditIndex] = useState(null);

    const handleCompany = (e) => {
        setCompany(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleCompanyStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleCompanyEndDate = (e) => {
        setEndDate(e.target.value);
    }
    const handleCompanyJobTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleCompanyJobDescription = (e) => {
        setJobDescription(e.target.value);
    }

    const saveExperience = () => {
        // checkForEmptyFields();
        if (!company || !location || !startDate || !endDate || !title || !jobDescription) {
            alert("Please fill in all fields");
            return;
        }

        const newExperience = {
            company,
            location,
            startDate,
            endDate,
            title,
            jobDescription: jobDescription,
        };

        if (editIndex != null) {
            const updatedExperiences = [...experiences];
            updatedExperiences[editIndex] = newExperience;
            setExperiences(updatedExperiences);
            setEditIndex(null);
            onEditExperience(editIndex, newExperience);
        } else {
            setExperiences([...experiences, newExperience]);
            onAddExperience(newExperience);
        }
        // Clear the form fields
        setCompany("");
        setLocation("");
        setStartDate("");
        setEndDate("");
        setTitle("");
        setJobDescription("");
        setIsActive(false);
    }

    const toggleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    useEffect(() => {
        if (isActive && editIndex !== null) {
            const editExperience = experiences[editIndex];
            console.log(editExperience.jobDescription[editIndex]);
            setCompany(editExperience.company || "");
            setLocation(editExperience.location || "");
            setStartDate(editExperience.startDate || "");
            setEndDate(editExperience.endDate || "");
            setTitle(editExperience.title || "");
            setJobDescription(editExperience.jobDescription || "");
        }

        if (companyInputRef.current) {
            companyInputRef.current.focus();
        }
    }, [isActive, isCollapse, editIndex, experiences]);

    const handleCancel = () => {
        setCompany("");
        setLocation("");
        setStartDate("");
        setEndDate("");
        setTitle("");
        setJobDescription("");
        setIsActive(false);
    }

    const editExperience = (index) => {
        setIsActive(true);
        setEditIndex(index); // The company index to edit
    }

    const deleteExperience = (index) => {
        const updatedExperiences = [...experiences];
        updatedExperiences.splice(index, 1); // Delete experience
        setExperiences(updatedExperiences);
        onDeleteExperience(index);
    }

    return (
        <>
            <section className="edit-section">
                <h2>Experience
                    <span
                        onClick={toggleCollapse}
                        style={{ cursor: "pointer" }}>
                        {isCollapse ? "▾" : "▴"}
                    </span>
                </h2>
                {!isCollapse && (
                    isActive ? (
                        <div className="companies-list">
                            <div>
                                <h3>Company</h3>
                                <input type="text"
                                    placeholder="Company Name"
                                    onChange={handleCompany}
                                    value={company}
                                    ref={companyInputRef} />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <input type="text" placeholder="City, Country" onChange={handleLocation} value={location} />
                            </div>
                            <div>
                                <h3>Start Date</h3>
                                <input type="text" placeholder="MM-YYYY" onChange={handleCompanyStartDate} value={startDate} />
                            </div>
                            <div>
                                <h3>End Date</h3>
                                <input type="text" placeholder="MM-YYYY" onChange={handleCompanyEndDate} value={endDate} />
                            </div>
                            <div>
                                <h3>Title</h3>
                                <input type="text" placeholder="Position Title" onChange={handleCompanyJobTitle} value={title} />
                            </div>
                            <div>
                                <h3>Responsibilities</h3>
                                <textarea
                                    id="responsibilities-input"
                                    placeholder="Job Responsibilities (Bullet points)"
                                    cols="35"
                                    rows="10"
                                    value={jobDescription ? jobDescription : "• in bullet points"}
                                    onChange={handleCompanyJobDescription}>
                                </textarea>
                            </div>
                            <div>
                                <button
                                    className="save-button"
                                    id="experience-save-button"
                                    onClick={saveExperience}>
                                    Save
                                </button>
                                <button
                                    className="cancel-button"
                                    onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>

                    ) : (
                        <div className="button-container">
                            <button className="add-button" onClick={() => setIsActive(true)}>
                                +Experience
                            </button>

                        </div>

                    ))}
                {/*Display added experiences with delete option*/}
                <ul>
                    {experiences.map((experience, index) => (
                        <li key={index} className="li-delete">
                            <span className="skill-text">{experience.company.length > 15 ? experience.company.slice(0, 15) + "..." : experience.company}</span>
                            <div className="edit-delete-div">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="edit-icon"
                                    onClick={() => editExperience(index)}>
                                </FontAwesomeIcon>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="delete-icon"
                                    onClick={() => deleteExperience(index)}>
                                </FontAwesomeIcon>
                            </div>
                        </li>
                    ))}
                </ul>

            </section>



        </>
    )
}