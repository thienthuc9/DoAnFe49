import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayDanhSachNguoiDung, ThemNguoiDung, XoaNguoiDung, TimKiemNguoiDung, CapNhatNguoiDungAdmin, chinhSuaNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'

export default function UpdateUser() {
    const dispatch = useDispatch();

    const { nguoiDungDcChon } = useSelector(state => state.QuanLyNguoiDungReducer)
    const [upDate, setUser2] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maLoaiNguoiDung: '',
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

    useEffect(() => {
        setUser2(nguoiDungDcChon)
    }, [nguoiDungDcChon])

    const upp = (e) => {
        e.preventDefault();
        //Gọi api đăng nhập
        dispatch(CapNhatNguoiDungAdmin(upDate))
 

    }

    return (
        <form onSubmit={upp} className="container"  >
            <div className="form-group">
                <p>Họ Và Tên</p>
                <input name="hoTen" className="form-control" onChange={handleChange} value={upDate.hoTen} />
            </div>
            <div className="form-group">
                <p>Tài Khoản </p>
                <input name="taiKhoan" className="form-control" value={upDate.taiKhoan} onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Mật Khẩu</p>
                <input name="matKhau" className="form-control" value={upDate.matKhau} onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Email</p>
                <input name="email" className="form-control" value={upDate.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Số Điện Thoại</p>
                <input name="soDt" className="form-control" value={upDate.soDt} onChange={handleChange} />
            </div>
            <label for="exampleFormControlSelect1">Loại Người Dùng</label>
            <div className='form-group'>
                <select name='maLoaiNguoiDung' class="form-control" id="exampleFormControlSelect1" onChange={handleChange}>
                    <option value={`${upDate.maLoaiNguoiDung}`}>{upDate.maLoaiNguoiDung}</option>
                    {
                        () => {
                            if (upDate.maLoaiNguoiDung === 'KhachHang') {
                                return <option value='QuanTri'>Quản Trị</option>
                            } else {
                                return <option value='KhachHang'>Khách Hàng</option>
                            }
                        }
                    }

                </select>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                <button type="submit" className="btn btn-primary" onClick={() => {
                    dispatch(CapNhatNguoiDungAdmin(upDate))
                }}>Sửa</button>
            </div>

        </form>
    )
}
