import GithubWhiteMark from '../assets/images/github-mark-white.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <a href="https://github.com/MoonstruckOccultist">
                <img src={GithubWhiteMark} alt="Github Mark" />
            </a>
        </div>
    )
}