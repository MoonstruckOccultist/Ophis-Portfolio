import { useState } from 'react';
import AboutMe from './pages/AboutMe'
import Navigation from './Navigation';

export default function Foundation() {
    const [page, setPage] = useState('AboutMe')

    const switchPage = () => {
        switch (page) {
            case 'AboutMe':
                return <AboutMe />;
                break;
            // case 'Portfolio':
            //     // return < />;
            //     break;
            // case 'Contact':
            //     // return < />;
            //     break;
            // case 'Resume':
            //     // return < />;
            //     break;

            default:
                return <AboutMe />;
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