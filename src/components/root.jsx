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
import { useEffect, useState } from 'react'


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
        fetch('http://localhost:8000/overview')
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
        fetch('http://localhost:8000/customer')
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
      if (loading1) return <p>Loading...</p>;
    if (error1) return <p>Error: {error1.message}</p>;
    if (error) return <p>Error: {error.message}</p>;
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
            <div className="content">
                <div className='add-cus'>
                    <div className='title'>
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925415/Chefify/n4drhljcfaoanozfgp3l.png" alt="" />
                        <p>Detailed report</p>
                    </div>   
                    <button className='btn-add' 
                     onClick={() => {
                        setIsAddModalOpen(true);  
                    }}>
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925415/Chefify/idaus44p3xxm0ssqoeku.png" alt="" />
                        <p>Add customer</p>
                    </button>
                    
                </div>
                <div>
                {loading ? (
                <div>Loading...</div> // hoặc Spinner đẹp hơn
                ) : (
                <div className='boder-table'>
                    <DataTable className="display">
                    <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
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
                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                            <input type="checkbox" />
                        </td>
                        <td style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                            <img
                            src={item.avatar}
                            alt="avatar"
                            style={{ width: 36, height: 36, borderRadius: "50%" }}
                            />
                            {item.customerName}
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
                        <td style={{ textAlign: "center", cursor:"pointer" }} 
                            onClick={() => {
                                setSelectedRow(item);  
                                setIsModalOpen(true);  
                            }}
                        >
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1743925415/Chefify/umkio9m7o40tobo8fkm8.png" alt="" />
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </DataTable>
                </div>
                )}
                </div>
            </div>
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