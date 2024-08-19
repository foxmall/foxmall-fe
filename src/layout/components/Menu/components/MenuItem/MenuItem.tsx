import './MenuItem.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'

type MenuItemProps =  {
  title: string,
  active: boolean,
  dropDownItems?: DropDownItem[]
}

type DropDownItem = {
  title: string,
  link: string
}

const MenuItem = ({title, active, dropDownItems}: MenuItemProps) => {
  return (
      <div className={`menu-item ${active ? 'menu-item--active' : ''}`}>
        {title}
        <FontAwesomeIcon icon={faCaretDown} size={"lg"}
                         className={"menu-item__icon"}
        />
        {
          dropDownItems && (
                <div className="menu-item__dropdown">
                  {
                    dropDownItems.map(dropDownItem => {
                      return (
                          <a key={dropDownItem.title} href={dropDownItem.link}>{dropDownItem.title}</a>
                      )
                    })
                  }
                </div>
            )
        }
      </div>
  )
}

export default MenuItem
