import './ProductItem.css'
import Card from "../Card";
import RatingBar from "../RatingBar";
import {ProductItemModel} from "../../models/Product";


const ProductItem = () => {
  return (
      <Card>
        <div className={"product-item"}>
          <div className={"product-avatar"}>
            <img src="https://cdn.tgdd.vn/Products/Images/42/326016/vivo-y28-vang-thumb-600x600.jpg"
                 alt=""/>
          </div>
          <div className={"product-info"}>
            <RatingBar rating={4}/>
            <div className={"product-title"}>
              <a href="">
                Xiaomi Redmi 12
              </a>
            </div>
            <div className={"product-price"}>
              <div className={"sale-price"}>
                Khuyến Mãi: <strong>3.200.000 VNĐ</strong>
              </div>
              <div className={"price price-with-sale"}>
                Giá gốc: <strong>4.200.000 VNĐ</strong>
              </div>
              <div className={"save-rate"}>
                Tiết kiệm: <strong>1.000.000 VNĐ</strong>
              </div>
            </div>
          </div>
          <div className={"percent-off"}>
            -50%
          </div>
        </div>
      </Card>
  )
}


export default ProductItem
