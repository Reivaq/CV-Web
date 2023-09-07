import React from 'react'
import './skills.css';
import UIDesign from '../assets/ui-design.png'
import WebDesign from '../assets/website-design.jpg'
import AppDesign from '../assets/app-design.jpg'
import AppDesign_1 from '../assets/app-design-1.png'


const Skills = () => {
    return(
        <section id= 'skills'>
            <span className='skillTitle'> What I do </span>
            <span className='skillDesc'> I am an enthusiastic student of the Mechatronics Engineering career with a passion for innovation and problem-solving. My academic background in mechatronics engineering has provided me with a strong foundation in interdisciplinary areas spanning mechanics, electronics, and computing.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={ UIDesign} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Designer</h2>
                        <p>As a web designer, I combine my background in mechatronic engineering with a passion for creativity and usability. My focus in web design is on creating engaging and functional user experiences.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src= { WebDesign } alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Electronic Circuit Design</h2>
                        <p>My experience in electronic circuit design ranges from embedded control systems to power electronics, and is based on creating innovative and efficient solutions for a variety of applications.</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={ AppDesign } alt='skillBar' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Mechanical Systems Analysis</h2>
                        <p>As a mechatronics engineer, I have a strong background and experience in the analysis of complex mechanical systems. My focus in this specialty is on understanding and optimizing mechanical components and systems to ensure their safe, efficient, and reliable operation.</p>
                    </div>
                 </div>
                <div className='skillBar'>
                    <img src={ AppDesign_1 } alt='skillBar' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Systems Control</h2>
                        <p>As a mechatronics engineer, my background in control systems is based on the application of advanced control and automation principles with the goal of optimizing the performance of complex systems. My approach is focused on the implementation of control strategies and algorithms that allow monitoring, regulation and continuous improvement of highly integrated mechatronic systems. Throughout my professional career, I have tackled multidisciplinary challenges that require a deep understanding of the interaction between mechanical, electronic, and software components.</p>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Skills;
