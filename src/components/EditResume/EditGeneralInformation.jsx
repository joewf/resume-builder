import { useState, useEffect, useRef } from "react";
function PersonalInfo({ onGeneralInfoChange, onGeneralEmailChange, onGeneralPhoneChange, onGeneralGithubChange, onGeneralWebsiteChange }) {

    const [isCollapse, setIsCollapse] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [github, setGithub] = useState("");
    const [website, setWebsite] = useState("");
    const fullNameInputRef = useRef(null);

    useEffect(() => {
        // Focus on the Full Name input when the component mounts
        if (fullNameInputRef.current) {
            fullNameInputRef.current.focus();
        }
    }, [isCollapse]);

    const handleNameChange = (e) => {
        onGeneralInfoChange(e.target.value);
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        onGeneralEmailChange(e.target.value);
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        onGeneralPhoneChange(e.target.value);
        setPhone(e.target.value);
    }

    const handleGithubChange = (e) => {
        onGeneralGithubChange(e.target.value);
        setGithub(e.target.value);
    }

    const handleWebsiteChange = (e) => {
        onGeneralWebsiteChange(e.target.value);
        setWebsite(e.target.value);
    }

    const toggleCollapse = () => {
        // Set isCollapse to true when is false
        // Set isCollapse to false when is true
        setIsCollapse(!isCollapse);
    }


    return (
        <>
            <section className="edit-section">
                <h2 >Personal Information <span onClick={toggleCollapse}
                    style={{ cursor: 'pointer' }}>{isCollapse ? '▾' : '▴'}
                </span></h2>
                {!isCollapse && (   // When is false, show the fields
                    <>
                        <div>
                            <h3>Full Name</h3>
                            <input
                                type="text"
                                className="full-name"
                                placeholder="Full Name"
                                value={name}
                                onChange={handleNameChange}
                                ref={fullNameInputRef}
                            />
                        </div>
                        <div>
                            <h3>Email</h3>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />

                        </div>
                        <div>
                            <h3>Phone</h3>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <div>
                            <h3>Github</h3>
                            <input
                                type="text"
                                placeholder="Github Link"
                                value={github}
                                onChange={handleGithubChange}
                            />
                        </div>
                        <div>
                            <h3>Website</h3>
                            <input
                                type="text"
                                placeholder="Personal Website"
                                value={website}
                                onChange={handleWebsiteChange} />
                        </div>

                    </>

                )}

            </section >

        </>
    )

}

export default PersonalInfo