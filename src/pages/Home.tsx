import { motion } from "motion/react";
import { ArrowRight, Leaf, Sparkles, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers, portfolioPhotos } from "../data";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-8 max-w-7xl mx-auto pb-20">
      
      {/* HERO & PHILOSOPHY SECTION (Bento Grid 1) */}
      <section id="home" className="mb-16 mt-8">
        <div className="bento-grid">
          {/* Main Hero Card (Tomato) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card card-tomato flex justify-center"
          >
            <div className="label">Philosophy / 理念</div>
            <h2 className="text-4xl font-black leading-tight mt-2 flex-grow">
              多汁且饱满<br/>
              鲜活而热烈。
            </h2>
            <p className="mt-4 opacity-90 text-lg mb-8">
              我们是番茄跟拍。摒弃僵硬的摆拍，<br/>我们用水果般的色彩与蔬菜般的生机，<br/>记录你最自然的发光时刻。
            </p>
            <div className="flex gap-4">
              <a href="#portfolio" className="bg-brand-tomato text-white px-6 py-3 rounded-full font-bold hover:bg-brand-tomato/90 transition-colors shadow-[2px_2px_0_0_rgba(34,34,34,1)] border-2 border-brand-dark">
                查看作品
              </a>
              <a href="#contact" className="bg-brand-dark text-white px-6 py-3 rounded-full font-bold hover:bg-brand-dark/90 transition-colors border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(255,255,255,1)] hidden sm:block">
                预约拍摄
              </a>
            </div>
          </motion.div>

          {/* Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card card-cream p-0 relative min-h-[300px]"
          >
             <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" 
                alt="Happy energetic photoshoot" 
                className="w-full h-full object-cover absolute inset-0"
              />
             <div className="absolute top-4 right-4 bg-brand-dark text-white px-4 py-2 rounded-full border-2 border-brand-dark font-bold text-sm shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                100% 自然抓拍
             </div>
          </motion.div>
          
          {/* Philosophy Cards */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="card card-cream flex flex-col items-center justify-center text-center"
          >
             <div className="w-12 h-12 bg-orange-100 text-brand-tomato rounded-full flex items-center justify-center mb-4 border-2 border-brand-dark">
               <Sparkles size={24} />
             </div>
             <h3 className="text-xl font-black mb-2">如番茄般热烈</h3>
             <p className="text-sm font-medium opacity-80">高饱和度色彩，充满感染力</p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="card card-leaf flex flex-col items-center justify-center text-center"
          >
             <div className="w-12 h-12 bg-white text-brand-leaf rounded-full flex items-center justify-center mb-4">
               <Leaf size={24} />
             </div>
             <h3 className="text-xl font-black mb-2">如绿叶般清新</h3>
             <p className="text-sm font-medium opacity-90">注重场景呼吸感与留白</p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="card card-yellow flex flex-col items-center justify-between p-8 text-center"
          >
             <div className="w-16 h-16 bg-white text-brand-yellow rounded-full flex items-center justify-center border-2 border-brand-dark flex-shrink-0 mb-4">
               <Sun size={32} />
             </div>
             <div>
               <h3 className="text-2xl font-black mb-2 text-brand-dark">如阳光般温暖</h3>
               <p className="text-sm font-medium opacity-80 text-brand-dark">擅长捕捉自然光斑，拒绝生硬闪光灯</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION (Bento Grid 2) */}
      <section id="team" className="mb-16 scroll-mt-24">
        <div className="text-center mb-8">
          <div className="label text-brand-leaf">Our Team</div>
          <h2 className="text-4xl font-black text-brand-dark">我们的“蔬菜市场”</h2>
        </div>

        <div className="bento-grid">
          {teamMembers.map((member, i) => {
            return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`card team-card`}
            >
              <Link to={`/member/${member.id}`} className="w-full flex flex-col items-center">
                <div className={`label ${
                  i === 0 ? 'text-brand-tomato' : 
                  i === 1 ? 'text-brand-leaf' : 'text-brand-yellow'
                }`}>
                  {member.role.split('/')[1] || member.role}
                </div>
                
                <div className="avatar">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-xl font-black">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600 mt-2 mb-4 line-clamp-2">
                  {member.bio}
                </p>
                
                <div className="px-4 py-2 bg-brand-bg rounded-full text-xs font-bold border-2 border-brand-dark flex items-center gap-1 hover:bg-black hover:text-white transition-colors">
                  查看详情 <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
            );
          })}
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="card card-cream flex flex-col items-center justify-between p-8 bg-[#f5f5f5]"
          >
             <div className="text-center">
               <h3 className="text-2xl font-black mb-2 text-brand-dark italic">JOIN US?</h3>
               <p className="text-sm font-medium opacity-80 text-brand-dark mb-4">工作室正在寻找一位对色彩敏感的视频剪辑师</p>
             </div>
             <a href="#contact" className="px-6 py-3 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-tomato hover:border-brand-tomato transition-colors border-2 border-brand-dark w-full text-center">
               发送简历
             </a>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION (Bento Grid 3) */}
      <section id="portfolio" className="scroll-mt-24">
        <div className="flex flex-col justify-between items-start mb-8 gap-4">
          <div>
              <div className="label text-brand-tomato">Portfolio</div>
              <h2 className="text-4xl font-black text-brand-dark">维系多巴胺瞬间</h2>
          </div>
          <button className="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-tomato transition-colors group">
            查看全部 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        <div className="bento-grid">
          {portfolioPhotos.map((photo, i) => {
            return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`card card-cream p-3 group cursor-pointer relative min-h-[250px]`}
            >
              <div className="w-full h-full rounded-xl overflow-hidden border-2 border-transparent group-hover:border-brand-dark transition-colors relative">
                <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white border-2 border-brand-dark px-4 py-2 rounded-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[4px_4px_0_0_rgba(34,34,34,1)]">
                <span className="text-brand-tomato font-black text-xs uppercase tracking-wider block mb-1">{photo.category}</span>
                <span className="text-brand-dark font-bold">{photo.title}</span>
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
