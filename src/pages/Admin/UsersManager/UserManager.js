import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom';
import { LayDanhSachNguoiDung, ThemNguoiDung, XoaNguoiDung, TimKiemNguoiDung, CapNhatNguoiDungAdmin, chinhSuaNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
    DeleteOutlined
} from '@ant-design/icons';
import { TextField } from '@material-ui/core';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UpdateFilms from '../FilmsManager.js/UpdateFilms';
export default function UserManager() {
    const dispatch = useDispatch();
    let history = useHistory();

    const { dsNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(dsNguoiDung)

    const [tuKhoa, setTK] = useState(

    )
    const handleChange2 = (e) => {
        const { value, name } = e.target;
        setTK(value)

        // e.preventDefault();
        // if (tuKhoa) {
        //     dispatch(TimKiemNguoiDung(tuKhoa));

        // } else {
        //     dispatch(LayDanhSachNguoiDung())

        // }
    }

    const DeleteUser = (taiKhoan) => {
        dispatch(XoaNguoiDung(taiKhoan))
        // useEffect(()=>{
        //     dispatch(LayDanhSachNguoiDung())

        // },[])
    }
    useEffect(() => {
        dispatch(LayDanhSachNguoiDung())
        // setUser2({
        //     upDate:nguoiDungDcChon
        // })
    }, [])
 

    const TimKiem = (e) => {
        e.preventDefault();
        if (tuKhoa) {
            dispatch(TimKiemNguoiDung(tuKhoa));

        } else {
            dispatch(LayDanhSachNguoiDung())

        }

    }
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className='row'>
                <div className='col-7'></div>
                <div className='col-5'>
                    <div className="input-group mb-3" >
                        <input type="text" name='tuKhoa' className="form-control" onChange={handleChange2} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary " onClick={TimKiem} type="submit">Button</button>
                        </div>
                    </div>
                </div>

            </div>

            <AddUser></AddUser>
    

            <table class="table ">
                <thead class="thead-dark ">
                    <tr>
                        <th scope="col">Tài Khoản</th>
                        <th scope="col">Mật Khẩu</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">SĐT</th>

                        <th scope="col">Email</th>
                        <th scope="col">Mã Loại Người Dùng</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        dsNguoiDung.map((nguoiDung, index) => {
                            if (index < 10)
                                return <tr   key={index}>
                                    <td>{nguoiDung.taiKhoan}</td>
                                    <td>{nguoiDung.matKhau}</td>
                                    <td>{nguoiDung.hoTen}</td>
                                    <td>{nguoiDung.soDt}</td>
                                    <td>{nguoiDung.email}</td>
                                    <td>{nguoiDung.maLoaiNguoiDung}</td>
                                    <td>
                                        <button className='btn btn-danger' type='submit' onClick={() => DeleteUser(nguoiDung.taiKhoan)} >Xóa</button>
                                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#${nguoiDung.taiKhoan}`} onClick={() => {
                                            dispatch(chinhSuaNguoiDung(nguoiDung))
                                        }} >
                                            Sửa
                                         </button>

                                       <UpdateUser></UpdateUser>
                                    </td>
                                </tr>
                        })
                    }



                </tbody>
            </table>
        </div>
    )
}
