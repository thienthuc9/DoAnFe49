import React, { Component } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import ModalHOC from './ModalHOC'

export default class DemoHOC extends Component {


    render() {
        //this.props.children dùng nhận truyền giá trị từ cha sang con thông qua phần innerHTML của thẻ component (Thường dùng để truyền giao diện)
        return (
            <div>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    open login
                </button>

                <ModalHOC Component={Home} />
            </div>
        )
    }
}

