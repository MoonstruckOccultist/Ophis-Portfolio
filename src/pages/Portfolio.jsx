import CodingQuiz from '../assets/images/CodingQuiz.png'

import PortfolioCard from '../components/PortfolioCard';

const portfolioItems = [
    {
        key: 1,
        imageSrc: CodingQuiz,
        altText: "Screenshot of front page of a coding quiz website I designed styled after retro TV's font and blue screen",
        websiteLink: "https://moonstruckoccultist.github.io/CodingQuiz/",
        githubLink: "https://github.com/MoonstruckOccultist/CodingQuiz",
        languages: "React, HTML, CSS"
    },
];

export default function Portfolio() {
    return (
        <div>
            <h1>Portdolio</h1>
            <ul className='portUl'>
            {portfolioItems.map(item => (
                    <PortfolioCard
                        key={item.id}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        websiteLink={item.websiteLink}
                        githubLink={item.githubLink}
                        languages={item.languages}
                    />
                ))}
            </ul>
        </div>
    );
}