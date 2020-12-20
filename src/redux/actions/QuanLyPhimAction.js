import axios from 'axios';
import {LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM} from '../constants/QuanLyPhimConstant'
import swal from 'sweetalert2'

//Action có 2 loại:
// + Action bình thường 


// + Action async (các action dùng để gọi api)
// export const layDanhSachPhimApiAction = () => {
//     //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
//     return dispatch => {
//          axios({
//             url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//             method: 'GET'
//         }).then(res => {
//             console.log('kết quả', res.data);
//             //dispatch lần 1 tại component để gọi action này thực thi
//             //dispatch lần 2 sau khi có kết quả từ api lấy dữ liệu dispatch lên reducer
//             const action = {
//                 type:LAY_DANH_SACH_PHIM,
//                 dsPhim:res.data
//             }
//             dispatch(action);
//         }).catch(err => {
//             console.log(err.response.data)
//         })
//     }
// }


export const layDanhSachPhimApiAction = () => {
    //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
       const {data} = await  axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer
        const action = {
            type:LAY_DANH_SACH_PHIM,
            dsPhim:data
        };
        dispatch(action);
    }
}
export const timKiemPhim = (tenPhim) => {
    //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
       const {data} = await  axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`,
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer
        const action = {
            type:"TIM_KIEM_PHIM",
            timKiemPhim:data
        };
        dispatch(action);
    }
}



export const layChiTietPhimAction = (maPhim) => {
    //Thay vì return về object => middleware thunk cho phép mình return về 1 function có tham số là hàm dispatch
    return async dispatch => {
       const {data} = await  axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ backend về sử dụng hàm dispatch đưa dữ liệu lên reducer
        const action = {
            type:LAY_CHI_TIET_PHIM,
            chiTietPhim:data
        };
        dispatch(action);
    }
}
export const ThemPhim =(addFilm)=>{
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));

        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
            method:'POST',
            data:addFilm,
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            console.log('hihi',result.data)
            dispatch({
                type:"THEM_PHIM",
                themPhim: result.data
            })
            swal.fire(
                '',
                `Thêm Phim Thành Công`,
                'success'
            )

        }).catch((err)=>{
            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
           
        })
            
        
    }
    
}
export const XoaPhim =(maPhim)=>{
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));
        
        axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            method:'DELETE',
           
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            console.log(result.data)
            dispatch({
                type: "XOA_PHIM",
                maPhim:maPhim
            })
            swal.fire(
                '',
                `Xóa Phim Thành Công`,
                'success'
            )

        }).catch((err)=>{
            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
            console.log(err);
        })
            
        
    }
    
}
export const chinhSuaPhim = (PhimDcChon) => ({
    
    type:"CHINH_SUA_PHIM",
    PhimDcChon
   
})
export const chinhSuaPhimAction =(Phim)=>{
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));

        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload',
            method:'POST',
            data:Phim,  
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            console.log('hihi',result.data)
            dispatch(layDanhSachPhimApiAction());

            dispatch({
                type:"SUA_PHIM",
                suaPhim: result.data
            })
            swal.fire(
                '',
                `Chỉnh Sửa Phim Thành Công`,
                'success'
            )

        }).catch((err)=>{
            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
           
        })
            
        
    }
    
}




export const ThemLichChieuPhim =(AddLichChieu)=>{
    console.log(AddLichChieu)
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));

        axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
            method:'POST',
            data: {
                maPhim: AddLichChieu.maPhim,
                ngayChieuGioChieu:AddLichChieu.ngayChieuGioChieu,
                maRap: AddLichChieu.maRap,
                giaVe: AddLichChieu.giaVe
            },
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            // dispatch({
            //     type:"THEM_LICH_CHIEU", 
            //     themLichChieu: AddLichChieu
            // })
            swal.fire(
                '',
                `Thêm Lịch Chiếu Thành Công`,
                'success'
            )

        }).catch((err)=>{
            // console.log(err)
            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
           
        })
            
        
    }
    
}