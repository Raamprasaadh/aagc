import React from 'react'

function About() {
    return (
        <div className="details">
        <p>
        Our firm has been started by Mr S. Jayaraman, in the year 2005 and succesfully helped more than 1000 investors to achieve their financial dreams.
        </p>

        <p>\below are the key members in the firm</p>
        <div className="personCard">
            <img className="profilePic" src={process.env.PUBLIC_URL+"/assets/images/chairman.jpg"} alt="chairman" />
            <div className="personDesc">
                Meet our chairman Mr S.Jayaraman, he is the secratary of the business wing of AIADMk party of our district Mayiladuthurai,
                also he is the chairman of the lions club of our town sirkali.

                he has won the best businessman award on 2010, from rotaract club sirkali 
            </div>
        </div>
        <div className="personCard">
            <img className="profilePic" src={process.env.PUBLIC_URL+"/assets/images/vice-president.jpg"} alt="vice president" />
            <div className="personDesc">
                Meet our Vice president Mr J.Nirmal Kumar B.Arch, he is the CEO of DRONA Architects, and vice president of the Annai Abirami groups,

                He has represented the state basketball team and won several trophies in district level 
            </div>
        </div>
        </div>
            /**
             * should have detail about founder history, achievements and awards if available
             */
    )
}

export default About
