import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Input, Button, Table, Tooltip, message } from 'antd';
import { LayDanhSachNguoiDung, LayThongTinTaiKhoan, LayThongTinTaiKhoan2 } from '../../../redux/actions/QuanLyNguoiDungAction';
import { LayDanhSachRapPhim } from '../../../redux/actions/QuanLiRapPhimAction';

export default function LichSuDatVe() {
    const columns = [
        {
            title: 'Mã Vé',
            key: 'maVe',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.maVe}>
                    <span>{item.maVe}</span>
                </Tooltip>
            )
        },
        {
            title: 'Tên Phim',
            key: 'tenPhim',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.tenPhim}>
                    <span>{item.tenPhim}</span>
                </Tooltip>
            )
        },
        {
            title: 'Ngày Đặt',
            key: 'ngayDat',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.ngayDat}>
                    <span>{item.ngayDat}</span>
                </Tooltip>
            )
        },
        {
            title: 'Giá Vé',
            key: 'giaVe',
            render: (item) => (
                <Tooltip placement="topLeft" title={item.giaVe.toLocaleString()}>
                    <span>{item.giaVe.toLocaleString()}</span>
                </Tooltip>
            )
        },
        {
            title: 'Tên Rạp',
            key: 'tenHeThongRap',
            render: (item) => {
                let tenRap = item.danhSachGhe[0].tenHeThongRap;
                return <Tooltip placement="topLeft" title={tenRap}>
                    <span>{tenRap}</span>

                </Tooltip>
            }
        },
        {
            title: 'Phòng',
            key: 'tenRap',
            render: (item) => {
                let tenRap = item.danhSachGhe[0].tenRap;
                return <Tooltip placement="topLeft" title={tenRap}>
                    <span>{tenRap}</span>

                </Tooltip>
            }
        },
        {
            title: 'Ghế',
            key: 'danhSachGhe',
            render: (item) => {
                let tenGhe = item.danhSachGhe.map((item) => {
                    return item.tenGhe;
                }).join();
                return <Tooltip placement="topLeft" title={tenGhe}>
                    <span>{tenGhe}</span>
                </Tooltip>
            }
        }
    ];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LayThongTinTaiKhoan2(nguoiDungDcChon));
        // setUser2({
        //     upDate:nguoiDungDcChon
        // })
    
      }, [])
    const { thongTinTaiKhoan,nguoiDungDcChon } = useSelector((state) => state.QuanLyNguoiDungReducer);

   
    return (
       
            <div className="modal fade" id={`1${nguoiDungDcChon.taiKhoan}`} tabIndex={-1} role="dialog" aria-labelledby="lichsu" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{width:'1000px'}}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Lịch Sử Đặt Vé</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" style={{ color: 'red' }}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className='info_ticket'>
                <Table dataSource={thongTinTaiKhoan.thongTinDatVe} columns={columns} pagination={{ pageSize: 6 }} />

            </div>
                    </div>
                    <div className="modal-footer">

                    </div>
                </div>
            </div>
       
            {/* <div className='info_ticket'>
                <Table dataSource={thongTinTaiKhoan.thongTinDatVe} columns={columns} pagination={{ pageSize: 6 }} />

            </div> */}
        </div>
    )
}
