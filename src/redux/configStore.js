import {applyMiddleware, combineReducers, createStore} from 'redux';
import QuanLyPhimReducer from './reducers/QuanLyPhimReducer';
import reduxThunk from 'redux-thunk';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer'
import QuanLyPhongVeReducer from './reducers/QuanLyPhongVeReducer'
import QuanLyRapPhimReducer from './reducers/QuanLyRapPhimReducer'
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    QuanLyPhongVeReducer,
    QuanLyRapPhimReducer,
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk));

export default store;

