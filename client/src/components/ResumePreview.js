import '../assets/styles/ResumePreview.scss';
import { PropTypes } from 'prop-types';

const ResumePreview = function ({ resumeSrc, title }) {
    return (
        <div className='resume-preview'>
            <a className='resume-preview__link' href={resumeSrc}>{title}</a>
            <iframe className='resume-preview__preview' src={resumeSrc} title={title} scrolling='no' loading='lazy'></iframe>
        </div>
    );
};

ResumePreview.propTypes = {
    title: PropTypes.string,
    resumeSrc: PropTypes.string,
};

export default ResumePreview;