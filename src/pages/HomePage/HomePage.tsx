import './HomePage.css'
import BestDeal from "./components/BestDeal/BestDeal";
import TopCategories from "./components/TopCategories/TopCategories";
import TopElectronicBrand from "./components/TopElectronicBrands/TopElectronicBrand";

const HomePage = () => {
  return (
      <div className={"home-page"}>
        <BestDeal
            products={[]}
        />
        <TopCategories/>
        <TopElectronicBrand/>
      </div>
  )
}

export default HomePage
