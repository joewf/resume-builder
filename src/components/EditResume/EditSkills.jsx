import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Skill({ OnSkillChange, onDeleteSkill, onSkillEdit }) {
    const [newSkill, setNewSkill] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [isCollapse, setIsCollapse] = useState(false);
    const [addedSkills, setAddedSkills] = useState([]);
    const inputRef = useRef(null);

    const handleSkillChange = (e) => {
        setNewSkill(e.target.value);
    }

    const addSkill = () => {
        if (!newSkill) {
            alert("Please fill in all fields");
            return;
        }

        if (editIndex !== null) {
            // Editing an existing skill
            const updatedSkills = [...addedSkills];
            updatedSkills[editIndex] = newSkill;
            setAddedSkills(updatedSkills);
            onSkillEdit(editIndex, newSkill);
            setEditIndex(null);
        } else {
            // Adding a new skill
            OnSkillChange(newSkill);
            setAddedSkills((prevSkills) =>
                [...prevSkills, newSkill])
        }
        setNewSkill("");   // Clear the input field
        setIsActive(false);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addSkill();
        }
    }

    const toggleCollapse = function () {
        setIsCollapse(!isCollapse);
    }

    useEffect(() => {
        if (isActive && editIndex !== null) {
            const editSkill = addedSkills[editIndex];
            setNewSkill(editSkill || "");
        }

        if (isActive && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isActive, isCollapse]);

    const handleCancel = () => {
        setIsActive(false);
        setNewSkill("");
        setEditIndex(null); // Reset editIndex on cancel
    }

    const deleteSkill = (index) => {
        const updatedSkills = [...addedSkills];
        updatedSkills.splice(index, 1);
        setAddedSkills(updatedSkills);
        onDeleteSkill(index);
    }

    const editSkill = (index) => {
        setIsActive(true);
        setEditIndex(index);
    }

    return (
        <>
            <section className="edit-section">
                <h2>Skills
                    <span
                        onClick={toggleCollapse}
                        style={{ cursor: "pointer" }}>
                        {isCollapse ? '▾' : '▴'}
                    </span>
                </h2>
                {!isCollapse ? (
                    isActive ? (
                        <>
                            <div>
                                <input type="text"
                                    placeholder="List all your skills"
                                    value={newSkill} onChange={handleSkillChange}
                                    onKeyDown={handleKeyPress}
                                    ref={inputRef}
                                />
                            </div>
                            <button className="save-button" id="skill-save-button" onClick={addSkill}>Save</button>
                            <button className="cancel-button"
                                onClick={handleCancel}>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <div className="button-container">
                            <button className="add-button" onClick={() => setIsActive(true)}>
                                +Skill
                            </button>
                        </div>

                    )
                ) : null}

                {/* Display added skills with delete option */}
                <ul>
                    {addedSkills.map((skill, index) => (
                        <li key={index} className="li-delete">
                            <span className="skill-text">{skill.length > 15 ? skill.slice(0, 15) + "..." : skill}</span>
                            <div className="edit-delete-div">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="edit-icon"
                                    onClick={() => editSkill(index)}>
                                </FontAwesomeIcon>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => deleteSkill(index)}
                                    className="delete-icon">
                                </FontAwesomeIcon>
                            </div>

                        </li>
                    ))}
                </ul>

            </section>

        </>
    )
}