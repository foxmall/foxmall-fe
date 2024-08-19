import './Menu.css'
import MenuItem from "./components/MenuItem/MenuItem";


const Menu = () => {
  return (
      <div className={"menu"}>
        <MenuItem
            title={'Điện thoại và máy tính bảng'}
            active={false}
            dropDownItems={
              [
                    {
                          title: 'Điện thoại',
                          link: ''
                    },
                    {
                          title: 'Máy tính bảng',
                          link: ''
                    }
              ]
            }
        />
        <MenuItem
            title={'Máy tính và laptop'}
            active={false}
        />
        <MenuItem
            title={'Đồ điện tử gia đinh'}
            active={false}
        />
        <MenuItem
            title={'Mẹ và bé'}
            active={false}
        />
        <MenuItem
            title={'Thời trang nam'}
            active={false}
        />
        <MenuItem
            title={'Thời trang nữ'}
            active={false}
        />
        <MenuItem
            title={'Thiết bị văn phòng'}
            active={false}
        />
        <MenuItem
            title={'Đồ gia dụng'}
            active={true}
        />
      </div>
  )
}

export default Menu
