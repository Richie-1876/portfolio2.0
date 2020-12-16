import React from 'react'

const AboutMe = () => {
    const about = String.raw`
   ===================================================   
      ____       __                          __    
     /    \     |  |                        |  |   
    /  /\  \    |  |                        |  |__ 
   /  /__\  \   |  |_____  ______  __    __ |   __|
  /   ____   \  |    __  \|  __  ||  |  |  ||  |   
 /  /      \  \ |   |__| || |__| ||  |__|  ||  |__ 
/__/        \__\|________/|______||________||_____|

===================================================
`
    return (
        <section id='about-me'>
            <div className='section-header'>
            <pre >
                {about}
            </pre>
            </div>
            <p>My name is Richard Wright. I am a passionate software engineer, who loves to solve complex problems with elegant, efficient solutions. I have experience, as a user, of systems throughout my career in the banking industry, and I feel this gives me an insight into what makes a program work well for the user. I am determined, goal orientated and confident I can make a difference with the technical, problem solving and programming skills I have learned and continue to learn.</p>
            
        </section>
    )
}

export default AboutMe;