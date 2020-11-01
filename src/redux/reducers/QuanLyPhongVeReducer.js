const { LAY_DANH_SACH_GHE, LAY_DANH_SACH_GHE_SAU } = require("../constants/QuanLyPhongVeConstant");

const initialState = {
    danhSachGhe: [],
    gheDcChon:[],
}
const QuanLyPhongVeReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LAY_DANH_SACH_GHE: {
            state.danhSachGhe = actions.danhSachGhe
            return { ...state };
        }
        case "DAT_GHE":{
            const danhSachGhe = [...state.danhSachGhe]
            const index = danhSachGhe.findIndex((ghe)=>ghe.maGhe === actions.ghe.maGhe);
            danhSachGhe[index] = {...danhSachGhe[index], dangChon: !danhSachGhe[index].dangChon};
            const gheDcChon = [...state.gheDcChon]
            if(actions.ghe.dangChon){
                gheDcChon.splice(actions.index,1);
                console.log(actions.index)


            }else{
                gheDcChon.push(actions.ghe);

            }
            state.gheDcChon = gheDcChon;
            console.log(state.gheDcChon)
            return {...state, danhSachGhe,gheDcChon}
            };
        // case LAY_DANH_SACH_GHE_SAU:{
        //     state.dsGheSau = actions.dsGheSau
        //     return { ...state };
        // }    


        default:
            return state;
    }
}
export default QuanLyPhongVeReducer;