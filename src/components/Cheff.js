import React from "react";

const Cheff = () => {

  const data = [
    {
      source: '/images/chef2.jpg',
      name: 'MARC'
    },
    {
      source: '/images/chef1.jpg',
      name: 'LOHAN'
    },
    {
      source: '/images/chef3.jpg',
      name: 'KRISH'
    },

  ]

  return (
    <div className="cheff">
      <h1>Talent and Experience</h1>
      <p>Team Members</p>
      <div className='block-chef'>
      {data.map(data => (
        <div className="chef">
          <img src={data.source} alt="chef" />
          <div className="name" >
          <h3>{data.name}</h3>
          <p>chef</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Cheff;
