export default function Navigation({ page, pageChangeHandler }) {
    return (
        <ul className="nav nav-tabs cusNav">
            <li className="nav-item">
                <a href="#AboutMePage"
                    onClick={() => pageChangeHandler('AboutMePage')}
                    className={page === 'AboutMePage' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </a>
            </li>
            <li className="nav-item">
                <a href="#Portfolio"
                    onClick={() => pageChangeHandler('Portfolio')}
                    className={page === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a href="#Contact"
                    onClick={() => pageChangeHandler('Contact')}
                    className={page === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a href="#Resume"
                    onClick={() => pageChangeHandler('Resume')}
                    className={page === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}