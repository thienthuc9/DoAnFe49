import Axios from "axios"
import {LAY_CHI_TIET_HE_THONG_RAP, LAY_CHI_TIET_HE_THONG_RAP_THEOID, LAY_HE_THONG_RAP} from '../constants/QuanLyRapPhimConstant'

export const LayDanhSachRapPhim =()=>{
    return(dispatch)=>{
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method:'GET'

        }).then((result)=>{
           dispatch({
               type: LAY_HE_THONG_RAP,
               dsRap : result.data,
           })


        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}
export const LayChiTietRapPhim =()=>{
    return(dispatch)=>{
        Axios({
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
            method:'GET'

        }).then((result)=>{
            console.log('hihi',result.data)
           dispatch({
               type: LAY_CHI_TIET_HE_THONG_RAP,
               dsChiTietRap : result.data,
           })



        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}
export const LayChiTietRapPhimTheoID =(maHeThongRap)=>{
    return(dispatch)=>{
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
            method:'GET'

        }).then((result)=>{
            // console.log('jiji',result.data)
           dispatch({
               type: LAY_CHI_TIET_HE_THONG_RAP_THEOID,
               dsChiTietRapTheoID : result.data,
           })



        }).catch((err)=>{
            console.log(err);
        })
            
        
    }
    
}