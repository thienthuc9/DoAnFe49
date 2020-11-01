import { LAY_CHI_TIET_HE_THONG_RAP, LAY_CHI_TIET_HE_THONG_RAP_THEOID, LAY_HE_THONG_RAP } from "../constants/QuanLyRapPhimConstant";

const initialState ={
    dsRap :[],
    dsChiTietRap:[],
    dsChiTietRapTheoID:[]

}



const QuanLyRapPhimReducer =(state = initialState,actions)=>{
    switch (actions.type) {
        case LAY_HE_THONG_RAP:{
            state.dsRap = actions.dsRap;
          
            return{...state}
        }
        case LAY_CHI_TIET_HE_THONG_RAP:{
            state.dsChiTietRap = actions.dsChiTietRap;
            return{...state}
        }
        case LAY_CHI_TIET_HE_THONG_RAP_THEOID:{
            // console.log('reducer',actions.dsChiTietRapTheoID)
            state.dsChiTietRapTheoID = actions.dsChiTietRapTheoID;
            return{...state}
        }
            
    
        default:
            return state;
    }
}
export default QuanLyRapPhimReducer