import Logo from '../assets/Logo.png'
import Project from '../assets/project.svg'
import Dasdboard from '../assets/dashboard.svg'
import Team from '../assets/team.svg'
import Ana from '../assets/analys.svg'
import Messegae from '../assets/messget.svg'
import integrations from '../assets/setting.svg'
import update from '../assets/update.png'
import hoi from '../assets/hoi.svg'
import ring from '../assets/ring.svg'
export default function RootPage(){
    return(
        <>
        <div className="container">
            <div className="header">
                <h2>
                    Dashboard
                </h2>
                <div>
                    <input type="text" />
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/xc3zlre9p62tochmtcbl.png" alt="ring" />
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/qyqyilcf6zjdjrl66xj5.png" alt="hoi" />
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/vcl1lfq9xiipe0kead1j.png" alt="" />
                </div>
            </div>
            <div className="menu">
                <div className="logo">
                    <img src= {Logo}  alt="logo" /> 
                    <h2>Logo</h2>   
                </div>    
                <button className='btn'>
                    <img src={Dasdboard} alt="dashboard"/>
                    <h2>Dashboard</h2>
                </button>
                <button className='btn-unactive'>
                    <img src={Project} alt="project"/>
                    <h2>Project</h2>
                </button>
                <button className='btn-unactive'>
                    <img src={Team} alt="team"/>
                    <h2>Team</h2>
                </button>
                <button className='btn-unactive'>
                    <img src={Ana} alt="analys"/>
                    <h2>Analytics</h2>
                </button>
                <button className='btn-unactive'>
                    <img src={Messegae} alt="message"/>
                    <h2>Messages</h2>
                </button>
                <button className='btn-unactive'>
                    <img src={integrations} alt="integrations"/>
                    <h2>Integrations</h2>
                </button>
                <div className="update">
                    <img src={update} alt="update" />
                    <h2>V2.0 is available</h2>
                    <button className='btn-try'>
                        Try now
                    </button>
                </div>
            </div>
            <div className="content"><h3>Lorem Ipsum</h3><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p></div>
            <div className="overview"><h4>overview</h4></div>
        </div>
        </>)
}