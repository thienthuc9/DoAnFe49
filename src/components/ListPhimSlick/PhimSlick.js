import React, { useEffect } from 'react';
import './PhimSlick.css'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction';
import { useDispatch, useSelector } from 'react-redux';

export default function PhimSlick() {
    const dispatch = useDispatch()
    const { TabPane } = Tabs;
    const {dsPhim} = useSelector((state) => state.QuanLyPhimReducer);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    useEffect(() => {
        dispatch(layDanhSachPhimApiAction())
    }, []);
    console.log(dsPhim);
    const renderFilmNow = () => {
        console.log(dsPhim);
        return dsPhim.map((item, index) => {
            if(index <10){
                return <div className="item" key={index}>
                <Link to={`/detail/${item.maPhim}`} className="img__film">
                    <img
                        src={item.hinhAnh}
                        alt={item.hinhAnh}
                    />
                </Link>
                <article>
                    <Link to={`/detail/${item.maPhim}`}>
                        {item.tenPhim}
                    </Link>
                </article>
                <Link to={`/detail/${item.maPhim}`} className="ant-btn ant-btn-primary ant-btn-block" size="large">
                    {/* <AppstoreAddOutlined /> */}
                            MUA VÉ
                        </Link>
            </div>
            }
            
        })
        
    }
    const renderFilmSoon = () => {
        return dsPhim.map((item, index) => {
            if(index >10){
                return <div className="item" key={index}>
                <Link to={`/detail/${item.maPhim}`} className="img__film">
                    <img
                        src={item.hinhAnh}
                        alt={item.hinhAnh}
                    />
                </Link>
                <article>
                    <Link to={`/detail/${item.maPhim}`}>
                        {item.tenPhim}
                    </Link>
                </article>
                <Link to={`/detail/${item.maPhim}`} className="ant-btn ant-btn-danger ant-btn-block" size="large">
                    {/* <AppstoreAddOutlined /> */}
                            Sắp Chiếu
                        </Link>
            </div>
            }
          
        })
    }
    return (
        <div className="film__view" id="film">
        <div className="film__view__wrapper">
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            {/* <PaperClipOutlined /> */}
                PHIM ĐANG CHIẾU
                </span>
                    }
                    key="1"
                >
                    <Slider {...settings} className="carousel">
                        {renderFilmNow()}

                    </Slider>
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            {/* <ThunderboltOutlined /> */}
                PHIM SẮP CHIẾU
                </span>
                    }
                    key="2"
                >
                    <Slider {...settings} className="carousel">
                        {renderFilmSoon()}
                    </Slider>
                </TabPane>
            </Tabs>
        </div>
    </div>
    )
}
