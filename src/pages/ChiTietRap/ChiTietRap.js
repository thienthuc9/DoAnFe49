import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayChiTietRapPhimTheoID } from '../../redux/actions/QuanLiRapPhimAction'
import moment from 'moment';
import '../HeThongRap/HeThongRap.css'
import { NavLink } from 'react-router-dom';

export default function ChiTietRap(props) {
    const { dsChiTietRapTheoID } = useSelector(state => state.QuanLyRapPhimReducer)
    console.log(props.match.params.id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LayChiTietRapPhimTheoID(props.match.params.id))

    }, [])
    return (
        <div className='container'>
                <h1 className="text-center">Thông tin Rap Chieu {dsChiTietRapTheoID.maHeThongRap}</h1>

            <div className="row">

                <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {
                        dsChiTietRapTheoID.map((heThongRap, index) => {
                             
                              
                            return heThongRap.lstCumRap.map((cumRap,index)=>{
                                    let active2 = ''
                                    if (index === 0) {
                                        active2 = 'active'
                                    }

                                    return <a key={index} className={`nav-link ${active2}`} id=""
                                        data-toggle="pill" href={`#${cumRap.maCumRap}`} role="tab"
                                        aria-controls="v-pills-home" aria-selected="true">{cumRap.tenCumRap}
                                        <img src={`/img/${cumRap.maCumRap}.jpg`} width={'50px'} height={'50px'}></img>
                                      
                                      </a>


                                })
                            


                        })
                    }
                </div>
                <div className="tab-content col-9" id="v-pills-tabContent">

                    {
                       dsChiTietRapTheoID.map((ctRap, index) => {
                            
                        return ctRap.lstCumRap.map((cumRap, index) => {
                            let active = ''
                            if (index === 0) {
                                active = 'active'
                            }
                            return <div key={index} className={`tab-pane fade show ${active}`} id={cumRap.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {
                                    cumRap.danhSachPhim.map((Phim, index) => {
                                        return <div key={index}
                                        >
                                            <p> {Phim.tenPhim}</p>
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


                    {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>

                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>

                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                </div>
            </div>
        </div>
    )
}
