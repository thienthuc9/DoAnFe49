import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LayThongTinTaiKhoan } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';

export default function Profile(props) {
    const { thongTinTaiKhoan } = useSelector((state) => state.QuanLyNguoiDungReducer);
    console.log(thongTinTaiKhoan)
    let dispatch = useDispatch();
    let userLogin = {}
    userLogin = JSON.parse(localStorage.getItem('userLogin'));

    useEffect(() => {
        dispatch(LayThongTinTaiKhoan(userLogin))
    }, [])
    // console.log(userLogin.taiKhoan)
    if (localStorage.getItem('userLogin')) {

        return <div className='container'>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Xin Chào {`${thongTinTaiKhoan.hoTen}`}</p>
                    <p>Số Điện thoại: {thongTinTaiKhoan.soDT}</p>
                    <p>Email: {thongTinTaiKhoan.email}</p>

                </div>
            </div>
            <h1 className='text-center'>LỊCH SỬ ĐẶT VÉ</h1>
            <table class="table">
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
            </table>
        </div>
    } else {

        alert('Đăng nhập để vào trang này !');

        return <Redirect to='/login' />
    }





}
