import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { dangKyNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function SignUp(props) {
    let dispatch = useDispatch();
    let history = useHistory();
    const [userSignUp, setUserLogin] = useState({
        fullName:'',
        Phone:'',
        eMail:'',
         userName: '',
        passWord: ''
    })
    
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserLogin({
            ...userSignUp,
            [name]: value
        })
    }
    const login = (e) => {
        e.preventDefault(); 
        //Gọi api đăng nhập
        dispatch(dangKyNguoiDungAction(userSignUp,history))


    }
    if (localStorage.getItem('userLogin')){
        return (


            <Redirect to='/' />
        )
    }
    return (

        <form className="container" onSubmit={login} >
        <h3 className="display-4 text-center">Đăng Kí</h3>
        <div className="form-group">
            <p>Họ Và Tên</p>
            <input name="fullName" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Tài Khoản </p>
            <input name="userName" className="form-control"  onChange={handleChange}  />
        </div>
        <div className="form-group">
            <p>Mật Khẩu</p>
            <input name="passWord" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Email</p>
            <input name="eMail" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Số Điện Thoại</p>
            <input name="Phone" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
           
            <button className="btn btn-primary" type='submit' >Đăng Ký</button>

        </div>
    </form>
    )
}
