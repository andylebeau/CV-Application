import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PersonalDetailsPreview({ fullname, email, phone, address }) {
  return (
    <div className="resume-header">
      <h1>{fullname}</h1>
      <div className="contact-info">
        {email && (
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span> &nbsp;{email}</span>
          </div>
        )}
        {phone && (
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span> &nbsp;{phone}</span>
          </div>
        )}
        {address && (
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span> &nbsp;{address}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalDetailsPreview;
