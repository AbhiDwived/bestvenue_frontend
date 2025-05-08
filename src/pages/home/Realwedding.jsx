import React from 'react';

const WeddingTools = () => {
  const cards = [
    {
      title: "Wedding venues",
      description: "Photos, reviews, and so much more... get in touch from here!",
      link: "https://www.weddingwire.in/wedding-venues",
      bgClass: "bg-rose-100",
    },
    {
      title: "Vendors",
      description: "Find the top-rated wedding vendors near you in every category.",
      link: "https://www.weddingwire.in/wedding-vendors",
      bgClass: "bg-yellow-100",
    },
    {
      title: "Your free wedding website",
      description: "Share your wedding details - and your love story - with a customisable website.",
      link: "https://www.weddingwire.in/wedding-website",
      icon: "https://cdn1.weddingwire.in/assets/svg/original/illustration/websites.svg",
    },
    {
      title: "Infinite inspiration",
      description: "All the freshest wedding inspiration, trends and ideas in one place.",
      link: "https://www.weddingwire.in/wedding-tips",
      icon: "https://cdn1.weddingwire.in/assets/svg/original/illustration/lightbulb.svg",
    },
    {
      title: "Planning tools",
      description: "Custom planning tools to manage your checklist, budget, guests and vendors.",
      link: "https://www.weddingwire.in/my-wedding-planner",
      icon: "https://cdn1.weddingwire.in/assets/svg/original/illustration/notebook.svg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className=" mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Enjoy planning your wedding</h2>
          <p className="text-gray-600 mt-2">Start planning your wedding with us, it's free!</p>
        </div>

        {/* Cards: Scrollable on mobile */}
        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-pl-4 snap-x snap-mandatory md:snap-none px-1">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`min-w-[80%] md:min-w-0 snap-start rounded-xl shadow-md p-6 flex flex-col justify-between ${
                  card.bgClass || 'bg-white'
                }`}
              >
                {card.icon && (
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-14 h-14 mb-4"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                </div>
                <a
                  href={card.link}
                  className="text-red-600 font-medium hover:underline mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.title.includes('website') ? 'Personalise your free website' :
                  card.title.includes('venues') ? 'Explore venues' :
                  card.title.includes('Vendors') ? 'Start your search' :
                  card.title.includes('tools') ? 'Discover our tools' :
                  'Get inspired here'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingTools;
