import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Menu, X, Image as ImageIcon, Film, Heart, Baby, User, Briefcase, Phone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | null, targetId: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e?.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-brand-bg/90 backdrop-blur-md shadow-sm py-3 border-b-2 border-brand-dark" : "bg-brand-bg py-5 border-b-2 border-transparent"
      )}
    >
      <div className="px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-tomato rounded-full flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform shadow-[2px_2px_0_0_rgba(34,34,34,1)] border-2 border-brand-dark">
            <Camera size={16} />
          </div>
          <span className="font-sans text-xl font-black tracking-tighter italic text-brand-dark">
            TOMATO PHOTO
          </span>
        </Link>

        {/* Mobile menu button instead of full links */}
        <div className="flex items-center">
          <button 
            className="text-brand-dark hover:text-brand-tomato transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-brand-bg border-t-2 border-brand-dark mt-3 absolute top-full left-0 w-full"
          >
            <div className="px-5 py-6 flex flex-col gap-6 font-bold text-lg">
              <Link to="/" className="text-brand-dark hover:text-brand-tomato border-b-2 border-transparent hover:border-brand-tomato inline-block self-start pb-1" onClick={(e) => handleNavClick(e, "home")}>首页</Link>
              
              <div className="flex flex-col gap-4 bg-white p-5 rounded-2xl border-2 border-brand-dark shadow-[4px_4px_0_0_rgba(34,34,34,1)]">
                <span className="text-brand-dark font-black text-sm uppercase tracking-wider opacity-60">样片分组 Portfolio</span>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><User size={18} className="text-brand-tomato"/> 形象照</Link>
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><ImageIcon size={18} className="text-brand-leaf"/> 写真</Link>
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><Heart size={18} className="text-brand-yellow"/> 婚礼</Link>
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><Baby size={18} className="text-brand-tomato"/> 儿童</Link>
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><Briefcase size={18} className="text-brand-dark"/> 商业</Link>
                  <Link to="/#portfolio" onClick={(e) => handleNavClick(e, "portfolio")} className="flex items-center gap-2 text-brand-dark hover:text-brand-tomato text-base"><Film size={18} className="text-brand-leaf"/> 视频</Link>
                </div>
              </div>
              
              <div className="flex gap-6 flex-wrap">
                <Link to="/#team" className="text-brand-dark hover:text-brand-leaf border-b-2 border-transparent hover:border-brand-leaf inline-block self-start pb-1" onClick={(e) => handleNavClick(e, "team")}>关于我们</Link>
                <Link to="/#philosophy" className="text-brand-dark hover:text-brand-tomato border-b-2 border-transparent hover:border-brand-tomato inline-block self-start pb-1" onClick={(e) => handleNavClick(e, "philosophy")}>拍摄方案</Link>
                <a href="tel:17633234408" className="text-brand-dark hover:text-brand-yellow border-b-2 border-transparent hover:border-brand-yellow inline-flex items-center gap-1 self-start pb-1">
                  <Phone size={16} />
                  17633234408
                </a>
              </div>
              
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 bg-brand-tomato text-white text-center py-3 rounded-full font-black border-2 border-brand-dark shadow-[4px_4px_0_0_rgba(34,34,34,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(34,34,34,1)] transition-all">
                联系我们 / 预约拍摄
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
