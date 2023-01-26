import React from 'react'
import './experience.css'
import{AiFillHtml5} from 'react-icons/ai'
import{DiCss3} from 'react-icons/di'
import{IoLogoJavascript} from 'react-icons/io'
import{FaBootstrap} from 'react-icons/fa'
import{BsWordpress} from 'react-icons/bs'
import{FaReact} from 'react-icons/fa'
import{FaNodeJs} from 'react-icons/fa'
import{DiMysql} from 'react-icons/di'
import{FaPhp} from 'react-icons/fa'
import{FaPython} from 'react-icons/fa'
 


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>ประสบการณ์ของฉัน</h2>
      <div className="container experience__container">
        <div className="experience__frontend">

          {/* FROND END */}
            <h3>Frontend Developer</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <AiFillHtml5 className='experience__details-icon' />
               <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
               </div>
              </article>
              <article className='experience__details'>
                <DiCss3 className='experience__details-icon'/>
               <div>
                <h4>CSS</h4>
                <small className='text-light'>Experience</small>
               </div>
              </article>
              <article className='experience__details'>
                <IoLogoJavascript className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experience</small>
              </div>
              </article>
              <article className='experience__details'>
                <FaBootstrap className='experience__details-icon'/>
               <div>
                <h4>BOOTSTRAPS</h4>
                <small className='text-light'>Experience</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsWordpress className='experience__details-icon'/>
                <div>
                 <h4>WORDPRESS</h4>
                 <small className='text-light'>Experience</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaReact className='experience__details-icon'/>
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Basic</small>
              </div>
              </article>
            </div>
        </div>

        {/* Backend */}
        <div className="experience__backend">
        <h3>Backend Developer</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <FaNodeJs className='experience__details-icon'/>
               <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Basic</small>
               </div>
              </article>
              <article className='experience__details'>
                <FaPhp className='experience__details-icon'/>
               <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
               </div>
              </article>
              <article className='experience__details'>
                <DiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
              </article>
              <article className='experience__details'>
                <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
              </article>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Experience