import './Banner.css'
import banner from '../../../assets/img/banner.png'

const Banner = () => {
  return (
      <div className={"banner"}>
        <img className={"banner__img"} src={banner} alt=""/>
      </div>
  )
}

export default Banner
