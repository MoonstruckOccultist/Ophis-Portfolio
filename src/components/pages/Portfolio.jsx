import CodingQuiz from '../../assets/images/CodingQuiz.png'
import GithubMark from '../../assets/images/github-mark.svg'

export default function Portfolio() {
    return (
        <div>
            <h1>Portdolio</h1>
            <ul>
                <li className="card cusCard">

                    <img src={CodingQuiz} alt="Screenshot of frontpage of a coding quiz website i designed styled after retro TV's font and blue screen" className='card-img' />
                    <div className='card-img-overlay'>
                        <a href="https://moonstruckoccultist.github.io/CodingQuiz/">
                            Website
                        </a>
                        <a href="https://github.com/MoonstruckOccultist/CodingQuiz">
                            <img src={GithubMark} alt="GitHub Mark" className='githubMark' />
                        </a>
                    </div>

                </li>
            </ul>
        </div>
    );
}