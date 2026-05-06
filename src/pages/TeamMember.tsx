import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Image as ImageIcon, Film, User, Heart, Briefcase, Baby } from "lucide-react";
import { teamMembers } from "../data";
import React, { useEffect, useState } from "react";
import { useDragScroll } from "../hooks/useDragScroll";

const categories = [
  { id: 'headshots', label: '形象照', icon: User },
  { id: 'portraits', label: '写真', icon: ImageIcon },
  { id: 'wedding', label: '婚礼', icon: Heart },
  { id: 'kids', label: '儿童', icon: Baby },
  { id: 'commercial', label: '商业', icon: Briefcase },
  { id: 'video', label: '视频', icon: Film },
];

export default function TeamMember() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const dragScroll = useDragScroll<HTMLDivElement>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return <Navigate to="/" />;
  }

  // Map the member colors to our new brand colors
  const rolePrefix = member.role.toLowerCase();
  let bentoColorClass = "card-cream";
  if (rolePrefix.includes("摄影")) bentoColorClass = "card-tomato";
  else if (rolePrefix.includes("指导")) bentoColorClass = "card-leaf";
  else if (rolePrefix.includes("后期")) bentoColorClass = "card-yellow";

  return (
    <div className="min-h-screen pt-32 pb-20 bg-brand-bg text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        
        <Link to="/#team" className="inline-flex items-center gap-2 font-bold text-brand-dark hover:text-brand-tomato transition-colors mb-12 group border-b-2 border-transparent hover:border-brand-tomato pb-1">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
          返回主页 / Back
        </Link>

        <div className="bento-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`card p-0 ${bentoColorClass} min-h-[400px] border-2 border-brand-dark overflow-hidden relative`}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover mix-blend-overlay opacity-90"
            />
            <div className="absolute top-6 left-6 right-6">
              <div className="label bg-white text-brand-dark inline-block px-3 py-1 rounded-sm border-2 border-brand-dark shadow-[2px_2px_0_0_rgba(34,34,34,1)]">
                {member.role.split('/')[1] || member.role}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card card-cream flex justify-center py-12"
          >
            <h1 className="text-5xl font-black mb-4 uppercase italic">
              {member.name}
            </h1>
            <div className="label mb-6 text-brand-tomato text-lg">{member.role}</div>
            <figure className="relative max-w-2xl">
              <blockquote className="text-2xl font-bold bg-brand-bg border-l-4 border-brand-dark p-6 shadow-[4px_4px_0_0_rgba(34,34,34,1)] italic">
                {member.quote}
              </blockquote>
            </figure>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card card-cream border-dashed"
          >
             <h3 className="text-xl font-black mb-4">关于 / About</h3>
             <p className="text-base font-medium leading-relaxed opacity-90">
               {member.bio}
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card card-cream"
          >
             <h3 className="text-xl font-black mb-6">特长 / Expertise</h3>
             <div className="flex flex-wrap gap-3">
               {member.skills.map((skill, i) => (
                 <div key={i} className="flex items-center gap-2 bg-brand-bg border-2 border-brand-dark px-4 py-2 font-bold shadow-[2px_2px_0_0_rgba(34,34,34,1)] rounded-full text-sm">
                   <CheckCircle2 size={16} />
                   {skill}
                 </div>
               ))}
             </div>
          </motion.div>

          {/* Member Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card card-cream"
          >
             <div className="mb-6">
               <div className="label text-brand-tomato">Works</div>
               <h2 className="text-3xl font-black">作品展示</h2>
             </div>
             
             {/* Category Filters */}
             <div 
               className="flex overflow-x-auto pb-4 gap-3 mb-6 -mx-2 px-2 no-scrollbar cursor-grab active:cursor-grabbing select-none"
               {...dragScroll}
             >
               {categories.map((cat) => (
                 <button
                   key={cat.id}
                   onClick={() => setActiveCategory(cat.id)}
                   className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold whitespace-nowrap transition-colors border-2 border-brand-dark flex-shrink-0 text-sm ${
                     activeCategory === cat.id
                       ? "bg-brand-dark text-white shadow-[2px_2px_0_0_rgba(255,77,77,1)]"
                       : "bg-white text-brand-dark shadow-[2px_2px_0_0_rgba(34,34,34,1)] hover:-translate-y-0.5 hover:shadow-[2px_4px_0_0_rgba(34,34,34,1)]"
                   }`}
                 >
                   <cat.icon size={16} />
                   {cat.label}
                 </button>
               ))}
             </div>

             {/* Placeholder for works */}
             <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-gray-500 min-h-[250px] bg-brand-bg/50">
                <ImageIcon size={48} className="mb-4 opacity-50" />
                <p className="font-bold text-lg mb-2">作品集整理中...</p>
                <p className="text-sm">之后会展示有关 <span className="font-bold text-brand-dark">{categories.find(c => c.id === activeCategory)?.label}</span> 的样片</p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
