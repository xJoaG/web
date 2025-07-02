import React from 'react';
import { Star, Quote, CheckCircle, Award, Briefcase, GraduationCap } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Commander Sarah Rodriguez',
      role: 'Software Engineer at SpaceX',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'EduSphere transformed my career trajectory. The interactive 3D learning environment made complex algorithms feel like exploring new galaxies. I landed my dream job at SpaceX within 6 months of completing the advanced programming track!',
      rating: 5,
      course: 'Advanced Algorithms & Space Computing',
      achievement: 'Career Transformation',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      badge: 'Space Engineer'
    },
    {
      id: 2,
      name: 'Captain Marcus Johnson',
      role: 'Lead UI/UX Designer at NASA',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The design thinking course was phenomenal. Working with COSMOS AI felt like having a personal mission control guiding every step. The mentorship program connected me with industry experts who helped me navigate my career like a seasoned astronaut.',
      rating: 5,
      course: 'UI/UX Design for Space Interfaces',
      achievement: 'Design Leadership',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      badge: 'Design Commander'
    },
    {
      id: 3,
      name: 'Dr. Sarah Chen',
      role: 'Data Scientist at Tesla',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The machine learning curriculum is cutting-edge. Real-world projects and personalized AI feedback helped me master complex concepts faster than traditional methods. It\'s like having a supercomputer as your study buddy!',
      rating: 5,
      course: 'Machine Learning & AI Systems',
      achievement: 'AI Mastery',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      badge: 'AI Specialist'
    },
    {
      id: 4,
      name: 'Lieutenant David Kim',
      role: 'Blockchain Architect',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The blockchain development course was comprehensive and practical. I built 5 real projects and now run my own successful DeFi startup. The space-themed learning environment made complex concepts feel like an exciting mission!',
      rating: 5,
      course: 'Blockchain & Cryptocurrency Systems',
      achievement: 'Startup Success',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
      badge: 'Crypto Pioneer'
    },
    {
      id: 5,
      name: 'Major Lisa Wang',
      role: 'Cloud Architect at Microsoft',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'EduSphere\'s cloud architecture course gave me the skills and confidence to design enterprise-scale solutions. The hands-on labs were incredibly valuable, like conducting real space missions with cloud infrastructure.',
      rating: 5,
      course: 'Cloud Architecture & Space Systems',
      achievement: 'Enterprise Leadership',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      badge: 'Cloud Commander'
    },
    {
      id: 6,
      name: 'Captain Alex Thompson',
      role: '3D Artist at Pixar',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The 3D design course unlocked my creativity like discovering a new planet. From beginner to working at Pixar in less than a year. The interactive learning environment is simply out of this world!',
      rating: 5,
      course: '3D Design & Animation Mastery',
      achievement: 'Creative Excellence',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-500/10 to-pink-500/10',
      badge: '3D Virtuoso'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dynamic space background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-indigo-900/20"></div>
        {/* Floating stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <GraduationCap className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Mission Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Stories from
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Space Explorers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our graduates who have launched their careers into new orbits and achieved stellar success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-4 hover:shadow-2xl relative overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Space-themed background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                {/* Astronaut badge */}
                <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${testimonial.gradient} text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg`}>
                  <Award className="h-4 w-4" />
                  <span>{testimonial.badge}</span>
                </div>
                
                {/* Quote with space theme */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${testimonial.gradient} mb-6 shadow-lg`}>
                  <Quote className="h-6 w-6 text-white" />
                </div>
                
                {/* Rating with stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-400">({testimonial.rating}.0)</span>
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-200 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Mission completed */}
                <div className={`text-sm font-medium mb-6 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent flex items-center`}>
                  <CheckCircle className="inline h-5 w-5 mr-2 text-green-400" />
                  Mission: {testimonial.course}
                </div>

                {/* Achievement badge */}
                <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/10">
                  <div className="flex items-center space-x-2 text-green-400 text-sm font-semibold">
                    <Award className="h-4 w-4" />
                    <span>Achievement: {testimonial.achievement}</span>
                  </div>
                </div>

                {/* Astronaut profile */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white/20 group-hover:border-white/40 transition-colors duration-200"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}></div>
                    {/* Space rank indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                      <Briefcase className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors duration-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Mission status */}
                <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Mission Accomplished</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Launch Your Mission?</h3>
            <p className="text-gray-300 mb-8 text-lg">Join thousands of space explorers who have transformed their careers with EduSphere.</p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg text-lg">
              Begin Your Space Journey
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for space animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;