import React from 'react';
import '../styles/Intro.css'

function Intro() {
    return (
        <div className="Intro">
            <div className="Prompt">
                <p>
                    Ever wondered if you are the life of the party? Or if you prefer minimally stimulating environments? Or a little bit of both?!
                </p>
                <button>
                    Take the test!
                </button>
            </div>
            <div className="Definition">
                <div className="card">
                    1
                </div>
                <div className="card">
                    2
                </div>
                <div className="card">
                    3
                </div>
            </div>
        </div>
    )
}

export default Intro;