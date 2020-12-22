import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Button, Modal, Form, Input, Select, message, Tooltip, Popconfirm, Tag } from 'antd';

import * as moment from 'moment';
import { ThemLichChieuPhim, layChiTietPhimAction } from '../../../redux/actions/QuanLyPhimAction'
import { LayDanhSachRapPhim, LayThongTinCumRapTheoHeThongRap, layDSMaRapTenRap } from '../../../redux/actions/QuanLiRapPhimAction'
import { keys } from '@material-ui/core/styles/createBreakpoints';
import ChiTietRap from '../../ChiTietRap/ChiTietRap';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';
export default function AddLichChieu(props) {
    const columns = [
        {
            title: 'Mã Lịch Chiếu',
            
            render: (item) => {
                return item.cumRapChieu.map((heThong) => {
                    {
                        // return Phim.cumRapChieu.map((heThong, index) => {
                            return heThong.lichChieuPhim.map((CumRap, index) => {
                                //        return CumRap.map((lichChieu,index)=>{
                                //             return  lichChieu.lichChieuPhim.map((LC,index)=>{
                                return            <span key={index}>{CumRap.maLichChieu}</span>


                                //         })
                            })
                        // })
                    }
                });
                // return <Tooltip placement="topLeft" title={maLichChieu}>
                // </Tooltip>

            },            
            
        },
        // {
        //     title: 'Tên Cụm Rạp',
        //     key: 'tenCumRap',
        //     render: (item) => {
        //         let tenCumRap = item.cumRapChieu.map((heThong) => {
        //                 return heThong.tenCumRap ;
        //         })
        //         return <a placement="topLeft">
        //             <span>{tenCumRap}</span>
        //         </a>
        //     }
        // },
        // {
        //     title: 'Mã Rạp Chiếu',
        //     key: 'maRap',
        //     render: (item) => {
        //         let maRap = item.cumRapChieu.map((heThong) => {
        //             {
        //                 // return Phim.cumRapChieu.map((heThong, index) => {
        //                     return heThong.lichChieuPhim.map((CumRap, index) => {
        //                         //        return CumRap.map((lichChieu,index)=>{
        //                         //             return  lichChieu.lichChieuPhim.map((LC,index)=>{
        //                         return  CumRap.maRap
        //                         //         })
        //                     })
        //                 // })
        //             }
        //         }).join();;
        //         return <Tooltip placement="topLeft" title={maRap}>
        //             <span>{maRap}</span>
        //         </Tooltip>
        //     }
        // },
        
       
      ];
    const dispatch = useDispatch();
    const { chiTietPhim } = useSelector(state => state.QuanLyPhimReducer)
    console.log(chiTietPhim)
    const { dsRap, dsHTR, list } = useSelector(state => state.QuanLyRapPhimReducer)
    const [AddLichChieu, setLichChieu] = useState({
        maPhim: props.match.params.id,
        ngayChieuGioChieu: "",
        maRap: "",
        giaVe: ""
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        if (e.target.name === 'ngayChieuGioChieu') {
            setLichChieu({
                ...AddLichChieu,
                ngayChieuGioChieu: moment(value).format('DD-MM-YYYY' + ' ' + 'HH:mm:ss')
            })
        } else {
            setLichChieu({
                ...AddLichChieu,
                [name]: value
            })
        }


    }
    const handleChangeSection1 = (e) => {
        const { value } = e.target;
        if (value != 'null') {
            dispatch(LayThongTinCumRapTheoHeThongRap(value))

        }


    }
    const handleChangeSection2 = (e) => {
        let list = [];
        const { value } = e.target;
        let index = dsHTR.findIndex(Rap => Rap.maCumRap === value)
        console.log(index)
        if (index != -1) {
            list.push({
                danhSachRap: dsHTR[index].danhSachRap,
            })
            dispatch(layDSMaRapTenRap(list))
        }
        dispatch(layDSMaRapTenRap(list))

    }

    const add = (e) => {
        e.preventDefault();


        dispatch(ThemLichChieuPhim(AddLichChieu))

        //Gọi api đăng nhập
        // dispatch(ThemNguoiDung(addUser))
    }
    useEffect(() => {
        dispatch(layChiTietPhimAction(props.match.params.id));
        dispatch(LayDanhSachRapPhim());
    }, [])
    let userLogin = {}
  userLogin = JSON.parse(localStorage.getItem('userLogin'));
  console.log(userLogin.maLoaiNguoiDung)
  if (userLogin.maLoaiNguoiDung==="QuanTri") {
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <h1 className='text-center'>Thêm Lịch Chiếu Phim: {chiTietPhim.tenPhim} </h1>
            <div className='row'>
                <div className='col-7'>

                    <form className='container' onSubmit={add}>
                        <div className='form-group'>


                            <div className='row'>

                                <div className='col-4'>
                                    <p>Hệ Thống Rạp</p>
                                    <select className='form-control text-center' onChange={handleChangeSection1}>
                                        <option  value='null'>--Chọn Hệ Thống Rạp--</option>
                                        {
                                            dsRap?.map((Rap, index) => {
                                                // style={`background-image:url(${Rap.logo})` }
                                                return <>
                                                    <option  value={Rap.maHeThongRap} >{Rap.maHeThongRap}</option>
                                                </>
                                            })
                                        }



                                    </select>
                                </div>
                                <div className='col-4'>
                                    <p>Cụm Rạp</p>
                                    <select className='form-control' onChange={handleChangeSection2}>
                                        <option>--Chọn Cụm Rạp--</option>

                                        {
                                            dsHTR?.map((HeThongRap, index) => {
                                                return <>
                                                    <option value={HeThongRap.maCumRap} >{HeThongRap.tenCumRap}</option>
                                                </>
                                            })

                                        }
                                    </select>
                                </div>
                                <div className='col-4'>
                                    <p>Mã Rạp</p>
                                    <select name='maRap' onChange={handleChange} className='form-control'>
                                        <option>--Chọn Mã Rạp--</option>

                                        {
                                            list?.map((Rap, index) => {
                                                return Rap.danhSachRap?.map((danhSach, index) => {
                                                    return <>
                                                        <option value={danhSach.maRap} >{danhSach.maRap}( {danhSach.tenRap})</option>
                                                    </>
                                                })


                                            })

                                        }

                                    </select>
                                </div>
                            </div>




                        </div>
                        {/* <div className='form-group'>
                            <p>Mã Rạp</p>
                            <input name='maRap' className='form-control' type='text' onChange={handleChange} />
                        </div> */}
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-6'>
                                    <p>Giá Vé</p>
                                    <input name='giaVe' className='form-control' type='text' onChange={handleChange} />
                                </div>
                                <div className='col-6'>
                                    <p>Ngày Chiếu Giờ Chiếu</p>
                                    <input name='ngayChieuGioChieu' className='form-control' onChange={handleChange} type='datetime-local' />
                                </div>
                            </div>


                        </div>

                        <button className='btn btn-primary  ' type='submit'>Thêm </button>

                    </form>
                </div>
                <div className='col-5'>
                    <img src={chiTietPhim.hinhAnh} width={'520px'} height={'370px'}></img>

                </div>
            </div>
            <div className='row mt-5'>
                <table class="table container text-center">
                    <thead>
                        <tr>
                            <th scope="col">Mã Lịch Chiếu</th>

                            <th scope="col">Mã Cụm Rạp</th>
                            <th scope="col">Mã  Rạp</th>

                            <th scope="col">Ngày Chiếu Giờ Chiếu</th>
                            <th scope="col">Giá Vé</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            chiTietPhim.heThongRapChieu?.map((Phim, index) => {
                                return Phim.cumRapChieu.map((heThong, index) => {
                                    return heThong.lichChieuPhim.map((CumRap, index) => {
                                        //        return CumRap.map((lichChieu,index)=>{
                                        //             return  lichChieu.lichChieuPhim.map((LC,index)=>{
                                        return <tr>
                                            <td>{CumRap.maLichChieu}</td>
                                            <td>{heThong.tenCumRap}</td>
                                            <td>{CumRap.maRap}( {CumRap.tenRap})</td>
                                            <td>{moment(CumRap.ngayChieuGioChieu).format('DD-MM-YYYY' + ' ' + 'HH:mm')}</td>
                                            <td>{CumRap.giaVe}</td>
                                        </tr>
                                        //         })
                                    })
                                })
                            })
                        }


                    </tbody>
                </table>
                {/* <Table dataSource={chiTietPhim.heThongRapChieu} columns={columns} pagination={{ pageSize: 6 }}  /> */}

            </div>

        </div>
    )
}
Swal.fire(
    '',
    `Bạn Không Có Quyền`,
    'warning'
  )
  return(
    <Redirect to='/home' />
  
  
  )

}