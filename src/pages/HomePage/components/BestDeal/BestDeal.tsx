import './BestDeal.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import {ProductItemModel} from "../../../../common/models/Product";
import ProductItem from "../../../../common/components/ProductItem/ProductItem";

type BestDealProps = {
  products: ProductItemModel[]
}

const BestDeal = ({products}: BestDealProps) => {
  return (
      <div className={"best-deals"}>
        <h2>Best Deal</h2>
        <Swiper
            loop={true}
            autoplay={{
              delay: 3000
            }}
            speed={1200}
            slidesPerView={4}
            spaceBetween={5}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay]}
            className="bestDealsSwipper"
        >
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem></ProductItem>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default BestDeal
