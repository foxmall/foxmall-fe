import './BestDeal.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import {ProductItem} from "../../../../common/models/Product";

type BestDealProps = {
  products: ProductItem[]
}

const BestDeal = ({products}: BestDealProps) => {
  return (
      <>
        <h2>Best Deal</h2>
        <Swiper
            loop={true}
            autoplay={{
              delay: 3000
            }}
            speed={1200}
            slidesPerView={3}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay]}
            className="bestDealsSwipper"
        >
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg" alt=""/>
          </SwiperSlide>
        </Swiper>
      </>
  )
}

export default BestDeal
