import Axios from 'axios';
import axios from 'axios';
import { DOMAIN, TOKEN, USER_LOGIN } from '../../ultity/ConfigWeb';
import swal from 'sweetalert2'



export const dangNhapApiAction = (userLogin, history) => {
    return async dispatch => {
        try {
            let { data, status } = await axios({
                url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                method: 'post',
                data: {
                    taiKhoan: userLogin.userName,
                    matKhau: userLogin.passWord
                }
            });
            console.log(data)
            if (status === 200) {
                //Sau khi gọi api => dispatch lên redux 
                dispatch({
                    type: 'DANG_NHAP',
                    userLogin: data
                });
                //Lưu vào localstorage
                localStorage.setItem(USER_LOGIN, JSON.stringify(data));

                localStorage.setItem(TOKEN, data.accessToken);
                // history.push("/");

                // đăng nhập vào trả về trang gần nhất
                  swal.fire(
                '',
                `Đăng Nhập Thành Công`,
                'success'
            )
                history.goBack();

            }
        } catch (err) {

            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
           
        }

    }
}
export const dangKyNguoiDungAction = (userSignUp, history) => {
    return (dispatch) => {
        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            method: "POST",
            data: {
                taiKhoan: userSignUp.userName,
                matKhau: userSignUp.passWord,
                email: userSignUp.eMail,
                soDt: userSignUp.Phone,
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                hoTen: userSignUp.fullName,
            }
        }).then((result) => {
            console.log(result.data)
            swal.fire(
                '',
                `Đăng Ký Tài Khoản Thành Công`,
                'success'
            )
            history.goBack();
        
        }).catch((err) => {
            swal.fire(
                '',
                `${err.response.data}`,
                'error'
            )
            console.log(err.response.data);
        })
    }
}
export const LayThongTinTaiKhoan = (userLogin) => {

    return (dispatch) => {
        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: "POST",
            data: {
                taiKhoan:userLogin?.taiKhoan,
            }
        }).then((result) => {
            dispatch({
                type:"LAY_THONG_TIN_TK",
                thongTinTaiKhoan : result.data

            })

        }


        ).catch((err) => { 
            console.log(err.response.data);
        })
    }
}
export const LayDanhSachNguoiDung =()=>{
    return(dispatch)=>{
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method:'GET'

        }).then((result)=>{
           dispatch({
               type: "LAY_DS_NGUOIDUNG",
               dsNguoiDung : result.data,
           })


        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}
export const LayDanhSachNguoiDungPhanTrang =()=>{
    return(dispatch)=>{
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=1&soPhanTuTrenTrang=10            ",
            method:'GET',
      
        }).then((result)=>{
            console.log(result.data)
           dispatch({
               type: "LAY_DS_NGUOIDUNG",
               dsNguoiDung : result.data,
           })


        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}
export const ThemNguoiDung =(addUser,history)=>{
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));

        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method:'POST',
            data:{
                taiKhoan:addUser.taiKhoan,
                matKhau:addUser.matKhau,
                email:addUser.email,
                soDt:addUser.soDt,
                maNhom:"GP01",
                maLoaiNguoiDung:addUser.maLoaiNguoiDung,
                hoTen:addUser.hoTen
            },
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            // console.log('hihi',result.data)
            dispatch({
                type:"THEM_NGUOI_DUNG",
                themND: result.data
            })
            swal.fire(
                '',
                `Thêm Tài Khoản Thành Công`,
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
export const TimKiemNguoiDung =(tuKhoa)=>{
    return(dispatch)=>{
        console.log(tuKhoa);
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tuKhoa}`,
            method:'GET'

        }).then((result)=>{
            console.log(result.data)
           dispatch({
               type: "TIM_KIEM_NGUOI_DUNG",
               timKiemND : result.data,
           })


        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}
export const XoaNguoiDung =(taiKhoan)=>{
    return(dispatch)=>{
        const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));
        
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method:'DELETE',
           
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            console.log(taiKhoan)
            dispatch({
                type: "XOA_NGUOI_DUNG",
                taiKhoan:taiKhoan
            })
            swal.fire(
                '',
                `Xóa Khoản Thành Công Tài Khoản: ${taiKhoan}`,
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
export const CapNhatNguoiDungAdmin =(nguoiDungDcChon)=>{
    const {accessToken} =JSON.parse(localStorage.getItem("userLogin"));
    console.log(nguoiDungDcChon);

    return(dispatch)=>{
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method:'PUT',
            data:{
                taiKhoan:nguoiDungDcChon.taiKhoan,
                matKhau:nguoiDungDcChon.matKhau,
                email:nguoiDungDcChon.email,
                soDt:nguoiDungDcChon.soDt,
                maNhom:"GP01",
                maLoaiNguoiDung:nguoiDungDcChon.maLoaiNguoiDung,
                hoTen:nguoiDungDcChon.hoTen
            },
            headers:{
                Authorization: `Bearer ${accessToken}`,
              }

        }).then((result)=>{
            console.log("hihi",result.data)
           dispatch({
               type: "CAP_NHAT_TAI_KHOAN_ADMIN",
               capnhatND : result.data,
           })
           swal.fire(
            '',
            `Cập Nhật Tài Khoản Thành Công`,
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
export const chinhSuaNguoiDung = (nguoiDung) => ({
    
    type:"CHINH_SUA_NGUOI_DUNG",
    nguoiDung
   
})  