import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Form, Input, Select, message, Tooltip, Popconfirm, Tag } from 'antd';
import AddUser from './AddUser';

import { useDispatch, useSelector } from 'react-redux';
import { LayDanhSachNguoiDung, XoaNguoiDung, chinhSuaNguoiDung, CapNhatNguoiDungAdmin, TimKiemNguoiDung, LayThongTinTaiKhoan, LayThongTinTaiKhoan2 } from '../../../redux/actions/QuanLyNguoiDungAction'
import UpdateUser from './UpdateUser';
import LichSuDatVe from './LichSuDatVe';
const { Option } = Select;

// const formItemLayout = {
//     labelCol: {
//       xs: { span: 24 },
//       sm: { span: 7 },
//     },
//     wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 17 },
//     },
// };

// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//         span: 24,
//         offset: 0,
//         },
//         sm: {
//         span: 16,
//         offset: 8,
//         },
//     },
// };



export default function StickyHeadTable() {
  const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDt',
      key: 'soDt',
    },
    {
      title: 'Loại',
      key: 'maLoaiNguoiDung',
      dataIndex: 'maLoaiNguoiDung',
      //   render: tags => (
      //     <>
      //       {tags.map(tag => {
      //         let color = 'green';
      //         if (tag === 'QuanTri') {
      //           color = 'volcano';
      //           tag = 'Quản Trị';
      //         } else {
      //             tag = 'Khách Hàng';
      //         }
      //         return (
      //           <Tag color={color} key={tag}>
      //             {tag.toUpperCase()}
      //           </Tag>
      //         );
      //       })}
      //     </>
      //   ),
    },
    {
      title: 'Chức Năng',
      key: 'action',
      render: (item) => {
        return <Space size="middle">
          <button data-toggle="modal" data-target={`#1${item.taiKhoan}`} className='btn btn-warning' onClick={() => LichSu(item)} >Lịch sử</button>
          <button data-toggle="modal" data-target={`#${item.taiKhoan}`} className="btn btn-primary" onClick={() => dispatch(chinhSuaNguoiDung(item))} >Cập nhật</button>
          <Popconfirm
            className="ant-btn-danger"
            title="Bạn muốn xóa người dùng này?"
            okText="Có"
            cancelText="Hủy"
            onConfirm={() => DeleteUser(item.taiKhoan)}
          >
            <button className='btn btn-danger'>Xóa</button>
          </Popconfirm>
        </Space>
      },
    },
  ];
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(LayDanhSachNguoiDung());
    // setUser2({
    //     upDate:nguoiDungDcChon
    // })

  }, [])

  const { dsNguoiDung, } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log(dsNguoiDung)

  const DeleteUser = (taiKhoan) => {
    dispatch(XoaNguoiDung(taiKhoan))
    // useEffect(()=>{
    //     dispatch(LayDanhSachNguoiDung())

    // },[])
  }
  const LichSu = (item)=>{
    dispatch(chinhSuaNguoiDung(item))
    dispatch (LayThongTinTaiKhoan2(item.taiKhoan))
  }



  return (
    <>
      <AddUser></AddUser>

      <Table style={{ marginTop: '15px' }} pagination={{ pageSize: 10 }} size="middle" columns={columns} dataSource={dsNguoiDung} className="table__users" />
      <UpdateUser></UpdateUser>
      <LichSuDatVe></LichSuDatVe>

    </>
  );
}