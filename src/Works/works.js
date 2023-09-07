import React from 'react'
import './works.css'
import Portfolio1 from '../assets/portfolio-1.jpg';
import Portfolio2 from '../assets/portfolio-2.jpg';
import Portfolio3 from '../assets/portfolio-3.jpg';
import Portfolio4 from '../assets/portfolio-4.jpg';
import Portfolio5 from '../assets/portfolio-5.jpg';
import Portfolio6 from '../assets/portfolio-6.jpg';
import Portfolio7 from '../assets/portfolio-7.jpg';
import Portfolio8 from '../assets/portfolio-8.jpg';


const Works = () => {
    return(
        <section id ='works'>
            <h2 className='worksTitle'> My Portfolio </h2>
            <span className='worksDesc'> I am an enthusiastic student of the Mechatronics Engineering career with a passion for innovation and problem-solving. My academic background in mechatronics engineering has provided me with a strong foundation in interdisciplinary areas spanning mechanics, electronics, and computing. </span>
            <div className='worksImgs'>
                <img src={ Portfolio1 } alt='' className='worksImg'/>
                <img src={ Portfolio2 } alt='' className='worksImg'/>
                <img src={ Portfolio3 } alt='' className='worksImg'/>
                <img src={ Portfolio4} alt='' className='worksImg'/>
                <img src={Portfolio5} alt='' className='worksImg'/>
                <img src={Portfolio6} alt='' className='worksImg'/>
                <img src={Portfolio7} alt='' className='worksImg'/>
                <img src={Portfolio8} alt='' className='worksImg'/>
            </div>
            <button className='workBtn'> See More</button>
        </section>
    );
}

export default Works