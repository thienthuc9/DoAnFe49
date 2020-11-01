import { LAY_CHI_TIET_PHIM, LAY_DANH_SACH_PHIM } from "../constants/QuanLyPhimConstant";

const stateDefault = {
    dsPhim: [],
    chiTietPhim: {},
    phimDcChon:[]
}



const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case LAY_DANH_SACH_PHIM: {
            state.dsPhim = action.dsPhim;
            return {...state}
        }
        case LAY_CHI_TIET_PHIM: {
            state.chiTietPhim = action.chiTietPhim;
            return {...state}
        }
        case 'THEM_PHIM':{
            state.dsPhim = [...state.dsPhim,action.themPhim]
            return {...state}
        }
        case "XOA_PHIM":{
            let dsPhim = [...state.dsPhim]
            let index = state.dsPhim.findIndex(tk=>tk.maPhim === action.maPhim)
            if(index !=-1){
                dsPhim.splice(index,1)
                state.dsPhim = dsPhim
    
            }
            return{...state}
        }
        case "CHINH_SUA_PHIM":{
            state.phimDcChon = action.PhimDcChon
            return{...state}
        }

        default: return state;
    }
}

export default QuanLyPhimReducer;