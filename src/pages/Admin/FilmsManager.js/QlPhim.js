import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhimApiAction, XoaPhim, chinhSuaPhim } from '../../../redux/actions/QuanLyPhimAction';
import moment from 'moment';

import { Table, Space, Button, Modal, Form, Input, Select, message, Tooltip, Popconfirm, Tag } from 'antd';
import { NavLink } from 'react-router-dom';
import UpdateFilms from './UpdateFilms';
import AddFilms from './AddFilms';
export default function QlPhim() {
    const columns = [
        {
          title: 'Mã Phim',
          dataIndex: 'maPhim',
          key: 'maPhim',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Tên Phim',
          dataIndex: 'tenPhim',
          key: 'tenPhim',
        },
        {
          title: 'Hình Ảnh',
          dataIndex: 'hinhAnh',
          key: 'hinhAnh',
          render: (item) => {
            return <img width={'100px'} height={'100px'} src={item} alt={item} />
        }
        },
        {
            title: 'Ngày Khởi Chiếu',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
            render:(item)=>{
                return <a> {moment(item.ngayKhoiChieu).format('DD-MM-YYYY')}</a>
            }
        },
        {
            title: 'Đánh Giá',
            dataIndex: 'danhGia',
            key: 'danhGia',
        },
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
        
        {
          title: 'Chức Năng',
          key: 'action',
          render: (item) => {
                return  <Space size="middle">
                                    <NavLink  to={`/admin/films/${item.maPhim}`} className='btn btn-success ml-2'>Thêm Lịch Chiếu</NavLink>
                            <button data-toggle="modal" data-target={`#${item.maPhim}`} className='btn btn-primary'  onClick={() => dispatch(chinhSuaPhim(item))} >Cập nhật</button>
                            <Popconfirm 
                                className="ant-btn-danger" 
                                title="Bạn muốn xóa phim này?" 
                                okText="Có" 
                                cancelText="Hủy"
                                onConfirm={() => DeletePhim(item.maPhim)}
                            >
                                <button className='btn btn-danger'>Xóa</button>
                            </Popconfirm>
                        </Space>
          },
        },
      ];
      const { dsPhim } = useSelector((state) => state.QuanLyPhimReducer)
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(layDanhSachPhimApiAction())
      }, [])
      const DeletePhim = (maPhim) => {
          dispatch(XoaPhim(maPhim))
      }
    return (
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <AddFilms></AddFilms>
                    <Table pagination={{ pageSize: 10 }} size="middle" columns={columns} dataSource={dsPhim} className="table__users"/>
                    <UpdateFilms></UpdateFilms>
                    </div>
       
    )
}
