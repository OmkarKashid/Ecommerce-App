import "../styles/CategoryCard.css";

function CategoryCard(props) {
  return (
    <div
      className="category-card"
      //style={{ backgroundImage: props.category.img }}
    >
      <div className="category-title">{props.category.title}</div>
    </div>
  );
}

export default CategoryCard;
