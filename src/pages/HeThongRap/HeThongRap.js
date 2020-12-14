import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayChiTietRapPhim, LayDanhSachRapPhim } from '../../redux/actions/QuanLiRapPhimAction'
import moment from 'moment';
import './HeThongRap.css'
import { NavLink } from 'react-router-dom';
import Ungdung from '../../components/UngDung/Ungdung';
export default function HeThongRap(props) {
    const { dsRap, dsChiTietRap } = useSelector((state) => state.QuanLyRapPhimReducer);
    // console.log('kk',dsChiTietRap)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LayDanhSachRapPhim())
        dispatch(LayChiTietRapPhim())
    }, [])
    return (
        <div>
        <div className='row'>
            <div className='col-1'>
            {/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist"> */}
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {dsRap.map((rap, index) => {
                        let active = ''
                        if (index === 0) {
                            active = 'active'
                        }
                        return <a key={index} className={`nav-link ${active}`} id="v-pills-home-tab"
                            data-toggle="pill" href={`#${rap.maHeThongRap}`} role="tab"
                            aria-controls="v-pills-home" aria-selected="true">
                            <img src={rap.logo} width={'50px'} height={'50px'}></img>
                        </a>





                    })}

                </div>
                {/* </ul> */}
            </div>


            <div className='col-4'>
                <div class="tab-content" id="v-pills-tabContent">


                    {
                        dsChiTietRap.map((ctRap, index) => {
                            let active = ''
                            if (index === 0) {
                                active = 'active'
                            }
                            return <div className={`tab-pane fade show ${active}`} id={ctRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {
                                        ctRap.lstCumRap.map((cumRap, index) => {
                                            let active2 = ''
                                            if (index === 0) {
                                                active2 = 'active'
                                            }


                                            return <a key={index} className={`nav-link ${active2}`} id=""
                                                data-toggle="pill" href={`#${cumRap.maCumRap}`} role="tab"
                                                aria-controls="v-pills-home" aria-selected="true">{cumRap.tenCumRap}
                                                <img src={`./img/${cumRap.maCumRap}.jpg`} width={'50px'} height={'50px'}></img>
                                                <NavLink to={`/chitietrap/${ctRap.maHeThongRap}`} className="col-3" key={index}>
                                                    CT
                                                        </NavLink>
                                            </a>
                                        })
                                    }

                                </div>
                                


                            </div>
                        })
                    }

                    {/* <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <a class="nav-link " id="" data-toggle="pill" href="#thu2" role="tab" aria-controls="v-pills-home" aria-selected="true">Home2</a>

                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                </div>
            </div>
            <div className='col-6'>
                <div class="tab-content" id="v-pills-tabContent">
                    {
                        dsChiTietRap.map((ctRap, index) => {

                            return ctRap.lstCumRap.map((cumRap, index) => {
                                let active = ''
                                if (index === 0) {
                                    active = 'active'
                                }
                                return <div key={index} className={`tab-pane fade show ${active}`} id={cumRap.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {
                                        cumRap.danhSachPhim.map((Phim, index) => {
                                            return <div key={index}
                                            >     <NavLink to={`/detail/${Phim.maPhim}`}>
                                                    <img src={Phim.hinhAnh} width={'50px'} height={'50px'} onError={(e) => {e.target.src = 'https://picsum.photos/300/300'}}></img>
                                                    <p> {Phim.tenPhim}</p>
                                                </NavLink>
                                               
                                                {
                                                    Phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                        return <span key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </span>
                                                    })
                                                }
                                            </div>
                                        })
                                    }
                                </div>

                            })
                        })
                    }

                </div>
            </div>



        </div>

        </div>
    )
}
