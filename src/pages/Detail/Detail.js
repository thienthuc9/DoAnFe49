import { hasPrefixSuffix } from 'antd/lib/input/ClearableLabeledInput';
import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { layChiTietPhimAction } from '../../redux/actions/QuanLyPhimAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import './Detail.css'

export default function Detail(props) {
    //Kết nối với reducer lấy dữ liệu phim về thông qua hook useSelector
    const { chiTietPhim, dsPhim } = useSelector(state => state.QuanLyPhimReducer);
    console.log(chiTietPhim);
    //ứng với this.props.dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layChiTietPhimAction(props.match.params.id));
    }, [])

    return (
        <div className='detail'>
            <div style={{ backgroundImage:`url(${chiTietPhim.hinhAnh})` }} className='back-img'>

            </div>
            <div className="row mt-5 thongtinPhim">
                <div classNames="col-4">
                    <img width={350} height={432} src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh}
                        onError={(e) => {
                            e.target.src = 'https://picsum.photos/300/300'
                        }} />
                        <div className='row'>
                            <div className='col-12'>
                            <button className='btn btn-danger datve' >Đặt Vé Phim</button>

                            </div>
                        </div>
                </div>
                <div className="col-8">
                    <div className='tenPhim'>
                    <h1>{chiTietPhim.tenPhim}</h1>
                    <h3>{chiTietPhim.biDanh}</h3>
                    </div>
                    <div className='imdb'>
                    <i class="fab fa-imdb"></i> <span> 7.5</span>
                    </div>
                    <button className='btn btn-warning xemtrailler'>Xem Trailer</button>
                    <div className='khoichieu'>
                    <p>KHỞI CHIẾU : {moment(chiTietPhim.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                    </div>
                    <div className='noidung'>
                        <p>
                           MÔ TẢ : {chiTietPhim.moTa}
                        </p>
                    </div>
                
                    {/* <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Mô tả</th>
                                <th>{chiTietPhim.moTa}</th>
                            </tr>
                        </thead>
                        <hr />

                    </table> */}
                    {/* <rap htien={Item.maphjm}></rap> */}
                </div>
            </div>
            <div className='container lichchieu'>
                <h1 className="mt-5 mb-5">Thông tin lịch chiếu</h1>
                <div className="row">
                    <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {
                            chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {

                                let active = index === 0 ? 'active' : '';
                                return <a key={index} className={`nav-link ${active}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <img src={heThongRap.logo} width={50} height={50} /> {heThongRap.tenHeThongRap}
                                </a>
                            })
                        }
                    </div>
                    <div className="tab-content col-9" id="v-pills-tabContent">

                        {
                            chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                let active = index === 0 ? 'active' : '';
                                return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                   
                                        {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                            return <div key={index}>
                                                <h3>{cumRap.tenCumRap}</h3>
                                                <div className="row">
                                                    {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                        return <NavLink to={`/booking/${lichChieu.maLichChieu}`} className="col-3" key={index}>
                                                            { moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                 




                                </div>
                            })
                        }


                        {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>

                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>

                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
