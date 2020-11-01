import { configConsumerProps } from 'antd/lib/config-provider';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import swal from 'sweetalert2'

import { layDanhSachGheAPI, datVeActionAPI } from '../../redux/actions/QuanLiPhongVeAction';

export default function Booking(props) {
    const dispatch = useDispatch();
    const { danhSachGhe, gheDcChon } = useSelector((state) => state.QuanLyPhongVeReducer);
    const params = useParams();
    // console.log(params);
    // console.log(gheDcChon)
    const [time, setTime] = useState('');
    function CountDown(duration) {
        if (!isNaN(duration)) {
            var timer = duration, minutes, seconds;

            var interVal = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                setTime(`${minutes}:${seconds}`);
                if (--timer < 0) {
                    clearInterval(interVal);
                    timer = duration;
                    swal.fire({
                        title: 'Hết thời gian đặt vé',
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Đặt Vé Lại'
                    }).then((result) => {
                        if (result.value) {
                            window.location.reload(true);
                        } else {
                            window.location.reload(true);

                        }
                    })
                }
            }, 1000);
        }
    }
    useEffect(() => {
        CountDown(10);

        return () => {
            CountDown("a");
        }
    }, []);
    useEffect(() => {

      
        dispatch(layDanhSachGheAPI(params.maLichChieu));
        // call api

    }, [])
    const handleClassName = (ghe) => {
        if (ghe.daDat == true) {
            return "btn btn-danger text white m-2"
        } else {
            if (ghe.dangChon) {
                return "btn btn-info text white m-2"

            } else {
                return "btn btn-dark text white m-2"

            }

        }
    }
    const renderDSGhe = () => {
        console.log(danhSachGhe)
        return danhSachGhe?.map((ghe, index) => {
            return <button onClick={() => {
                dispatch({
                    type: "DAT_GHE",
                    ghe,
                })
            }} className={handleClassName(ghe)} disabled={ghe.daDat} key={index}>{ghe.tenGhe}</button>
        })
    };
    const handleBooking = () => {
        let gheDaChon = danhSachGhe.filter((ghe) => ghe.dangChon);
        gheDaChon = gheDaChon.map((ghe) => ({
            maGhe: ghe.maGhe,
            giaVe: ghe.giaVe,
        }))
        //call api
        dispatch(datVeActionAPI(params.maLichChieu, gheDaChon))
        swal.fire(
            '',
            'Vé đã được đặt',
            'success'
        )
        dispatch(layDanhSachGheAPI(params.maLichChieu));

    };

    //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
    if (localStorage.getItem('userLogin')) {
        return (
            <div>
                <div className='text-center mb-5'>
                    {renderDSGhe()}
                    <div>
                        <button className='btn btn-success' onClick={handleBooking}>Đặt Ghế </button>
                    </div>
                </div>
                <div className='container'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Mã ghế</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Loại</th>
                                <th scope="col">Giá</th>
                                <th>{time}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                gheDcChon?.map((Ghe,index)=>{
                                  return  <tr key={index}>
                                    <th scope="row">{Ghe.maGhe}</th>
                                <td>{Ghe.tenGhe}</td>
                                <td>{Ghe.loaiGhe}</td>
                                <td>{Ghe.giaVe}</td>
                                </tr>
                                })
                            }
                          
                          
                        </tbody>
                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td >Tổng Tiền</td>
                                                <td>
                                                    {
                                                       gheDcChon.reduce((tongtien, ghe, index) => {
                                                            return tongtien += ghe.giaVe
                                                        }, 0).toLocaleString()
                                                    }
                                                </td>
                                            </tr>

                                        </tfoot>
                    </table>
                </div>
            </div>




        )
    }
    return (


        <Redirect to='/login' />
    )
}
