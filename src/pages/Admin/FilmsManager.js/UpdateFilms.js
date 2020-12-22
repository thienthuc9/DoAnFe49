import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as moment from 'moment';
import { chinhSuaPhimAction } from '../../../redux/actions/QuanLyPhimAction'



export default function UpdateFilms() {
    const dispatch = useDispatch();

    const { phimDcChon } = useSelector(state => state.QuanLyPhimReducer)
    const [upDate, setFilm] = useState({
        tenPhim: '',
        biDanh: '',
        trailer: '',
        moTa: '',
        maNhom: 'GP01',
        hinhAnh: {},
        ngayKhoiChieu: '',
        danhGia: '0'
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        if (e.target.name === 'hinhAnh') {
            setFilm({
                ...upDate,
                hinhAnh: e.target.files[0]

            })

        } else if (e.target.name === 'ngayKhoiChieu') {
            setFilm({
                ...upDate,
                ngayKhoiChieu: moment(value).format('DD-MM-YYYY')
            })
        } else {
            setFilm({
                ...upDate,
                [name]: value
            })
        }
     
    }
    const upp = (e) => {
        e.preventDefault();
        var form_data = new FormData();


        for (var key in upDate) {
            form_data.append(key, upDate[key]);
            console.log("object", form_data.get(key));
        }

        dispatch(chinhSuaPhimAction(form_data))
        //Gọi api đăng nhập
        // dispatch(ThemNguoiDung(addUser))
    }
    useEffect(() => {
        setFilm(phimDcChon)

    }, [phimDcChon])
    const img = (e) => {
        setFilm({
            ...upDate,
            hinhAnh: e.target.files[0]

        })

        return <>
            <img style={{ width: '100px' }} src={upDate.hinhAnh} />
        </>



    }

    return (
        <form  >

            <div className="modal fade" id={`${phimDcChon.maPhim}`} tabIndex={-1} role="dialog" aria-labelledby="update" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Chỉnh Sửa Phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ color: 'red' }}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={upp} className="container"  >

                                <div className="form-group">
                                    <p>Tên Phim</p>
                                    <input name="tenPhim" className="form-control" onChange={handleChange} value={upDate.tenPhim} />
                                </div>
                                <div className="form-group">
                                    <p>Bí Danh</p>
                                    <input name="biDanh" className="form-control" onChange={handleChange} value={upDate.biDanh} />
                                </div>
                                <div className="form-group">
                                    <p>Trailler</p>
                                    <input name="trailer" className="form-control" onChange={handleChange} value={upDate.trailer} />
                                </div>




                                <div className="form-group">
                                    <p>Hình Ảnh</p>
                                    <input type='file' name="hinhAnh" className="form-control" onChange={handleChange} />

                                    {
                                    <>
                                    <img style={{ width: '100px' }} src={upDate.hinhAnh} />
                                </>

                                    }


                                </div>


                                <div className="form-group">
                                    <p>Ngày Khởi Chiếu</p>
                                    <input type='date' name="ngayKhoiChieu" className="form-control" onChange={handleChange} value={moment(upDate.ngayKhoiChieu).format('YYYY-MM-DD')} />



                                </div>
                                <div className="form-group">
                                    <p>Mô Tả</p>
                                    <textarea name="moTa" className="form-control" onChange={handleChange} aria-label="With textarea" value={upDate.moTa}></textarea>

                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    <button type="submit" className="btn btn-primary">Sửa</button>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div></form>




    )
}
