import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { dangKyNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import './SignUp.css'
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
        <div className='dang__ky'>


        <form className='form_dangky'  onSubmit={login} >
        <i class="fa fa-user-circle"></i>

        <h3 className="display-4 text-center">Đăng Ký</h3>
        <div className="form-group">
            <input placeholder='Họ và Tên' name="fullName" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <input placeholder='Tài Khoản' name="userName" className="form-control"  onChange={handleChange}  />
        </div>
        <div className="form-group">
            <input placeholder='Mật Khẩu' name="passWord" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <input placeholder='Email' name="eMail" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
            <input placeholder='SĐT' name="Phone" className="form-control"  onChange={handleChange} />
        </div>
        <div className="form-group">
           
            <button  className="form-control btn btn-primary" type='submit' >Đăng Ký</button>

        </div>
    </form>
    </div>

    )
}
