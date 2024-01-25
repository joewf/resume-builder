// import { useState } from 'react'
import GeneralInformation from './components/EditResume/EditGeneralInformation'
import Summary from './components/EditResume/EditSummary'
import Experience from './components/EditResume/EditExperience'
import Skills from './components/EditResume/EditSkills'
import Education from './components/EditResume/EditEducation'
import ResumeTemplate from './components/Resume/ResumeTemplate'
import ResumeHeader from './components/Resume/ResumeGeneralInformation'
import ResumeSummary from './components/Resume/ResumeSummary'
import ResumeExperience from './components/Resume/ResumeExperience'
import ResumeSkills from './components/Resume/ResumeSkills'
import ResumeEducation from './components/Resume/ResumeEducation'

import { useState } from 'react'

import './Styles/sections.css'
import './Styles/resume-template.css'
import './app.css'


function App() {
  const [name, setName] = useState("");
  const handleNameInfoChange = (newName) => {
    setName(newName);
  }

  const [email, setEmail] = useState("");
  const handleEmailInfoChange = (newEmail) => {
    setEmail(newEmail);
  }

  const [phone, setPhone] = useState("");
  const handlePhoneInfoChange = (newPhone) => {
    setPhone(newPhone);
  }

  const [github, setGithub] = useState("");
  const handleGithubInfoChange = (newGithub) => {
    setGithub(newGithub);
  }

  const [website, setWebsite] = useState("");
  const handleWebsiteInfoChange = (newWebsite) => {
    setWebsite(newWebsite);
  }

  // Set Experience credentials
  const [experiences, setExperiences] = useState([]);
  const addExperience = (experience) => {
    setExperiences([...experiences, experience]);
  };

  const handleExperienceEdit = (index, newExperience) => {
    const updateExperiences = [...experiences];
    updateExperiences[index] = newExperience;
    setExperiences(updateExperiences);
  }

  const handleExperienceDeletion = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1); // Delete experience at index and number of deletion
    setExperiences(updatedExperiences);
  }

  // Set summary
  const [summary, setSummary] = useState("");
  const handleSummaryChange = (newSummary) => {
    setSummary(newSummary);
  }

  // Set skills
  const [skills, setSkills] = useState([]);
  const handleSkillsChange = (newSkill) => {
    setSkills([...skills, newSkill]);
  }

  const handleSkillDelete = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  }

  const handleSkillEdit = (index, newSkill) => {
    const updatedSkills = [...skills]
    updatedSkills[index] = newSkill;
    setSkills(updatedSkills);
  }

  // Set education credentials
  const [school, setSchool] = useState("");
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  }

  const [degree, setDegree] = useState("");
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
  }

  const [location, setLocation] = useState("");
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  }

  return (
    <div className='app-body'>
      <div className='app-div'>
        <GeneralInformation
          onGeneralInfoChange={handleNameInfoChange}
          onGeneralPhoneChange={handlePhoneInfoChange}
          onGeneralEmailChange={handleEmailInfoChange}
          onGeneralGithubChange={handleGithubInfoChange}
          onGeneralWebsiteChange={handleWebsiteInfoChange} />
        <Summary
          onSummaryChange={handleSummaryChange}
          currentSummary={summary} />
        <Experience
          onAddExperience={addExperience}
          onEditExperience={handleExperienceEdit}
          onDeleteExperience={handleExperienceDeletion}
        />
        <Skills
          OnSkillChange={handleSkillsChange}
          onDeleteSkill={handleSkillDelete}
          onSkillEdit={handleSkillEdit} />
        <Education
          onGeneralSchoolChange={handleSchoolChange}
          onGeneralDegreeChange={handleDegreeChange}
          onGeneralLocationChange={handleLocationChange}
        />
      </div>
      <div className='app-div'>
        <ResumeTemplate
          header={<ResumeHeader
            name={name}
            phone={phone}
            website={website}
            email={email}
            github={github}
          />}
          summary={<ResumeSummary summary={summary} />}
          experience={<ResumeExperience
            experiences={experiences}
          />}
          skills={<ResumeSkills skills={skills} />}
          education={<ResumeEducation
            school={school}
            degree={degree}
            location={location} />}
        />
      </div>
    </div>
  )
}

export default App
