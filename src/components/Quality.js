import React from "react";

const Quality = () => {
  const content = [
    {
      icon: <i class="fa-solid fa-bowl-food"></i>,
      title: "High Quality Foods",
    },
    {
      icon: <i class="fa-solid fa-wine-glass-empty"></i>,
      title: "Inspiring Recipes",
    },
    {
      icon: <i class="fa-solid fa-plate-wheat"></i>,
      title: "Salutary Meal",
    },
    {
      icon:<i class="fa-solid fa-kitchen-set"></i>,
      title: "Vetaran Staff",

    },
    {
      icon: <i class="fa-solid fa-drumstick-bite"></i>,
      title: "Pristine Ingredients",
      
    },
    {
      icon: <i class="fa-solid fa-truck"></i>,
      title: "Express Delivery",

    },
  ];

  return (
    <div className="quality">
      <h1>For your confort</h1>
      <h3>stunning things</h3>
      <div className="container">
        {content.map((data) => (
          <div className="food">
           <i> {data.icon}</i>
            <h2>{data.title}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              provident nobis perferendis.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;
