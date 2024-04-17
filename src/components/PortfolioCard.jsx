import GithubMark from '../assets/images/github-mark-white.svg'

export default function PortfolioCard({ imageSrc, altText, websiteLink, githubLink, languages }) {

    const GHubHandler = (event) => {
        event.preventDefault();
        window.location.href = githubLink;
    };

    return (
        <li className="card cusCard col-5">
            <a href={websiteLink} className='CCLink'>
                <img src={imageSrc} alt={altText} className='card-img cusCImg' />
                <div className='card-img-overlay cusCOver'>
                    <div className='cusBar'>
                        {/* <a href={websiteLink}>
                    Website
                </a> */}
                        <div href="#" onClick={GHubHandler}>
                            <img src={GithubMark} alt="GitHub Mark" className='githubMark' />
                        </div>
                        <p className='portLang'>Languages: {languages}</p>
                    </div>
                </div>
            </a>
        </li>
    );
}