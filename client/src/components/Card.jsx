import '../assets/styles/Card.scss';
import ResumePreview from './ResumePreview.jsx';
import { PropTypes } from 'prop-types';

function Card({ title, resumeSrc, description }) {
    return (
        <div className='card card--light'>
            <ResumePreview resumeSrc={resumeSrc} title={title} />
            <h3 className='card__title'>{title}</h3>
            <p className='card__description'>{description}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    resumeSrc: PropTypes.string.isRequired,
    description: PropTypes.string
};

Card.defaultProps = {
    description: ''
};

export default Card;