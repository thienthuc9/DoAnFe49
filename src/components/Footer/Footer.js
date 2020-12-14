import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import './Footer.css'
import { colors } from '@material-ui/core';
export default function Footer() {
    return (
    <div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-xs-12 about-company">
        <h4 className="mb-3">Thông Tin</h4>
        <p className=" text-white-50">Đồ án cuối khóa CyberSoft - ReacJS </p>
        <p className=" text-white-50">Học Viên: Phan Đình Thế Thiện - Lớp FE49 </p>
      </div>
      <div className=" col-lg-3 col-xs-12 links ">
        <h4 className=" mt-lg-0 mb-3 mt-sm-3 contact">Liên Hệ</h4>
        <ul className="m-0 p-0">
          <li> <a target="_blank" href="https://www.facebook.com"><i className="fab fa-facebook" />Facebook</a></li>
          <li> <a target="_blank" href="https://github.com/"><i style={{color:'black'}} className="fab fa-github" />GitHub</a></li>
          <li> <a target="_blank" href="https://youtube.com"><i style={{color:'red'}} className="fab fa-youtube" />Youtube</a></li>
        </ul>
      </div>
      <div className="col-lg-4 col-xs-12 location">
        <h4 className="mt-lg-0 mb-3 mt-sm-4">Địa Chỉ</h4>
        <p className="location-item "><i className="fas fa-map-marker" />Quận 10, Thành Phố Hồ Chí Minh, Việt Nam</p>
        <p className="location-item mb-0"><i className="fa fa-phone" />035-255-4003</p>
        <p className="location-item "><i className="fa fa-envelope" />phandinhthethien@gmail.com</p>
      </div>
    </div>
    <div className="row mt-4 ">
      <div className="col copyright">
        <p className="text-white-50 text-center p-2">© 2020. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</div>

    )
}
