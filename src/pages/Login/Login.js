import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {NavLink, Redirect, useHistory} from 'react-router-dom'
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';
//
import './Login.css'

export default function Login(props) {

    let dispatch = useDispatch();
    let history = useHistory();

    /*
     this.state = {
         userLogin: {
             userName:'',
             passWord:''
         }
     }
     */
    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         passWord: ''
    //     }
    // });
    const [userLogin, setUserLogin] = useState({
        userName: '',
        passWord: ''
    })


    console.log(history);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const login = (e) => {
        e.preventDefault(); 
        //Gọi api đăng nhập
        dispatch(dangNhapApiAction(userLogin,history))


    }
    if (localStorage.getItem('userLogin')){
        return (


            <Redirect to='/' />
        )
    }

    return (
        <div className='dang__nhap'>
        <form className='form_dangnhap'  onSubmit={login}>
        <i class="fa fa-user-circle"></i>

            <h4 className="display-4 text-center">Đăng Nhập</h4>
            <div className="form-group">
                <input placeholder='Tài Khoản' name="userName" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <input placeholder='Mật Khẩu' name="passWord" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit">Đăng Nhập</button>
                {/* <NavLink className="btn btn-primary ml-2" to='/singup'>Đăng Ký Tài Khoản</NavLink> */}

            </div>
            <div className='dang_ky'>
                <span>Hoặc </span> <NavLink to='/singup'>Đăng ký tại đây</NavLink>
            </div>
        </form>

        </div>
    )
}



