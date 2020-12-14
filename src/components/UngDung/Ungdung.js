import React from 'react'
import './Ungdung.css'
export default function Ungdung() {
    return (
        <div className="ung-dung">
            <div className="ung-dung__content container mx-auto">
                <div className="row">
                    <div className=" col-lg-6 col-12  ung-dung__text">
                        <div>
                            <p className="text-u-left">Ứng dụng tiện lợi dành cho</p>
                            <p className="text-u-left">người yêu điện ảnh</p>
                            <p className="py-3">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <button  className="btn btn-ungDung">App miễn phí - Tải về ngay!</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ung-dung__dt text-center">
                        <div className="ung-dung__img d-flex">
                            <img className="img-dt"  src="./img/phone.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
