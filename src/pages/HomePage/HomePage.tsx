import './HomePage.css'
import BestDeal from "./components/BestDeal/BestDeal";

const HomePage = () => {
  return (
      <div className={"home-page"}>
        <BestDeal
            products={[]}
        />
      </div>
  )
}

export default HomePage
