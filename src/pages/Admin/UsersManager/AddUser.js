import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LayDanhSachNguoiDung, ThemNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
export default function AddUser() {
    const dispatch = useDispatch();

    const [addUser, setUser] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maLoaiNguoiDung: 'KhachHang',
        hoTen: ''
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUser({
            ...addUser,
            [name]: value
        })
        console.log(value)

    }
    const add = (e) => {
        e.preventDefault();
        //Gọi api đăng nhập
        dispatch(ThemNguoiDung(addUser))

    }
    return (
        <form  >
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Thêm Tài Khoản
        </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thêm Tài Khoản</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ color: 'red' }}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={add} className="container"  >
                                <div className="form-group mb-5">
                                    {/* <p>Họ Và Tên</p>
                                <input name="hoTen" className="form-control" onChange={handleChange} /> */}
                                    <TextField name="hoTen" id="outlined-basic" label="Họ Tên" variant="outlined" className="form-control" onChange={handleChange} />

                                </div>

                                <div className="form-group mb-5">
                                    <TextField name="taiKhoan" id="outlined-basic" label="Tài Khoản" variant="outlined" className="form-control" onChange={handleChange} />


                                </div>
                                <div className="form-group mb-5">
                                    <TextField name="matKhau" id="outlined-basic" label="Mật Khẩu" variant="outlined" className="form-control" onChange={handleChange} />

                                </div>
                                <div className="form-group mb-5">
                                    <TextField name="email" id="outlined-basic" label="Email" variant="outlined" className="form-control" onChange={handleChange} />


                                </div>
                                <div className="form-group mb-5">
                                    <TextField name="soDT" id="outlined-basic" label="Số Điện Thoại" variant="outlined" className="form-control" onChange={handleChange} />


                                </div>
                                <label for="exampleFormControlSelect1">Loại Người Dùng</label>
                                <div className='form-group mb-5'>
                                    <select name='maLoaiNguoiDung' class="form-control" id="exampleFormControlSelect1" onChange={handleChange}>
                                        <option value='KhachHang'>Khách Hàng</option>
                                        <option value='QuanTri'>Quản Trị</option>

                                    </select>
                                  
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    <button type="submit" className="btn btn-primary">Thêm</button>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div></form>
    )
}
