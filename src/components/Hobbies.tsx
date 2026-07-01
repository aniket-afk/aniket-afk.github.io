import React from 'react';
import { Trophy, Heart, Users, Camera } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Tennis Player',
      description: 'Passionate about tennis, playing regularly and constantly improving my game. Love the strategy and athleticism of the sport.',
      icon: <Trophy className="h-8 w-8" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'FC Barcelona Fan',
      description: 'Lifelong supporter of FC Barcelona. Been following the club for years, watching matches and celebrating the beautiful game.',
      icon: <Heart className="h-8 w-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Football Enthusiast',
      description: 'Love watching football matches, analyzing tactics, and following the latest developments in the world of football.',
      icon: <Users className="h-8 w-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sports Photography',
      description: 'Capturing moments in sports, especially tennis and football. Love documenting the passion and energy of athletic competition.',
      icon: <Camera className="h-8 w-8" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="hobbies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Hobbies & Interests
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond data and technology, I'm passionate about sports and capturing life's beautiful moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="card overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-2xl ${hobby.bgColor} ${hobby.color}`}>
                    {hobby.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {hobby.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;