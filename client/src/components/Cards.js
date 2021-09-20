import '../assets/styles/Cards.scss';
import Card from './Card';
import { useState } from 'react';

const Cards = function () {
    const [resumes, setResumes] = useState(
        [
            {
                key: 1,
                title: 'Test 1',
                resumeSrc: 'https://nodejs.org/en/',
                description: 'Testing 1'
            },
            {
                key: 2,
                title: 'Test 2',
                resumeSrc: 'https://nodejs.org/en/',
                description: 'Testing 2'
            },
            {
                key: 3,
                title: 'Test 3',
                resumeSrc: 'https://nodejs.org/en/',
                description: 'Testing 3'
            },
            {
                key: 4,
                title: 'Test 4',
                resumeSrc: 'https://nodejs.org/en/',
                description: 'Testing 4'
            }
        ]
    );
    return (
        <section className='cards' id='resumes'>
            <h1 className='cards__title'>My Resumes</h1>
            <div className='cards__container'>
                {
                    resumes.map(resume => {
                        return <Card className='card'
                            key={resume.key}
                            title={resume.title}
                            resumeSrc={resume.resumeSrc}
                            description={resume.description}
                        />
                    })
                }
            </div>
        </section>
    );
};

export default Cards;