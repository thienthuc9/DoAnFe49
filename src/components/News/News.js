import React from 'react'
import './New.css'
export default function News() {
    return (
        <div className='container news'>
            <h1 style={{ textAlign: 'center' }}>Tin Tức</h1>
            <div className='row'>
                <div className='col-6'>
                    <a target='_blank' href='https://zingnews.vn/amber-heard-co-the-bi-gach-ten-khoi-aquaman-sau-phan-hai-post1154814.html'>
                        <img style={{ width: '100%' }} src='https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_11_19/Mera_Amber_Heard_1280x720.jpg'></img>
                        <h3>Amber Heard có thể bị gạch tên khỏi ‘Aquaman’ sau phần hai</h3>
                        <p>Một nguồn tin cho biết Warner Bros. muốn chờ diễn biến vụ kiện giữa Johnny Depp và Amber Heard trước khi đưa ra quyết định về tương lai số phận nhân vật Mera.</p>
                    </a>
                </div>
                <div className='col-6'>
                    <a target='_blank' href='https://zingnews.vn/lien-minh-cong-ly-cua-zack-snyder-chi-co-bon-phut-quay-moi-post1152961.html'>
                        <img style={{ width: '100%' }} src='https://znews-photo.zadn.vn/w660/Uploaded/ngogtn/2020_11_14/justiceleague.0.0.jpg'></img>
                        <h3>‘Liên minh công lý’ của Zack Snyder chỉ có bốn phút quay mới</h3>
                        <p>Đạo diễn Zack Snyder tiết lộ ông chỉ quay thêm bốn phút nội dung mới cho phiên bản “Justice League” phát hành trực tuyến trong 2021.</p>
                    </a>
                </div>

            </div>
            <div className='row'>
                <div className='col-4'>
                    <a target='_blank' href='https://zingnews.vn/lien-minh-cong-ly-cua-zack-snyder-chi-co-bon-phut-quay-moi-post1152961.html'>
                        <img style={{ width: '100%' }} src='https://i1-ione.vnecdn.net/2020/11/18/1-1605666312-1190-1605668731.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=U_PlSn_dzjdCFsOR6ElHbg'></img>
                        <h3>Marvel Studios không có ý định hồi sinh Tony Stark</h3>
                        <p>Lãnh đạo Marvel Studios giải đáp thắc mắc của người hâm mộ về khả năng nhân vật Người Sắt quay trở lại Vũ trụ Điện ảnh Marvel.</p>
                    </a>
                </div>
                <div className='col-4'>
                    <a target='_blank' href='https://zingnews.vn/lien-minh-cong-ly-cua-zack-snyder-chi-co-bon-phut-quay-moi-post1152961.html'>
                        <img style={{ width: '97%' }} src='https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_11_18/0aa9b8d1f3520e244064af814b021870.jpg'></img>
                        <h3>Loạt bom tấn ‘Transformers’ có đạo diễn mới </h3>
                                                                       
                        <p>Steven Caple Jr. - đạo diễn của “Creed II” - hiện được nhà sản xuất nhắm cho vị trí đạo diễn bộ phim tiếp theo</p>
                    </a>
                </div>
                <div className='col-4'>
                    <a target='_blank' href='https://zingnews.vn/lien-minh-cong-ly-cua-zack-snyder-chi-co-bon-phut-quay-moi-post1152961.html'>
                        <img style={{ width: '100%' }} src='https://i1-ione.vnecdn.net/2020/11/18/pr2-1605671136-1605671144-4774-1605671396.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GcM3q5BqVlQx6BbOWEdDqA'></img>
                        <h3>'Cậu Vàng' tung trailer, khán giả tranh cãi </h3>
                        <p>Trailer 'Cậu Vàng' u ám hơn nhiều, diễn xuất của 'vai chính' là chú chó Shiba một lần nữa tạo ra tranh cãi cho khán giả.</p>
                    </a>
                </div>

            </div>

        </div>
    )
}
