export default function PortfolioCard ({ imageSrc, altText, websiteLink, githubLink, languages }) {
    return (
        <li className="card cusCard">
            <img src={imageSrc} alt={altText} className='card-img' />
            <div className='card-img-overlay'>
                <a href={websiteLink}>
                    Website
                </a>
                <a href={githubLink}>
                    <img src={GithubMark} alt="GitHub Mark" className='githubMark' />
                </a>
                <p>Languages: {languages}</p>
            </div>
        </li>
    );
}