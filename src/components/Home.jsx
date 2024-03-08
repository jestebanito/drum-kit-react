import React from 'react';
import Drumkit from './Drumkit';

function Home() {
    return (
        <div>
            <section id='about'>
                <Drumkit />
            </section>
            <footer>
                <p className="copyright">&copy; 2024 Handcrafted by Josh Esteban</p>
            </footer>
        </div>
    );
}

export default Home;