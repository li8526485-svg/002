import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Camera, Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-bg py-16 relative mt-16 border-t-2 border-brand-dark text-opacity-90">

      <div className="px-6 relative z-10">
        <div className="flex flex-col gap-12 text-center">
          
          <div>
            <Link to="/" className="flex items-center justify-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-brand-tomato rounded-full flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform border-2 border-white">
                <Camera size={20} />
              </div>
              <span className="font-sans text-3xl font-black tracking-tighter italic text-white flex-shrink-0">
                TOMATO PHOTO
              </span>
            </Link>
            <p className="opacity-80 font-medium leading-relaxed max-w-sm mx-auto">
              像水果般鲜活，像蔬菜般生机勃勃。<br/>
              为你记录充满色彩与欢笑的每一个瞬间。
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="font-black text-xl mb-2 text-white">Contact Us</h3>
            <div className="flex items-center gap-3 opacity-80 font-medium">
              <Mail size={18} />
              <span>hello@tomatophoto.com</span>
            </div>
            <div className="flex items-center gap-3 opacity-80 font-medium">
              <MapPin size={18} />
              <span>阳光谷创意产业园 8栋</span>
            </div>
            <div className="flex items-center gap-3 opacity-80 font-medium">
              <Heart size={18} />
              <span>10:00 - 19:00</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 font-bold">
            <h3 className="font-black text-xl mb-2 text-white">Quick Links</h3>
            <Link to="/#philosophy" className="opacity-80 hover:opacity-100 transition-transform hover:text-brand-leaf">拍摄理念</Link>
            <Link to="/#portfolio" className="opacity-80 hover:opacity-100 transition-transform hover:text-brand-yellow">作品展示</Link>
            <Link to="/#team" className="opacity-80 hover:opacity-100 transition-transform hover:text-brand-tomato">核心团队</Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-brand-bg/20 text-center opacity-60 font-bold text-sm">
          <p>© {new Date().getFullYear()} Tomato Photo Studio.</p>
        </div>
      </div>
    </footer>
  );
}
