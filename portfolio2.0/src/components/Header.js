import React from 'react';
import Typical from 'react-typical'

const Header = () => {
    var title = String.raw`
 ============================================================   
 ____     __          __                               __
|  _  \  |__|        |  |                             |  |
| | \  \  __   ____  |  |____   ________  ______ _____|  |
| |_/  / |  | /  _ \ |   __  \ /   __   ||   __//   __   |
|  _  /  |  | | | \/ |  |  |  ||  |  |  ||  |   |  |  |  |
| | \ \  |  | | |_/\ |  |  |  ||  |__|  ||  |   |  |__|  |
|_|  \_\ |__| \____/ |__|  |__|\______,_||__|   |________|

––           __       __           __        __    
\  \        /  /     |__|         |  |      |  |   
 \  \      /  /______ __  ______  |  |_____ |  |__ 
  \  \    /  /|   __/|  |/   _   ||   __   \|   __|
   \  \/\/  / |  |   |  ||  / \  ||  |  |  ||  |   
    \      /  |  |   |  ||  \_/  ||  |  |  ||  |__ 
     \_/\_/   |__|   |__|\____,  ||__|  |__|\____| 
                          ____|  |                  
                         |______/                   
===========================================================
                         `;

        return (
        <header>
             <img id="profile_pic"src="https://i.imgur.com/pm1X1BP.png?1" alt="Profile pic"/>
             <div className='name'>
                <pre>
                    {title}
                </pre>
             </div> 
            <p id="describe">I am a{' '}   
                <Typical loop={1} wrapper= 'b' steps={['Web Developer', 1000, 'Designer', 1000, 'Software Engineer.', 1000]}/></p>
        </header>
        )
}


export default Header;