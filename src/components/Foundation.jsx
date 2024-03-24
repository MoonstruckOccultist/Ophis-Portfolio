import { useState } from 'react';
import AboutMePage from '../pages/AboutMePage'
import Navigation from './Navigation';
import Portfolio from '../pages/Portfolio';
import Contact from './Forms/Contact';

export default function Foundation() {
    const [page, setPage] = useState('AboutMePage')

    const switchPage = () => {
        switch (page) {
            case 'AboutMePage':
                return <AboutMePage />;
                break;
            case 'Portfolio':
                return <Portfolio />;
                break;
            case 'Contact':
                return <Contact />;
                break;
            // case 'Resume':
            //     // return < />;
            //     break;

            default:
                return <AboutMePage />;
                break;
        }
    };

    const pageChangeHandler = (p) => setPage(p)

    return (
        <div>
            <Navigation page={page} pageChangeHandler={pageChangeHandler} />
            <main>{switchPage()}</main>
        </div>
    )
}