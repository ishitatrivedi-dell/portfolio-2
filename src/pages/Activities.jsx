import { motion } from 'framer-motion';
import { useState } from 'react';
import { Book, Music, Map, PenTool, Heart, Brain, Coffee, Headphones, Globe, BookOpen, Music2, Plane, Pen } from 'lucide-react';

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      id: 1,
      title: "Reading Books",
      description: "Exploring worlds through literature and knowledge",
      icon: <BookOpen size={32} />,
      color: "from-blue-400 to-indigo-500",
      quotes: [
        "A reader lives a thousand lives before he dies.",
        "Books are a uniquely portable magic.",
        "Reading is dreaming with open eyes."
      ],
      details: "I find solace and wisdom in books, from classic literature to modern self-help. Each book is a journey that expands my perspective and enriches my understanding of the world and human nature."
    },
    {
      id: 2,
      title: "Music",
      description: "Finding rhythm and melody in everyday life",
      icon: <Music2 size={32} />,
      color: "from-purple-400 to-pink-500",
      quotes: [
        "Music is the universal language of mankind.",
        "Where words fail, music speaks.",
        "Life is a song, love is the music."
      ],
      details: "Music is my constant companion. From classical melodies to contemporary beats, I find that music has the power to transform moods, enhance focus, and provide a soundtrack to life's most precious moments."
    },
    {
      id: 3,
      title: "Traveling",
      description: "Discovering new places and cultures",
      icon: <Plane size={32} />,
      color: "from-green-400 to-teal-500",
      quotes: [
        "Travel is the only thing you buy that makes you richer.",
        "The world is a book, and those who do not travel read only one page.",
        "Adventure is worthwhile in itself."
      ],
      details: "Traveling opens my mind to new perspectives and experiences. Whether it's exploring bustling cities or serene landscapes, each journey teaches me something new about the world and myself."
    },
    {
      id: 4,
      title: "Journaling",
      description: "Documenting thoughts and personal growth",
      icon: <Pen size={32} />,
      color: "from-amber-400 to-orange-500",
      quotes: [
        "Journaling is like whispering to one's self and listening at the same time.",
        "Write what should not be forgotten.",
        "The life of every man is a diary in which he means to write one story..."
      ],
      details: "Journaling is my sacred practice of self-reflection. It helps me process thoughts, track personal growth, and preserve memories. Each entry is a conversation with my inner self."
    },
    {
      id: 5,
      title: "Self-Reflection",
      description: "Finding clarity in solitude and introspection",
      icon: <Brain size={32} />,
      color: "from-rose-400 to-red-500",
      quotes: [
        "Knowing yourself is the beginning of all wisdom.",
        "The quieter you become, the more you can hear.",
        "In solitude, where we are least alone."
      ],
      details: "Taking time to sit alone and listen to my inner voice is essential for my mental clarity and emotional well-being. These moments of quiet contemplation help me understand myself better and make aligned decisions."
    }
  ];

  const currentActivity = activities.find(a => a.id === selectedActivity);

  return (
    <div className="min-h-screen bg-dark text-white px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 font-heading">
            Beyond <span className="gradient-text">Code</span>
          </h1>
          <p className="text-xl text-gray-light max-w-3xl mx-auto font-body">
            Exploring the activities that nourish my soul and shape who I am beyond the world of technology
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Activities Grid */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white font-heading mb-4">My Passions</h2>
              <p className="text-gray-light font-body">
                Click on any activity to explore my thoughts and experiences
              </p>
            </motion.div>

            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedActivity(activity.id)}
                className={`glass rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  selectedActivity === activity.id 
                    ? 'border-primary-light bg-primary/10' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  >
                    {activity.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">
                      {activity.title}
                    </h3>
                    <p className="text-gray-light font-body">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Activity Details */}
          <div className="lg:sticky lg:top-20 h-fit">
            {currentActivity ? (
              <motion.div
                key={currentActivity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-8 border border-primary/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentActivity.color} flex items-center justify-center text-white shadow-xl`}>
                    {currentActivity.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white font-heading">
                      {currentActivity.title}
                    </h3>
                    <p className="text-primary-light font-medium">
                      {currentActivity.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading flex items-center gap-2">
                      <Heart size={20} className="text-primary-light" />
                      Why I Love It
                    </h4>
                    <p className="text-gray-light font-body leading-relaxed">
                      {currentActivity.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 font-heading flex items-center gap-2">
                      <Book size={20} className="text-primary-light" />
                      Favorite Quotes
                    </h4>
                    <div className="space-y-3">
                      {currentActivity.quotes.map((quote, index) => (
                        <motion.blockquote
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="border-l-4 border-primary/40 pl-4 italic text-gray-light"
                        >
                          "{quote}"
                        </motion.blockquote>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass rounded-2xl p-8 border border-primary/20 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Heart size={32} className="text-primary-light" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Choose an Activity
                </h3>
                <p className="text-gray-light font-body">
                  Click on any activity from the left to explore my thoughts and experiences about it.
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                My <span className="gradient-text">Philosophy</span>
              </h2>
              <p className="text-gray-light font-body max-w-2xl mx-auto">
                Balance between professional growth and personal well-being is the key to a fulfilling life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20"
              >
                <Coffee size={32} className="mx-auto mb-4 text-primary-light" />
                <h3 className="text-lg font-bold text-white mb-2 font-heading">Mindful Living</h3>
                <p className="text-sm text-gray-light font-body">
                  Being present in each moment and finding joy in simple pleasures
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20"
              >
                <Brain size={32} className="mx-auto mb-4 text-primary-light" />
                <h3 className="text-lg font-bold text-white mb-2 font-heading">Continuous Growth</h3>
                <p className="text-sm text-gray-light font-body">
                  Learning from every experience and constantly evolving as a person
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20"
              >
                <Heart size={32} className="mx-auto mb-4 text-primary-light" />
                <h3 className="text-lg font-bold text-white mb-2 font-heading">Authentic Connections</h3>
                <p className="text-sm text-gray-light font-body">
                  Building meaningful relationships and staying true to myself
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">50+</div>
                <div className="text-sm text-gray-light">Books Read</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">100+</div>
                <div className="text-sm text-gray-light">Playlists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">15+</div>
                <div className="text-sm text-gray-light">Places Visited</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-light mb-2">365</div>
                <div className="text-sm text-gray-light">Days of Journaling</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;
