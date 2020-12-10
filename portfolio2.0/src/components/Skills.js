import React from 'react'
import Typical from 'react-typical'

const Skills = () => {
    const skills = String.raw`
  ============================================
     _____  __       __  __      __           
    /  ___\|  | __  |__||  |    |  |          
    \  \   |  |/  /  __ |  |    |  |     ____ 
      \  \ |     /  |  ||  |    |  |    /  __|
       |  ||     \  |  ||  |    |  |    \__ \ 
  ____/  / |  |\  \ |  ||  |___ |  |___  __| |
  \_____/  |__| \__\|__||______||______||____/
  
  =============================================
    `
    return (
        <section id='skills'>
            <div className='section-header'>
            <pre >
                {skills}
            </pre>
            </div>
            <p>HTML | CSS | Command Line | Javascript | jQuery | Express.js | SQL | MongoDB | Ruby on Rails | NodeJS | React | Git | Github | AJAX | Python | Django</p>
        </section>
    )
}

export default Skills;