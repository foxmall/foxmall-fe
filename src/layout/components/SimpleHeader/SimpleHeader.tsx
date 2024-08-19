import './SimpleHeader.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBoxArchive,
  faList
} from '@fortawesome/free-solid-svg-icons'

const SimpleHeader = () => {
  return (
      <div className={"simple-header"}>
        <p>
          Chào mừng bạn tới trung tâm thương mại điện tử FoxMall!
        </p>
        <div className={"simple-header__left"}>
          <div className={"simple-header__left-item"}>
            <FontAwesomeIcon icon={faLocationDot} size={"lg"}
                             style={{marginRight: "10px", color: "FF8870"}}/>
            Vận chuyển tới <strong>987 Tam Trinh</strong>
          </div>
          <div className={"simple-header__left-item"}>
            <FontAwesomeIcon icon={faList} size={"lg"}
                             style={{marginRight: "10px", color: "FF8870"}}/>
            Theo dõi đơn hàng
          </div>
          <div className={"simple-header__left-item"}>
            <FontAwesomeIcon icon={faBoxArchive} size={"lg"}
                             style={{marginRight: "10px", color: "FF8870"}}/>
            Khuyến mãi
          </div>
        </div>
      </div>
  )
}

export default SimpleHeader
