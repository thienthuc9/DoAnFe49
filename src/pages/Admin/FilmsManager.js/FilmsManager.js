import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimApiAction, XoaPhim, chinhSuaPhim } from '../../../redux/actions/QuanLyPhimAction';
import AddFilms from './AddFilms';
import moment from 'moment';
import UpdateFilms from './UpdateFilms';
import { NavLink } from 'react-router-dom';



export default function FilmsManager() {
    const { dsPhim } = useSelector((state) => state.QuanLyPhimReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimApiAction())
    }, [])
    const DeletePhim = (maPhim) => {
        dispatch(XoaPhim(maPhim))
    }
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <AddFilms></AddFilms>


            <table class="table ">
                <thead class="thead-dark ">
                    <tr>
                        <th scope="col">Mã Phim</th>
                        <th scope="col">Tên Phim</th>
                        <th scope="col">Hình Ảnh</th>
                        <th scope="col">Ngày Khởi Chiếu</th>

                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        dsPhim.map((Phim, index) => {
                            // if (index < 10)
                            return <tr key={index}>
                                <td>{Phim.maPhim}</td>
                                <td width={'300px'}>{Phim.tenPhim}</td>
                                <td>
                                    <img width={'50px'} height={'50px'} src={Phim.hinhAnh}></img>
                                </td>
                                <td>  {moment(Phim.ngayKhoiChieu).format('DD-MM-YYYY')}</td>
                                <td>
                                    <button className='btn btn-danger' type='submit' onClick={() => DeletePhim(Phim.maPhim)} >Xóa</button>
                                    <NavLink  to={`/admin/films/${Phim.maPhim}`} className='btn btn-success ml-2'>Thêm Lịch Chiếu</NavLink>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#${Phim.maPhim}`} onClick={() => {
                                        dispatch(chinhSuaPhim(Phim))
                                    }} >
                                        Sửa
                                         </button>
                                    <form  >

                                        <div className="modal fade" id={`${Phim.maPhim}`} tabIndex={-1} role="dialog" aria-labelledby="update" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLongTitle">Chỉnh Sửa Phim</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true" style={{ color: 'red' }}>×</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <UpdateFilms></UpdateFilms>
                                                    </div>
                                                    <div className="modal-footer">

                                                    </div>
                                                </div>
                                            </div>
                                        </div></form>
                                </td>

                            </tr>
                        })
                    }



                </tbody>
            </table>
        </div>
    )
}

