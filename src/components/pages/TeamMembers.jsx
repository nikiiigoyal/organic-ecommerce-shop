/* eslint-disable react/prop-types */
const TeamMember = ({ image, name, role, socialLinks }) => (
  <>
    <div className="bg-white rounded-lg shadow-md overflow-hidden font-poppins">
      <div className="relative group">
        <img src={image} alt={name} className="w-full h-64 object-cover"></img>
        {socialLinks && (
          <div className="absolute bottom-4 left-4 space-x-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="inline-flex items-center justify-center w-8 h-8 bg-[#00B207] rounded-full hover:bg-[#00a006] transition-colors"
              >
                <img src={link.icon} alt={link.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#1A1A1A]">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </>
);

const TeamSection = () => {
  const teamMembers = [
    {
      image: '/images/teamImg.png',
      name: 'Jenny Wilson',
      role: 'Ceo & Founder',
      socialLinks: [
        { name: 'Twitter', icon: '/images/insta.png', url: '#' },
        { name: 'Pinterest', icon: '/images/insta.png', url: '#' },
        { name: 'Instagram', icon: '/images/insta.png', url: '#' },
      ],
    },
    {
      image: '/images/teamImg.png',
      name: 'Jane Cooper',
      role: 'Worker',
    },
    {
      image: '/images/teamImg.png',
      name: 'Cody Fisher',
      role: 'Security Guard',
    },
    {
      image: '/images/teamImg.png',
      name: 'Robert Fox',
      role: 'Senior Farmer Manager',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Awesome Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>
      </div>
      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
