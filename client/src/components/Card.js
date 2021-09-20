import '../assets/styles/Card.scss';
import ResumePreview from './ResumePreview';
import { PropTypes } from 'prop-types';

const Card = function ({ title, resumeSrc, description }) {
    return (
        <div className='card'>
            <h3 className='card__title'>{title}</h3>
            <ResumePreview resumeSrc={resumeSrc} title={title} />
            <p className='card__description'>{description}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    resumeSrc: PropTypes.string,
    description: PropTypes.string
};

export default Card;