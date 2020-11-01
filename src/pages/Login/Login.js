import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {NavLink, useHistory} from 'react-router-dom'
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';
//

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

    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Đăng Nhập</h3>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input name="userName" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Mật Khẩu</p>
                <input name="passWord" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Đăng Nhập</button>
                <NavLink className="btn btn-primary ml-2" to='/singup'>Đăng Ký Tài Khoản</NavLink>

            </div>
        </form>


    )
}



