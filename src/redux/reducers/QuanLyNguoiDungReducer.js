import { USER_LOGIN } from "../../ultity/ConfigWeb";

let userLocal = {};
if(localStorage.getItem(USER_LOGIN)) {
    userLocal = JSON.parse(localStorage.getItem(USER_LOGIN));
}
//Nếu local storage có tồn tại userLogin => Chứng tỏ người dùng đã đăng nhập => gán làm giá trị mặc định của redux khi trang vừa load lên

const initialState = {
    userLogin : userLocal,
    thongTinTaiKhoan:[],
    dsNguoiDung:[],
    // nguoiDung:[],
    timKiemND:[],
    nguoiDungDcChon:[],
    capnhatNDUser:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'DANG_NHAP':{
        state.userLogin = action.userLogin;
        state.thongTinTaiKhoan = action.userLogin;
        return {...state};
    }
    case 'LAY_THONG_TIN_TK':{
        state.thongTinTaiKhoan = action.thongTinTaiKhoan;
        return{...state};
    }
    case "LAY_DS_NGUOIDUNG":{
        state.dsNguoiDung = action.dsNguoiDung
        return{...state};
    }
    case "THEM_NGUOI_DUNG":{
        state.dsNguoiDung = [...state.dsNguoiDung,action.themND]
        // console.log(state.dsNguoiDung)
        return{...state};
    }
    case "TIM_KIEM_NGUOI_DUNG":{
        if(action.timKiemND){
             state.dsNguoiDung = action.timKiemND
        }
       
        return{...state};
    }
    case "XOA_NGUOI_DUNG":{
        let dsNguoiDung = [...state.dsNguoiDung]
        let index = state.dsNguoiDung.findIndex(tk=>tk.taiKhoan === action.taiKhoan)
        console.log(index)
        if(index !=-1){
            dsNguoiDung.splice(index,1)
            state.dsNguoiDung = dsNguoiDung

        }
        return{...state}
    }
    case "CHINH_SUA_NGUOI_DUNG":{
        state.nguoiDungDcChon = action.nguoiDung
        console.log(action.nguoiDung)
        return{...state};
    }
    case "CAP_NHAT_TAI_KHOAN_ADMIN":{
        let dsNguoiDung = [...state.dsNguoiDung]
        console.log(action.capnhatND.taiKhoan)
        let index = state.dsNguoiDung.findIndex(phim=>phim.taiKhoan===action.capnhatND.taiKhoan)
        if (index !== -1){
            dsNguoiDung[index] = {...action.capnhatND}

        }
        state.dsNguoiDung = dsNguoiDung;
        return{...state}
    }
    case "CAP_NHAT_TAI_KHOAN_USER":{
        state.thongTinTaiKhoan = action.capnhatNDUser;
        return{...state}
    }
    case "LAY_THONG_TIN_TK2":{
        state.thongTinTaiKhoan = action.thongTinTaiKhoan2;
        console.log(action.thongTinTaiKhoan2)

        return{...state}
    }
    default:
        return state
    }
}
