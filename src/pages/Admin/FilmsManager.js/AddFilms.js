import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useDispatch } from 'react-redux';
import { ThemPhim } from '../../../redux/actions/QuanLyPhimAction'
import * as moment from 'moment';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default function AddFilms() {
    const dispatch = useDispatch();

    const [addFilm, setFilm] = useState({
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
                ...addFilm,
                hinhAnh: e.target.files[0]

            })
            console.log(addFilm)
        } else if (e.target.name === 'ngayKhoiChieu') {
            setFilm({
                ...addFilm,
                ngayKhoiChieu: moment(value).format('DD-MM-YYYY')
            })
        } else {
            setFilm({
                ...addFilm,
                [name]: value
            })
        }


        console.log(value)
    }
    console.log(addFilm)

    const add = (e) => {
        e.preventDefault();
        var form_data = new FormData();

 
        for (var key in addFilm) {
            form_data.append(key, addFilm[key]);
            console.log("object", form_data.get(key));
        }

        dispatch(ThemPhim(form_data))
        //Gọi api đăng nhập
        // dispatch(ThemNguoiDung(addUser))
    }


    return (
        <form  >
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Thêm Phim
        </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Thêm Phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" style={{ color: 'red' }}>×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={add} className="container"  >

                                <div className="form-group">
                                    <p>Tên Phim</p>
                                    <input name="tenPhim" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <p>Bí Danh</p>
                                    <input name="biDanh" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <p>Trailler</p>
                                    <input name="trailer" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <p>Hình Ảnh</p>
                                    <input type='file' name="hinhAnh" className="form-control" onChange={handleChange} />
                                 
                                </div>
                                <div className="form-group">
                                    <p>Ngày Khởi Chiếu</p>
                                    <input type='date' name="ngayKhoiChieu" className="form-control" onChange={handleChange} />



                                </div>
                                <div className="form-group">
                                    <p>Mô Tả</p>
                                    <textarea name="moTa" className="form-control" onChange={handleChange} aria-label="With textarea"></textarea>

                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    <button type="submit" className="btn btn-primary">Thêm</button>
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
