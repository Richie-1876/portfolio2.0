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
            <div id='projects-container'>
            <div class="project">
                <h2>Pedal Board App</h2>
                <a href="https://pedal-board.herokuapp.com/"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/vNE6tfE.png"alt="Artist"/></a>
                <span>Click Image to visit live site</span>
                <p>Community Pedal Board app built using React, Bootstrap, Flexbox, Javascript, postgresQL, Python, and Django. Many to many relationship between models.</p>
            </div>

            <div class="project">
                <h2>Rain Dogs Society</h2>
                <a href="http://www.raindogssociety.com/"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/nVgQuar.png"alt="Homepage"/></a>
                <span>Click Image to visit live site</span>
                <p>Homepage site created for a small business in Glasgow. Links to booking app and social media pages. Built with HTML, CSS, Bootstrap, flexbox and javaScript.</p>
            </div>

            <div class="project">
                <h2>Ecommerce App</h2>
                <a href="https://react-ecommerce-demo-app.herokuapp.com/"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/tPT5xYK.png"alt="Cards"/></a>
                <span>Click Image to visit live site</span>
                <p>Ecommerce App built using React, Hooks, GraphQl, ContextAPI, stripe for payment integration, and a Firebase DB for Auth and storage.</p>
            </div>

            <div class="project">
                <h2>Higher/Lower App</h2>
                <a href="https://richie-1876.github.io/project_1/higher_lower_app/#"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/mPmd8sO.png"alt="Cards"/></a>
                <span>Click Image to visit live site</span>
                <p>Higher or lower card game built with the use of a card API through an AJAX request, using HTML, CSS, jQuery and Javascript.</p>
            </div>

            <div class="project">
                <h2>My Recipes App</h2>
                <a href="https://rwright-express-mongo-example.herokuapp.com/recipes"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/f4nubjY.png"alt="Recipes"/></a>
                <span>Click Image to visit live site</span>
                <p>Community recipe app using Javascript, MongoDB, Mongoose, Express and EJS.</p>
            </div>

            <div class="project">
                <h2>Cheers App</h2>
                <a href="https://cheers-frontend.herokuapp.com/"target="_blank" rel='noreferrer'><img src="https://i.imgur.com/BJs0qpO.png"alt="Beers"/></a>
                <span>Click Image to visit live site</span>
                <p>Community Beer app using React, Bootstrap, MongoDB, Mongoose, Express, Javascript and Flexbox. Group project using Github and Trello to manage workflow.</p>
            </div>



            </div>

        </section>
    )
}

export default Projects