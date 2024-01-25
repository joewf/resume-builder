/* eslint-disable react/prop-types */
// import '../../Styles/resume-template.css'
// import PropTypes from 'prop-types'
// import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';


export default function ResumeTemplate({ header, summary, experience, skills, education }) {

    const handleDownload = () => {
        const resumeContent = document.getElementById('resume-content');
        const pdf = new jsPDF();
        pdf.addHTML(resumeContent, () => {
            pdf.save('resume.pdf');
        });
    };


    return (
        <>
            <div className="resume-template" id='resume-content'>
                <section className="header">
                    {header}
                </section>
                <hr />
                <section className="summary">
                    {summary}
                </section>
                <hr />
                <section className="experience">
                    {experience}
                </section>
                <hr />
                <section className="skills">
                    {skills}
                </section>
                <hr />
                <section className="education">
                    {education}
                </section>
            </div>
        </>


    );
}
