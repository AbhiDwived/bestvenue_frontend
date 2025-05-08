import Nikita from "../../assets//Images/femaleimage.png";
import Priya from "../../assets/Images/priya.png"
import React, { useState } from 'react';

const discussions = [
  {
    title: 'Wedding Hashtag Ideas for Vishal and Priya',
    content: 'My nickname is Pri and his is Vish and we are both accountants. Help!! We were thinking: #PriKVish…',
    author: 'Priya',
    date: '23 April, 2025 at 15:58',
    avatar: Priya
  },
  {
    title: 'Wedding Hashtag Ideas for Vishal and Priya',
    content: 'My nickname is Pri and his is Vish and we are both accountants. Help!! We were thinking: #PriKVish…',
    author: 'Priya',
    date: '23 April, 2025 at 15:58',
    avatar: Priya
  },
  {
    title: 'Wedding Hashtag Ideas for Vishal and Priya',
    content: 'My nickname is Pri and his is Vish and we are both accountants. Help!! We were thinking: #PriKVish…',
    author: 'Priya',
    date: '23 April, 2025 at 15:58',
    avatar: Priya
  },
  {
    title: 'Wedding hashtags for Nitin and Nisha',
    content: 'Please suggest some quirky and fun hashtags for Nitin and Nisha.',
    author: 'Nikita',
    date: '10 April, 2025 at 23:25',
    avatar: Nikita
  }
];

export default function Community() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className=" m-5">
      <h2 className="fw-bold mb-3">Community</h2>
      <p className="text-muted mb-4">
        Ask questions and get answers with the help of other people planning weddings.
      </p>

      {/* Cards */}
      <div className="row g-4">
        {discussions.map((item, index) => (
          <div className="col-12 col-md-6 d-flex flex-column" key={index}>
            <div
              className="border rounded shadow-sm p-4 h-100"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transition: 'all 0.3s ease',
                transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)'
              }}
            >
              <h5 className="fw-bold mb-2">{item.title}</h5>
              <p className="text-muted mb-0">{item.content}</p>
            </div>

            {/* Author info below card */}
            <div className="d-flex align-items-center mt-3">
              <img
                src={item.avatar}
                alt="avatar"
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div>
                <div className="fw-semibold">{item.author}</div>
                <small className="text-muted">{item.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button below all content */}
      <div className="mt-5 text-center">
        <button className="btn btn-outline-dark d-inline-flex align-items-center">
          Discover all discussions
          <span className="ms-2">&#8594;</span>
        </button>
      </div>
    </section>
  );
}


