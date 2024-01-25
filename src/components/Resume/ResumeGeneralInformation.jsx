import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ResumeHeader({ name, phone, website, email, github }) {
    return (
        <>
            <h2 className="name"> {(name && name.length) ? name : "John Doe"}</h2>
            <div className="header-details">
                <p>
                    <FontAwesomeIcon icon={faMobileScreen} className='icon' />
                    {' '} {(phone) ? phone : " 111-111-1111"}
                </p>
                <p>|</p>
                <p>
                    <FontAwesomeIcon icon={faGlobe} className='icon' />
                    {' '} {website ? website : " www.john-doe-portfolio.com"}
                </p>
                <p>|</p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    {' '} {email ? email : " johndoe@gmail.com"}</p>
                <p>|</p>
                <p>
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                    {' '} {github ? github : " www.github.com/john-doe"}</p>
            </div>
        </>
    )
}