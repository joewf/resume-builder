// import { useState } from "react"

import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Summary({ onSummaryChange, currentSummary }) {
    const [summary, setSummary] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [isEditActive, setIsEditActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isCollapse, setIsCollapse] = useState(false);
    const inputRef = useRef(null);
    const [isRendering, setIsRendering] = useState(false);

    // Delay 100 milliseconds when click a button
    const AddButtonTimeDelay = () => {
        setIsRendering(true);
        setTimeout(() => {
            setIsRendering(false);
            setIsActive(true);
        }, 100);
    }

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    }

    const saveSummary = () => {
        if (!summary) {
            alert("Please fill in all fields");
            return;
        }
        setTimeout(() => {
            onSummaryChange(summary);
            setSummary("");     // Clear current state for the new state
            setIsActive(false);
            setIsEdit(true);
            setIsEditActive(true);
        }, 100);

    }

    // Edit current text
    const handleEditChange = () => {
        setTimeout(() => {
            setIsActive(true);
            setIsEdit(false);
            setSummary(currentSummary);
        }, 100);
    }

    const toggleCollapse = () => {
        setIsCollapse(!isCollapse);
    }

    const handleKeyPress = function (e) {
        if (e.key === "Enter") {
            saveSummary();
        }
    }

    const handleCancel = () => {
        if (isEditActive) {
            setTimeout(() => {
                setSummary(summary);
                setIsEdit(true);
                setIsActive(false);
            }, 100);
        } else {
            setTimeout(() => {
                setSummary("");
                setIsActive(false);
            }, 100);
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCollapse, isActive])

    return (
        <>
            <section className="edit-section">
                <h2>Summary
                    <span
                        onClick={toggleCollapse}
                        style={{ cursor: "pointer" }}>
                        {isCollapse ? "▾" : "▴"}</span>
                </h2>
                {!isCollapse ? (
                    isEdit ? (
                        <button className="edit-button" onClick={() => handleEditChange()}>
                            Edit
                        </button>
                    ) : isActive ? (
                        <>
                            <div id="textarea-container">
                                <div>
                                    <textarea
                                        name="summary"
                                        id="summary"
                                        cols="35"
                                        rows="10"
                                        onChange={handleSummaryChange}
                                        value={summary}
                                        onKeyDown={handleKeyPress}
                                        ref={inputRef}
                                    />
                                </div>
                            </div>
                            <button className="save-button" id="summary-save-button" onClick={saveSummary}>
                                Save
                            </button>
                            <button
                                className="cancel-button"
                                onClick={handleCancel}
                            >Cancel
                            </button>
                        </>
                    ) : (
                        <div className="button-container">
                            <button className="add-button" onClick={(AddButtonTimeDelay)} >
                                +Summary
                            </button>
                        </div>
                    )
                ) : null}
            </section>
        </>
    )
}
