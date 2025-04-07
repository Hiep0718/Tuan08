import Logo from '../assets/Logo.png'
import Project from '../assets/project.svg'
import Dasdboard from '../assets/dashboard.svg'
import Team from '../assets/team.svg'
import Ana from '../assets/analys.svg'
import Messegae from '../assets/messget.svg'
import integrations from '../assets/setting.svg'
import update from '../assets/update.png'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';


export default function RootPage(){
    DataTable.use(DT);
    const data = [
        {
          name: "Elizabeth Lee",
          company: "AvatarSystems",
          orderValue: "$359",
          orderDate: "10/07/2023",
          status: "New",
          avatar: "https://via.placeholder.com/36",
        },
        {
          name: "Carlos Garcia",
          company: "SmoozeShift",
          orderValue: "$747",
          orderDate: "24/07/2023",
          status: "New",
          avatar: "https://via.placeholder.com/36",
        },
        {
          name: "Elizabeth Bailey",
          company: "Prime Time Telecom",
          orderValue: "$564",
          orderDate: "08/08/2023",
          status: "In-progress",
          avatar: "https://via.placeholder.com/36",
        },
        {
          name: "Ryan Brown",
          company: "OmniTech Corporation",
          orderValue: "$541",
          orderDate: "31/08/2023",
          status: "In-progress",
          avatar: "https://via.placeholder.com/36",
        },
        {
          name: "Ryan Young",
          company: "DataStream Inc.",
          orderValue: "$769",
          orderDate: "01/05/2023",
          status: "Completed",
          avatar: "https://via.placeholder.com/36",
        },
        {
          name: "Hailey Adams",
          company: "FlowRush",
          orderValue: "$922",
          orderDate: "10/06/2023",
          status: "Completed",
          avatar: "https://via.placeholder.com/36",
        },
      ];
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
                    <img src= "https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/lbxyu1z0ly9wfntyndwy.png"  alt="logo" /> 
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
                <div className='div-update'>
                <div className="update">
                    <img src={update} alt="update" />
                    <h2>V2.0 is available</h2>
                    <button className='btn-try'>
                        Try now
                    </button>
                </div>
                </div>
            </div>
            <div className="overview">
                <div className='div-over'>
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/w2geyw8pozaytbriwqrj.png" alt="" />
                    <p>Overviews</p>
                </div>
                <div className='over-item'>
                    <div className="item">
                        
                    </div>
                    <div className="item">
                        
                    </div>
                    <div className="item">
                        
                    </div>
                </div>
            </div>
            <div className="content">
                <div>

                </div>
                <div>
                <DataTable className="display">
                    <thead>
                        <tr>
                        <th>
                            <button> </button>
                        </th>
                        <th>CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                        <th><span> </span></th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item, idx) => (
                            <tr key={idx}>
                            <td><input type="checkbox" /></td>
                            <td style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <img
                                src={item.avatar}
                                alt="avatar"
                                style={{ width: 36, height: 36, borderRadius: "50%" }}
                                />
                                {item.name}
                            </td>
                            <td>{item.company}</td>
                            <td>{item.orderValue}</td>
                            <td>{item.orderDate}</td>
                            <td>
                                <span
                                style={{
                                    padding: "6px 12px",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    backgroundColor:
                                    item.status === "New"
                                        ? "#e0f2fe"
                                        : item.status === "In-progress"
                                        ? "#fef9c3"
                                        : "#dcfce7",
                                    color:
                                    item.status === "New"
                                        ? "#0284c7"
                                        : item.status === "In-progress"
                                        ? "#f59e0b"
                                        : "#22c55e",
                                }}
                                >
                                {item.status}
                                </span>
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <span style={{ cursor: "pointer", color: "#9ca3af" }}>✏️</span>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </DataTable>
                </div>
            </div>
        </div>
        </>)
}