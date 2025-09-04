import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { movieData } from './data/movieData.js'
import './App.css'

// 画像のインポート
import moviePoster from './assets/movie_poster.png'
import silas from './assets/Whisk_7485f63a68.jpg'
import lily from './assets/Whisk_23038efb10.jpg'
import finalImage from './assets/Whisk_29b4f2f9a9(1).jpg'

// ギャラリー画像のインポート
import gallery1 from './assets/Whisk_863fa235a7.jpg'
import gallery2 from './assets/Whisk_23038efb10.jpg'
import gallery3 from './assets/Whisk_37244681b5.jpg'
import gallery4 from './assets/Whisk_a018b30164.jpg'
import gallery5 from './assets/Whisk_aa1c87d0a9.jpg'
import gallery6 from './assets/Whisk_fce51168fd.jpg'
import gallery7 from './assets/Whisk_7485f63a68.jpg'
import gallery8 from './assets/Whisk_33f2356854.jpg'
import gallery9 from './assets/Whisk_29b4f2f9a9(1).jpg'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9]

function App() {
  const { scrollYProgress } = useScroll()
  const [scrollY, setScrollY] = useState(0)

  // スクロール位置の監視
  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', updateScrollY)
    return () => window.removeEventListener('scroll', updateScrollY)
  }, [])

  // パララックス効果
  const posterY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const posterOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ヒーローセクション - ポスター背景 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: posterY, opacity: posterOpacity }}
        >
          <img 
            src={moviePoster} 
            alt="The Open Cage Poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl">
            {movieData.title.japanese}
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-amber-200 drop-shadow-lg">
            {movieData.title.english}
          </h2>
          <motion.div 
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            記憶と解放をめぐる、あまりにも美しく、切ないファンタジー
          </motion.div>
        </motion.div>

        {/* スクロール指示 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* コンセプトセクション */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-black to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-12 text-amber-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {movieData.concept.title}
          </motion.h2>
          
          <div className="space-y-8">
            {movieData.concept.mainQuestions.map((question, index) => (
              <motion.p 
                key={index}
                className="text-2xl md:text-3xl font-medium text-white leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {question}
              </motion.p>
            ))}
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {movieData.concept.description}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* ストーリーセクション */}
      <motion.section 
        className="min-h-screen px-4 py-20 bg-gradient-to-b from-gray-900 to-slate-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-amber-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            STORY
          </motion.h2>

          {/* Introduction */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              {movieData.story.introduction.title}
            </h3>
            <div className="space-y-6">
              {movieData.story.introduction.content.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              {movieData.story.main.title}
            </h3>
            <div className="space-y-8">
              {movieData.story.main.content.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-base md:text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* キャラクターセクション */}
      <motion.section 
        className="min-h-screen px-4 py-20 bg-gradient-to-b from-slate-800 to-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-amber-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHARACTERS
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {movieData.characters.map((character, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={index === 0 ? silas : lily} 
                    alt={character.name}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  {character.name}
                </h3>
                <p className="text-lg text-amber-200 mb-2">
                  {character.age}
                </p>
                <p className="text-xl font-medium text-amber-300 mb-4">
                  {character.subtitle}
                </p>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {character.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ギャラリーセクション */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-amber-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            GALLERY
          </motion.h2>

          <motion.div 
            className="overflow-x-auto pb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-6 w-max">
              {movieData.gallery.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex-shrink-0 w-80 h-60 relative overflow-hidden rounded-lg shadow-2xl group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={galleryImages[index]} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 最終メッセージセクション */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4 py-20 bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={finalImage} 
            alt="Final Message"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-amber-300 mb-8 drop-shadow-2xl"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.5)",
                "0 0 40px rgba(251, 191, 36, 0.8)",
                "0 0 20px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {movieData.finalMessage.text}
          </motion.h2>
          
          <motion.div 
            className="text-xl md:text-2xl text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            映画『開かれた鳥籠』
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default App

