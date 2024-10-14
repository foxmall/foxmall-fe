import './RatingBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faStar
} from '@fortawesome/free-solid-svg-icons'

type RatingBarProps = {
  rating: number
}

const RatingBar = ({rating}: RatingBarProps) => {
  const stars = [1, 2, 3, 4, 5]
  return (
      <div className={"rating-bar"}>
        {
          stars.map(star => {
            if(star <= rating){
              return <FontAwesomeIcon icon={faStar} size={"lg"} className={"search-bar__icon"}
                                      style={{marginRight: "10px", color: "FF8870"}}/>
            }
            return <FontAwesomeIcon icon={faStar} size={"lg"} className={"search-bar__icon"}
                                    style={{marginRight: "10px", color: "grey"}}/>
          })
        }
      </div>
  )
}

export default RatingBar
