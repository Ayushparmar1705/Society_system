import { Bell, Car, LayoutDashboard, MenuIcon, Shield, User, X } from 'lucide-react'
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

export default function Loginchairmanheader() {
  
    return (

        <Sidebar >
            <div className='h-screen bg-[#1e293b] text-white p-2 rounded'>
                
                <Menu menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: "#fffff",
                            color: "black",

                        }
                    }
                }}>
                    <MenuItem style={{ borderRadius: 10 }} icon={<LayoutDashboard></LayoutDashboard>}><Link to='/dashboard'>Dashboard</Link></MenuItem>

                </Menu>
                <Menu menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: "#fffff",
                            color: "black",


                        }
                    }
                }}>
                    <MenuItem style={{ borderRadius: 10 }} icon={<User></User>}><Link to='/member-management'>Member Management</Link></MenuItem>

                </Menu>
                <Menu menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: "#fffff",
                            color: "black",

                        }
                    }
                }}>
                    <Menu menuItemStyles={{
                        button: {
                            '&:hover': {
                                backgroundColor: "#fffff",
                                color: "black",

                            }
                        }
                    }}>
                        <SubMenu style={{ borderRadius: 10 }} label="Staff" icon={<User></User>}>

                            <MenuItem style={{ color: "white", backgroundColor: '#1e293b' }}><Link to='/add-staff'>Add staff</Link></MenuItem>
                            <MenuItem style={{ color: "white", backgroundColor: "#1e293b" }}><Link to='/manage-staff'>Manage staff</Link></MenuItem>
                        </SubMenu>

                    </Menu>

                </Menu>
                <Menu menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: "#fffff",
                            color: "black",

                        }
                    }
                }}>
                    <SubMenu label="Parking allocation" style={{ borderRadius: 10 }} icon={<Car></Car>}>

                        <MenuItem style={{ color: "white", backgroundColor: '#1e293b' }}>Add Parking</MenuItem>
                        <MenuItem style={{ color: "white", backgroundColor: "#1e293b" }}>Allocate Parking</MenuItem>
                    </SubMenu>

                </Menu>
                <Menu menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: "#fffff",
                            color: "black",
                            borderRadius: 10,
                        }
                    }
                }}>
                    <MenuItem style={{ borderRadius: 10 }} icon={<Bell></Bell>}>Notification</MenuItem>

                </Menu>
            </div>
        </Sidebar>

    )
}
