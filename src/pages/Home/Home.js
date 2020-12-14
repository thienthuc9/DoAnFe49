import React, { useEffect, useState } from 'react';
import axios from 'axios';//Thư viện kết nối BE api
import {layDanhSachPhimApiAction} from '../../redux/actions/QuanLyPhimAction';
import {connect,useSelector,useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import DemoHOC from '../HOC/DemoHOC';
import HeThongRap from '../HeThongRap/HeThongRap';
import Ungdung from '../../components/UngDung/Ungdung';
import News from '../../components/News/News';
import Carousel from '../../components/Carousel/Carousel';
import PhimSlick from '../../components/ListPhimSlick/PhimSlick';
import SelectPhim from '../../components/SelectPhim/SelectPhim';
 function Home(props) {
    //Dùng useSelector thay cho mapStateToProps lấy danh sách phim từ reducer về
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    //useDispatch thay thế cho this.props.dispatch bên react component
    const dispatch = useDispatch();


    const [dsPhim, setDSPhim] = useState([])
    const getFilm = async () => {

       
        dispatch(layDanhSachPhimApiAction());

        // getFilmsApi();
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then(res => {
        //     console.log('kết quả', res.data);
        //     //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
        //     setDSPhim(res.data);
        // }).catch(err => {
        //     console.log(err.response.data)
        // })

        //code tiếp theo tiếp tục chạy
    }

    useEffect(() => {

        dispatch(layDanhSachPhimApiAction())
        // axios({
        //     url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // }).then(res => {
        //     console.log('kết quả', res.data);
        //     //Set lại state dsPhim => function render lại (chạy lại tất cả với dsPhim mang giá trị mới)
        //     setDSPhim(res.data);
        // }).catch(err => {
        //     console.log(err.response.data)
        // })


    }, [])//Tham số thứ 2 useEffect là mảng rổng => ứng với componentDidMount của react LifeCycle


    const getFilmsApi = async () => { //async function là function bất đồng bộ khi gọi nó, các hàm tiếp theo vẫn tiếp tục thực hiện
        try {
            let { data, status } = await axios({
                url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            // console.log(100/0);
            //Lệnh await bắt buộc các lệnh phía sau phải đợi đến khi hàm này thực thi xong thì mới làm tiếp
            if (status === 200) {
                setDSPhim(data);
            }
        } catch(ex) {
            console.log('ex',ex)
            //Chỉ cần bên trong xử lý try xảy ra lỗi => Không làm nữa mà làm catch 
        }

    }

    const renderPhim = () => {
        console.log('dsPhim',danhSachPhim)
        return danhSachPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-white bg-warning">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} onError={(e) => {
                        e.target.src = 'https://picsum.photos/300/300'
                    }} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>

                        <NavLink className="btn btn-success" to={`/detail/${phim.maPhim}`}>
                            ĐẶT VÉ
                        </NavLink>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div>
            <Carousel></Carousel>
            <SelectPhim></SelectPhim>
            <PhimSlick></PhimSlick>

        <div className="container">
            {/* <button onClick={() => {
                getFilm();
            }}>Lấy danh sách phim</button>
            <h3>Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div> */}
            <HeThongRap></HeThongRap>
        </div>
        <News></News>
        <Ungdung></Ungdung>
        </div>

    )
}


//Kết nối với rootReducer lấy giá trị state về component
const mapStateToProps = (state) => {
    return {
        dsPhim:state.QuanLyPhimReducer.dsPhim
    }
}


export default connect (mapStateToProps)(Home);