import React from 'react'

export default function PageNotFound(props) {
    return (
        <div>
            Không tìm thấy trang : {props.location.pathname}

            <button className="btn btn-danger" onClick={()=>{
                props.history.replace('/home');
            }}>Bấm vào đây trở về trang chủ</button>
        </div>
    )
}
