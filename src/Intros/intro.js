import React from 'react';
import './intro.css';
import bg from '../assets/image.png'
import btnImg from '../assets/hireme.png'

import { Link } from 'react-scroll';


const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello, </span>
                <span className='introText'> I'm <span className='introName'> Antonio </span> <br /> Mechatronics engineer </span>
                <p className='introPara'> I am an enthusiastic student of the Mechatronics Engineering career <br/> with a passion for innovation and problem-solving.<br/> My academic background in mechatronics engineering has provided me with a strong foundation <br/>in interdisciplinary areas spanning mechanics, electronics, and computing.</p>
                <Link><button className='btn'><img src= { btnImg } alt='Hire Me ' className='btnImg'/> Hire Me </button></Link>
            </div>
            <img src ={bg} alt= "Profile" className='bg'/>
        </section>
    )
}

export default Intro;