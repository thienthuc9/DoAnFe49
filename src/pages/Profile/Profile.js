import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { LayThongTinTaiKhoan,CapNhatNguoiDungUser } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
import { Row, Col, Form, Input, Button, Table, Tooltip, message } from 'antd';
import './Profile.css'

export default function Profile(props) {
    const columns = [
        {
            title: 'Mã Vé',
            key: 'maVe',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.maVe}>
                    <span>{item.maVe}</span>
                </Tooltip>
            )
        },
        {
            title: 'Tên Phim',
            key: 'tenPhim',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.tenPhim}>
                    <span>{item.tenPhim}</span>
                </Tooltip>
            )
        },
        {
            title: 'Ngày Đặt',
            key: 'ngayDat',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.ngayDat}>
                    <span>{item.ngayDat}</span>
                </Tooltip>
            )
        },
        {
            title: 'Giá Vé',
            key: 'giaVe',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.giaVe.toLocaleString()}>
                    <span>{item.giaVe.toLocaleString()}</span>
                </Tooltip>
            )
        },
        {
            title: 'Tên Rạp',
            key: 'tenHeThongRap',
            render: (item) => {
                let tenRap = item.danhSachGhe[0].tenHeThongRap;
                return <Tooltip placement="topLeft" title={tenRap}>
                    <span>{tenRap}</span>

                </Tooltip>
            }
        },
        {
            title: 'Phòng',
            key: 'tenRap',
            render: (item) => {
                let tenRap = item.danhSachGhe[0].tenRap;
                return <Tooltip placement="topLeft" title={tenRap}>
                    <span>{tenRap}</span>

                </Tooltip>
            }
        },
        {
            title: 'Ghế',
            key: 'danhSachGhe',
            render: (item) => {
                let tenGhe = item.danhSachGhe.map((item) => {
                    return item.tenGhe;
                }).join();
                return <Tooltip placement="topLeft" title={tenGhe}>
                    <span>{tenGhe}</span>
                </Tooltip>
            }
        }
    ];

    const { thongTinTaiKhoan } = useSelector((state) => state.QuanLyNguoiDungReducer);
    const [upDate, setUser2] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        hoTen: ''
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
         setUser2({
            ...upDate,
            [name]: value
        })
        console.log(upDate)
    }
    const upp = (e) => {
        e.preventDefault();
        //Gọi api đăng nhập
        dispatch(CapNhatNguoiDungUser(upDate))
 

    }
    let dispatch = useDispatch();
    let userLogin = {}
    userLogin = JSON.parse(localStorage.getItem('userLogin'));

    useEffect(() => {
        // dispatch(LayThongTinTaiKhoan(userLogin))
        setUser2(thongTinTaiKhoan)
    }, [thongTinTaiKhoan])
    // console.log(thongTinTaiKhoan)
    if (localStorage.getItem('userLogin')) {

        return <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div className="card profile" style={{ width: '18rem' }}>
                        <img className="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Xin Chào {`${thongTinTaiKhoan.hoTen}`}</p>
                            <p>Số Điện thoại: {thongTinTaiKhoan.soDT}</p>
                            <p>Email: {thongTinTaiKhoan.email}</p>
                            {userLogin.maLoaiNguoiDung === 'QuanTri' ?
                                <NavLink to="/admin/films">Quản trị hệ thống</NavLink>
                                :
                                <></>
                            }

                        </div>
                    </div>
                </div>
                <div className='col-8'>
                    <div >
                        <form onSubmit={upp} className='form_profile' >
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input value={upDate.hoTen} onChange={handleChange} name="hoTen" className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Tài Khoản</p>
                                <input value={upDate.taiKhoan} onChange={handleChange} name="taiKhoan" className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Mật Khẩu</p>
                                <input value={upDate.matKhau} onChange={handleChange} name="matKhau" className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Email</p>
                                <input value={upDate.email} onChange={handleChange} name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <p>Số điệnt thoại</p>
                                <input value={upDate.soDT} onChange={handleChange} name="soDt" className="form-control" />
                            </div>
                            <div className="form-group">
                                <button className=" btn btn-primary" type="submit" >Lưu</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>

            <h1 className='text-center'>LỊCH SỬ ĐẶT VÉ</h1>
            {/* <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"> Mã Vé</th>
                        <th scope="col">Tên Phim</th>
                        <th scope="col">Ngày Đặt</th>
                        <th scope="col">Số Lượng ghế</th>
                        <th scope="col">Giá Vé</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        thongTinTaiKhoan?.thongTinDatVe?.map((datVe, index) => {
                            let tenRap = '';

                            return <tr key={index}>
                                <th scope="row">{datVe.maVe}</th>
                                <td>{datVe.tenPhim}</td>

                                <td>{moment(datVe.ngayDat).format('LL')}</td>
                                <td>{Object.keys(datVe?.danhSachGhe).length}</td>
                                <td>{datVe.giaVe}</td>
                              
                                
                                    <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`.${datVe.maVe}`}>Chi Tiết</button>
                                    <div class={`modal fade ${datVe.maVe}`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                {
                                                     datVe.danhSachGhe.map((Ghe, index =0) => {
                                                         if(index ===0){
                                                            return<div key={index}>
                                                             <h2 className="text-center">{Ghe.tenHeThongRap}</h2>
                                                         <h3 className='text-center'>--{Ghe.tenCumRap}--</h3>
                                                         </div>
                                                         }
                                                        })
                                                }
                                               
                                                <div className="modal-header">

                                                    <table class="table">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                            <th scope="col">STT</th>

                                                                <th scope="col">Mã Ghế</th>
                                                                <th scope="col">Số Ghế</th>
                                                            </tr>
                                                        </thead>

                                                        {
                                                            datVe.danhSachGhe.map((Ghe, index) => {
                                                                console.log(Ghe.maGhe)
                                                                return <tbody key={index}>
                                                                    <td>{index+1}</td>
                                                                    <td>{Ghe.maGhe}</td>
                                                            <td>{Ghe.tenGhe}</td>
                                                                </tbody>
                                                            })
                                                        }




                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            
                            

                            </tr>
                        })
                    }




                </tbody>

            </table> */}
            <div className='info_ticket'>
                <Table dataSource={thongTinTaiKhoan.thongTinDatVe} columns={columns} pagination={{ pageSize: 6 }} />

            </div>

        </div>
    } else {

        alert('Đăng nhập để vào trang này !');

        return <Redirect to='/login' />
    }





}
