import './CategoryCard.css'

type CategoryCardProps = {
  avatar: any,
  title: string
}

const CategoryCard = ({
    avatar,
    title
                      }: CategoryCardProps) => {
  return (
      <div className={"category-card"}>
        <div className={"category-card__circle"}>
          <img src={avatar} alt=""/>
        </div>
        <div className={"category-card__title"}>
          {title}
        </div>
      </div>
  )
}

export default CategoryCard
