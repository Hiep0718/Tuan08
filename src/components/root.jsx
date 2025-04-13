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
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { useMatches } from 'react-router-dom';



export default function RootPage(){
    DataTable.use(DT);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);      
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [, setForceRender] = useState(0);
    const [customer, setCustomer] = useState(
        {
            customerName: '',
            avatar: '',
            company: '',
            orderValue: '',
            orderDate: '',
            status: 'New'
          }
    );   
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [loading1, setLoading1] = useState(true);
      const [error1, setError1] = useState(null);
      const [json, setJson] = useState([]);
      const [data, setData] = useState([]);
      const forceUpdate = () => {
        setForceRender(prev => prev + 1);
      };
      useEffect(() => {
        fetch('http://localhost:3000/overview')
          .then((res) => res.json())
          .then((data) => {
            setJson(data);
            setLoading1(false);
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
            setError1(err);
            setLoading1(false);
          });
      }, []);
      useEffect(() => {
        fetch('http://localhost:3000/customer')
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error('Error fetching data:', err);
            setError(err);
            setLoading(false);
          });
      }, []);
      const bgColors = ['#ffe4e6', '#eff6ff', '#eff6ff']; 
    //   if (loading1) return <p>Loading...</p>;
    // if (error1) return <p>Error: {error1.message}</p>;
    // if (error) return <p>Error: {error.message}</p>;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useMatches();

    // lấy thông tin route hiện tại
    const currentRoute = matches[matches.length - 1];

    // lấy tiêu đề cho h2
    const pageTitle = currentRoute?.handle?.title || 'Trang mặc định';
    return(
        <>
        <div className="container">
            <div className="header">
                <h2 className='title-h'>
                    {pageTitle}
                </h2>
                <div className='head-content'>
                    <div className="search-box">
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/uffu6mgzfukgco6ihuqo.png" alt="Search" className="search-icon"/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/xc3zlre9p62tochmtcbl.png" alt="ring" />
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/qyqyilcf6zjdjrl66xj5.png" alt="hoi" />
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/vcl1lfq9xiipe0kead1j.png" alt="" />
                </div>
            </div>
            <div className="menu">
                <div className="logo">
                    <img src= "https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/lbxyu1z0ly9wfntyndwy.png"  alt="logo" /> 
                </div>    
                <NavLink 
                    to="/dashboard"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src={Dasdboard} alt="dashboard" />
                    <h2>Dashboard</h2>
                </NavLink>

                <NavLink 
                    to="/project"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925415/Chefify/ureezaihg3qpdasanyc4.png" alt="project" />
                    <h2>Project</h2>
                </NavLink>

                <NavLink 
                    to="/team"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/myc5sadytimv0nbipuqy.png" alt="team" />
                    <h2>Team</h2>
                </NavLink>

                <NavLink 
                    to="/analytics"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925416/Chefify/azlpeij211ckdfrrkof7.png" alt="analytics" />
                    <h2>Analytics</h2>
                </NavLink>

                <NavLink 
                    to="/messages"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925417/Chefify/wekqko56dg79n2agwfor.png" alt="message" />
                    <h2>Messages</h2>
                </NavLink>

                <NavLink 
                    to="/integrations"
                    className={({ isActive }) => isActive ? "btn" : "btn-unactive"}
                >
                    <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925418/Chefify/xye4y7isfwg8b0qvxgma.png" alt="integrations" />
                    <h2>Integrations</h2>
                </NavLink>
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
                {json.map((item, idx) => (
                    <div className="item" key={idx} style={{ background: bgColors[idx] }}>
                    <div className="item-header">
                        <h4>{item.name}</h4>
                        <img src={item.icon} alt="" />
                    </div>
                    <h2>{item.currency ? `$${item.value.toLocaleString()}` : item.value}</h2>
                    <div className="item-footer">
                        <span className="item-percent">▲ {item.percent}%</span>
                        <span className="item-period">{item.period} period of change</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <Outlet/>
        </div>
        {isModalOpen && selectedRow && (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center",
            zIndex: 1000,
        }}>
            <div style={{
            background: "#fff", padding: "20px", borderRadius: "10px",
            minWidth: "400px", maxWidth: "500px",
            }}>
            <h2 style={{ marginBottom: "20px" }}>Sửa thông tin khách hàng</h2>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                type="text"
                value={selectedRow.customerName}
                onChange={(e) =>
                    setSelectedRow({ ...selectedRow, customerName: e.target.value })
                }
                placeholder="Customer Name"
                />
                <input
                type="text"
                value={selectedRow.company}
                onChange={(e) =>
                    setSelectedRow({ ...selectedRow, company: e.target.value })
                }
                placeholder="Company"
                />
                <input
                type="text"
                value={selectedRow.orderValue}
                onChange={(e) =>
                    setSelectedRow({ ...selectedRow, orderValue: e.target.value })
                }
                placeholder="Order Value"
                />
                <input
                type="text"
                value={selectedRow.orderDate}
                onChange={(e) =>
                    setSelectedRow({ ...selectedRow, orderDate: e.target.value })
                }
                placeholder="Order Date"
                />
                <select
                value={selectedRow.status}
                onChange={(e) =>
                    setSelectedRow({ ...selectedRow, status: e.target.value })
                }
                >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                onClick={() => setIsModalOpen(false)}
                style={{ padding: "8px 16px", backgroundColor: "#ccc", border: "none", borderRadius: "5px", cursor: "pointer" }}
                >
                Hủy
                </button>
                <button
                onClick={async () => {
                    try {
                    const response = await fetch(`http://localhost:8000/customer/${selectedRow.id}`, {
                        method: "PUT",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify(selectedRow),
                    });

                    if (!response.ok) {
                        throw new Error("Failed to update data");
                    }

                    // Khi PUT thành công → refetch lại dữ liệu
                    const updatedData = await fetch('http://localhost:8000/customer').then(res => res.json());
                    setData(updatedData);
                    setIsModalOpen(false);
                    console.log("Update thành công!");

                    } catch (error) {
                    console.error("Update lỗi:", error);
                    }
                }}
                style={{ padding: "8px 16px", backgroundColor: "#4ade80", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer" }}
                >
                Lưu
                </button>
            </div>
            </div>
        </div>
        )}
        {isAddModalOpen && (
        <div style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
            alignItems: "center", justifyContent: "center",
            zIndex: 1000,
        }}>
            <div style={{
            background: "#fff", padding: "20px", borderRadius: "10px",
            minWidth: "400px", maxWidth: "500px",
            }}>
            <h2 style={{ marginBottom: "20px" }}>Thêm Khách hàng mới</h2>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                type="text"
                value={customer.customerName}
                onChange={(e) =>
                    setCustomer({ ...customer, customerName: e.target.value })
                }
                placeholder="Customer Name"
                />
                <input
                type="text"
                value={customer.avatar}
                onChange={(e) =>
                    setCustomer({ ...customer, avatar: e.target.value })
                }
                placeholder="Link avatar"
                />
                <input
                type="text"
                value={customer.company}
                onChange={(e) =>
                    setCustomer({ ...customer, company: e.target.value })
                }
                placeholder="Company"
                />
                <input
                type="text"
                value={customer.orderValue}
                onChange={(e) =>
                    setCustomer({ ...customer, orderValue: e.target.value })
                }
                placeholder="Order Value"
                />
                <input
                type="text"
                value={customer.orderDate}
                onChange={(e) =>
                    setCustomer({ ...customer, orderDate: e.target.value })
                }
                placeholder="Order Date"
                />
                <select
                value={customer.status}
                onChange={(e) =>
                    setCustomer({ ...customer, status: e.target.value })
                }
                >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
                </select>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                onClick={() => setIsAddModalOpen(false)}
                style={{ padding: "8px 16px", backgroundColor: "#ccc", border: "none", borderRadius: "5px", cursor: "pointer" }}
                >
                Hủy
                </button>
                <button
                onClick={async () => {
                    try {
                    const response = await fetch(`http://localhost:8000/customer`, {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify(customer),
                    });

                    if (!response.ok) {
                        throw new Error("Failed to add data");
                    }

                    // Khi POST thành công → refetch lại dữ liệu
                    const updatedData = await fetch('http://localhost:8000/customer').then(res => res.json());
                    setData(updatedData);
                    setIsAddModalOpen(false);
                    console.log("Thêm thành công!");
                    setCustomer(
                        {
                            customerName: '',
                            avatar: '',
                            company: '',
                            orderValue: '',
                            orderDate: '',
                            status: 'New'
                          }
                    );
                    forceUpdate();
                    } catch (error) {
                    console.error("Thêm lỗi:", error);
                    }
                }}
                style={{ padding: "8px 16px", backgroundColor: "#4ade80", border: "none", borderRadius: "5px", color: "#fff", cursor: "pointer" }}
                >
                Lưu
                </button>
            </div>
            </div>
        </div>
        )}

        </>)
}