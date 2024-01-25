import { useEffect, useRef, useState } from "react";

function Education({ onGeneralSchoolChange, onGeneralDegreeChange, onGeneralLocationChange }) {

    // Handle changes on cancel input values
    const [originalValues, setOriginalValues] = useState({
        school: '',
        degree: '',
        location: ''
    });

    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [location, setLocation] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isCollapse, setIsCollapse] = useState(false);
    const [isEditActive, setIsEditActive] = useState(false);
    const schoolInputRef = useRef(null);

    const handleSchoolChange = (e) => {
        setSchool(e.target.value);
    }

    const handleDegreeChange = (e) => {
        setDegree(e.target.value);
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!school || !degree || !location) {
            alert("Please fill in all fields");
            return;
        }
        onGeneralSchoolChange(school);
        onGeneralDegreeChange(degree);
        onGeneralLocationChange(location);
        setIsActive(false);
        setIsEdit(true)
        setIsEditActive(true);
        setOriginalValues({
            school,
            degree,
            location
        });
    }

    const handleEdit = () => {
        setTimeout(() => {
            setIsEdit(false);
            setIsActive(true);
        }, 100);

    }

    const toggleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    const handleCancel = () => {
        if (isEditActive) {
            setIsEdit(true);
            setIsActive(false);
            setSchool(originalValues.school); // Set previous school values
            setDegree(originalValues.degree);
            setLocation(originalValues.location);

        } else {
            setSchool("");
            setDegree("");
            setLocation("");
            setIsActive(false);
        }
    }

    useEffect(() => {
        if (schoolInputRef.current) {
            schoolInputRef.current.focus();
        }
    }, [isActive, isCollapse]);

    return (
        <>
            <section className="edit-section">
                <h2>Education
                    <span
                        onClick={toggleCollapse}
                        style={{ cursor: "pointer" }}>
                        {isCollapse ? '▾' : '▴'}
                    </span>
                </h2>
                {!isCollapse && (
                    isEdit ? (
                        <button className="edit-button" onClick={handleEdit}>
                            Edit
                        </button>
                    ) : isActive ? (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h3>School</h3>
                                <input type="text"
                                    placeholder="School Name"
                                    value={school}
                                    onChange={handleSchoolChange}
                                    ref={schoolInputRef} />
                            </div>
                            <div>
                                <h3>Degree</h3>
                                <input type="text" placeholder="Field of Study" value={degree} onChange={handleDegreeChange} />
                            </div>
                            <div>
                                <h3>Location</h3>
                                <input type="text" placeholder="State, City" value={location} onChange={handleLocationChange} />
                            </div>
                            <button type="submit" className="save-button" id="education-save-button">Save</button>
                            <button className="cancel-button"
                                onClick={handleCancel}>
                                Cancel
                            </button>
                        </form>
                    ) : (
                        <button className="add-button" id="education-add-button"
                            onClick={() => {
                                setTimeout(() => {
                                    setIsActive(true)
                                }, 100);
                            }}>
                            +Education
                        </button>
                    )
                )}

            </section>
        </>
    )
}

export default Education
