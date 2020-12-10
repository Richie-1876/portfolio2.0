import React from 'react'

const Projects = () => {
    const projects = String.raw`
    ======================================================
     _______                 __               __          
    |   __  \               |__|             |  |         
    |  |__| | ______  ____   __  _____  ____ |  |__  ____ 
    |   ___/ |   __/ / __ \ |  ||  0  |/  _ \|   __|/  __|
    |  |     |  |   | |  | ||  ||   _/ | | \/|  |   \__ \ 
    |  |     |  |   | |__| ||  ||  |__ | |_/\|  |__  __| |
    |__|     |__|    \____/ |  | \___/ \____/|_____||____/
                         __/   |                          
                         \____/                           
    ======================================================
                         `
    return (
        <section id='projects'> 
            <div className='section-header'>
            <pre >
                {projects}
            </pre>
            </div>

        </section>
    )
}

export default Projects