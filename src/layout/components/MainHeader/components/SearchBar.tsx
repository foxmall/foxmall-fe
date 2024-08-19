import './SearchBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faSearch,
    faList
} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
      <div className={"search-bar"}>
        <div className={"search-bar__icon-search"}>
          <FontAwesomeIcon icon={faSearch} size={"lg"} className={"search-bar__icon"}
                           style={{marginRight: "10px", color: "FF8870"}}/>
        </div>
        <div className={"search-bar__icon-history"}>
          <FontAwesomeIcon icon={faList} size={"lg"} className={"search-bar__icon"}
                           style={{marginRight: "10px", color: "FF8870"}}/>
        </div>
        <input type="text"
               className={"search-bar__input"}
               placeholder={"Bạn muốn tìm kiếm gì hôm nay?"}
        />
      </div>
  )
}

export default SearchBar
