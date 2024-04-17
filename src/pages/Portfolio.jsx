import CodingQuiz from '../assets/images/CodingQuiz.png';
import RockySite from '../assets/images/RMNPVG.png';

import PortfolioCard from '../components/PortfolioCard';

const portfolioItems = [
    {
        key: 1,
        imageSrc: CodingQuiz,
        altText: "Screenshot of front page of a coding quiz website I designed styled after retro TV's font and blue screen",
        websiteLink: "https://moonstruckoccultist.github.io/CodingQuiz/",
        githubLink: "https://github.com/MoonstruckOccultist/CodingQuiz",
        languages: "HTML, CSS, JS"
    },
    {
        key: 2,
        imageSrc: RockySite,
        altText: "Screenshot of front page of a rouckmountain park trail guide website I designed styled with green and tan and an image of a valey in colorado with a tan overlay",
        websiteLink: "https://rockymountainnationalparkvisitorsguide.onrender.com",
        githubLink: "https://github.com/alexlofton/rockymountainnationalparkvisitorsguide",
        languages: "MERN stack"
    }
];

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <ul className='portUl row'>
            {portfolioItems.map(item => (
                    <PortfolioCard
                        key={item.key}
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