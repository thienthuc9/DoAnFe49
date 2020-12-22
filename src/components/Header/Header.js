import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { LayThongTinTaiKhoan } from '../../redux/actions/QuanLyNguoiDungAction';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Header.css'
export default function Header() {
    const { thongTinTaiKhoan } = useSelector((state) => state.QuanLyNguoiDungReducer);
    // console.log(thongTinTaiKhoan)
    let dispatch = useDispatch();
    let userLogin = {}
    userLogin = JSON.parse(localStorage.getItem('userLogin'));
    useEffect(() => {
        dispatch(LayThongTinTaiKhoan(userLogin))
    }, [])
    // if (localStorage.getItem('userLogin')) {
    //     // dispatch(LayThongTinTaiKhoan(userLogin))
    //     return (
    //         <div>
    //             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //                 <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
    //                 <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
    //                 <div className="collapse navbar-collapse" id="collapsibleNavId">
    //                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //                         <li className="nav-item ">
    //                             <NavLink
    //                                 exact
    //                                 className="nav-link"
    //                                 to="/home"
    //                                 activeClassName="activeMenuItem"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                             >Home</NavLink>
    //                         </li>
    //                         <li className="nav-item">
    //                             <NavLink
    //                                 exact
    //                                 className="nav-link"
    //                                 activeClassName="activeMenuItem"
    //                                 to="/about"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                             >About</NavLink>
    //                         </li>
    //                         <li className="nav-item">
    //                             <NavLink
    //                                 exact
    //                                 className="nav-link"
    //                                 activeClassName="activeMenuItem"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                                 to="/contact">Contact</NavLink>
    //                         </li>
    //                         <li className="nav-item">
    //                             <NavLink
    //                                 exact
    //                                 className="nav-link"
    //                                 activeClassName="activeMenuItem"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                                 to="/hoc">HOC</NavLink>
    //                         </li>


                           
    //                         <li className="nav-item dropdown">
    //                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                             Hello {`${thongTinTaiKhoan?.hoTen}`
                                  
    //                             }
    //                         </a>
    //                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //                             <NavLink
    //                                 exact
    //                                 className="nav-link"
    //                                 activeClassName="activeMenuItem"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                                 to="/profile">ProFile
                                    
    //                             </NavLink>
                            
    //                                  <NavLink
    //                                    onClick={() => {
    //                                     localStorage.removeItem('userLogin');
    //                                     localStorage.removeItem('accessToken');

    //                                 }}
    //                                 exact
    //                                 className="nav-link"
    //                                 activeClassName="activeMenuItem"
    //                                 activeStyle={{ fontWeight: 'bold' }}
    //                                 to="/login">Đăng Xuất
                                    
    //                             </NavLink>

    //                             </div>
                                
    //                         </li>

    //                     </ul>



    //                 </div>
    //             </nav>
    //         </div>

    //     )
    // } else {
        return (
            <div className='header'>
                <nav className="navbar navbar-expand-sm ">
                        <div className ='col-3'>
                        <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>

                        </div>
                        <div className='col-6'>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <NavLink
                                    exact
                                    className="nav-link"
                                    to="/home"
                                    activeClassName="activeMenuItem"
                                    activeStyle={{ fontWeight: 'bold' }}
                                >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    className="nav-link"
                                    activeClassName="activeMenuItem"
                                    to="/about"
                                    activeStyle={{ fontWeight: 'bold' }}
                                >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    className="nav-link"
                                    activeClassName="activeMenuItem"
                                    activeStyle={{ fontWeight: 'bold' }}
                                    to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    className="nav-link"
                                    activeClassName="activeMenuItem"
                                    activeStyle={{ fontWeight: 'bold' }}
                                    to="/hoc">HOC</NavLink>
                            </li>

                         
                          
                        </ul>

                    </div>
                  
                        </div>
                        <div className='col-3'>
                        <ul className="navbar-nav">
                    {
                                localStorage.getItem('userLogin')?
                                <li className="nav-item dropdown">
                                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <Avatar icon={<UserOutlined />} />   {`${userLogin?.hoTen}`
                                                              
                                                            }
                          </a>
                                                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                            <Link class="dropdown-item"
                                                             
                                                             activeStyle={{ fontWeight: 'bold' }}
                                                                to="/profile">Thông Tin Người Dùng
                                                                
                                                            </Link>
                                                        
                                                                 <Link
                                                                   onClick={() => {
                                                                    localStorage.removeItem('userLogin');
                                                                    localStorage.removeItem('accessToken');
                            
                                                                }}
                                                                class="dropdown-item"
                                                                activeStyle={{ fontWeight: 'bold' }}
                                                                href="/login">Đăng Xuất
                                                                
                                                            </Link>
                            
                                                            </div>
                                                            
                                                        </li>
                                                          :
                                                          <>
                                                           <li className="nav-item">
                                <NavLink
                                    exact
                                    className="nav-link"
                                    activeClassName="activeMenuItem"
                                    activeStyle={{ fontWeight: 'bold' }}
                                    to="/login">Login</NavLink>
                            </li>
                                
                                                          </>

                            }
                                </ul>
                        </div>

                     

                  
                    {/* <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" /> */}
                  
                      

                </nav>
            </div>

        )
    
}
