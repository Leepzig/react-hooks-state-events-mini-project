import React from "react";

function CategoryFilter(props) {



  const categoryArray = props.CATEGORIES.map(category => {
   return <button className={props.category === category ? "selected" : ""}name={category} key={props.addKey()} onClick={props.filter}>{category}</button>})

  return (


    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray}
    </div>
  );
}

export default CategoryFilter;
