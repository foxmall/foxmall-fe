import './TopCategories.css'
import CategoryCard from "../CategoryCard/CategoryCard";

import mobileCate from '../../../../assets/img/top_categories_mobile.png'
import cosmeticCate from '../../../../assets/img/top_categories_cosmetics.png'
import watchCate from '../../../../assets/img/top_categories_watchs.png'


const TopCategories = () => {
  return (
      <div className={"top-categories"}>
        <h2>Top Categories</h2>
        <div className={"top-categories__bar"}>
          <CategoryCard
              avatar={mobileCate}
              title={'Điện thoại di động'}
          />
          <CategoryCard
              avatar={cosmeticCate}
              title={'Mỹ phẩm cho nữ'}
          />
          <CategoryCard
              avatar={watchCate}
              title={'Đồng hồ thông minh'}
          />
          <CategoryCard
              avatar={mobileCate}
              title={'Điện thoại di động'}
          />
          <CategoryCard
              avatar={cosmeticCate}
              title={'Mỹ phẩm cho nữ'}
          />
          <CategoryCard
              avatar={watchCate}
              title={'Đồng hồ thông minh'}
          />
        </div>
      </div>
  )
}

export default TopCategories
