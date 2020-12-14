import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction';
import './SelectPhim.css'
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';


export default function SelectPhim() {
    const dispatch = useDispatch();
    const {dsPhim} = useSelector((state) => state.QuanLyPhimReducer);
    console.log(dsPhim)
    const { Option } = Select;
    const [search, setSearch] = useState({
        maPhim: "",
        maRap: "",
        maLichChieu: "",
        ngayChieu: "",
        suat: ""

    });
    const [theaters, setTheaters] = useState([]);
    const onChangeFilm = (values) => {
        setSearch({
            ...search,
            maPhim: values
        });
        Axios({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${values}`
        }).then(res => {
            setTheaters(res.data.heThongRapChieu);
        }).catch(err => console.log(err));
       
    }
    const renderFilm = () => {
        return dsPhim?.map((item, index) => {
            return <Option value={item.maPhim} key={index}>{item.tenPhim}</Option>
        })
    }
    const onChangeTheater = (values) => {
        setSearch({
            ...search,
            maRap: values
        });
    }
    const renderTheater = () => {
        return theaters.map((item) => {
            return item.cumRapChieu.map((item, index) => {
                return <Option value={item.tenCumRap} key={index + Math.random() * 9999}>{item.tenCumRap}</Option>
            })
        })
    }
    const onChangeDay = (values) => {
        setSearch({
            ...search,
            ngayChieu: values
        })
    }
    console.log(theaters);
    const renderDay = () => {
        let result = [];
        if (search.maRap) {
            return theaters?.map((item) => {
                return item?.cumRapChieu.map((child, index) => {
                    if(child.tenCumRap === search.maRap) {
                        for(let i = 0; i < child.lichChieuPhim.length - 1; i++) {
                            if((i + 1) === (child.lichChieuPhim.length - 1)) {
                                result.push(<Option value={moment(child.lichChieuPhim[i].ngayChieuGioChieu).format('YYYY-MM-DD')} key={i}>{moment(child.lichChieuPhim[i].ngayChieuGioChieu).format('DD-MM-YYYY')}</Option>)
                            }

                            if(moment(child.lichChieuPhim[i].ngayChieuGioChieu).format('YYYY-MM-DD') !== moment(child.lichChieuPhim[i + 1].ngayChieuGioChieu).format('YYYY-MM-DD')){
                                result.push(<Option value={moment(child.lichChieuPhim[i].ngayChieuGioChieu).format('YYYY-MM-DD')} key={i}>{moment(child.lichChieuPhim[i].ngayChieuGioChieu).format('DD-MM-YYYY')}</Option>)
                            }
                            
                        }
                        return result;
                    }
                })
            })
        }
        return result;
    }
      // Showtime
      const history = useHistory();
      const onChangeShowTime = (values) => {
        
  
          return history.push(`/booking/${values}`);
      }
      const renderShowTime = () => {
        if (search.ngayChieu) {
            return theaters?.map((item) => {
                return item?.cumRapChieu?.map((child) => {
                    if (child.tenCumRap === search.maRap) {
                        return child.lichChieuPhim.map((item, index) => {
                            if (item.ngayChieuGioChieu.indexOf(search.ngayChieu) !== -1) {
                                return <Option value={item.maLichChieu} key={index}>{item.ngayChieuGioChieu.slice(11, 16)}</Option>
                            }
                        })
                    }
                })
            })
        }
    }
  
    return (
        <div className="select__film">
            <div className="select__film-row">
                <div className="col">
                    <div className="block-title">
                        <h2>ĐẶT VÉ PHIM NGAY</h2>
                    </div>
                </div>
                <div className="col">
                    <div className="block-list">
                        <div className="item">
                            <Select
                                placeholder="Chọn Phim"
                                onChange={onChangeFilm}
                                size="large"
                            >
                                {renderFilm()}
                            </Select>
                        </div>

                        <div className="item">
                            <Select
                                placeholder="Chọn Rạp"
                                onChange={onChangeTheater}
                                size="large"
                                notFoundContent="VUI LÒNG CHỌN PHIM"
                            >
                                {renderTheater()}
                            </Select>
                        </div>

                        <div className="item">
                            <Select
                                placeholder="Chọn Ngày"
                                onChange={onChangeDay}
                                size="large"
                                notFoundContent="VUI LÒNG CHỌN RẠP"
                            >
                                {renderDay()}
                            </Select>
                        </div>

                        <div className="item">
                            <Select
                                placeholder="Chọn Suất"
                                onChange={onChangeShowTime}
                                size="large"
                                notFoundContent="VUI LÒNG CHỌN NGÀY CHIẾU"
                            >
                                {renderShowTime()}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
