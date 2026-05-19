/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Play, 
  Video, 
  Camera, 
  Rocket, 
  Briefcase, 
  Home, 
  ArrowRight, 
  Twitter,
  MessageSquare,
  Instagram, 
  Linkedin, 
  Mail,
  ChevronRight,
  Monitor,
  Youtube,
  Target,
  Sparkles,
  Zap,
  UserCheck,
  Building2,
  Gift
} from 'lucide-react';
import { useRef, useState } from 'react';

const SERVICES = [
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    description: 'Dynamic content designed to build personal brands and capture attention in the digital landscape.',
    icon: Rocket,
    tag: 'Premium',
    image: 'https://picsum.photos/seed/office-pro/800/600'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Immersive property tours and cinematic narratives that turn listings into high-value experiences.',
    icon: Home,
    image: 'https://picsum.photos/seed/mansion/800/600'
  },
  {
    id: 'commercial',
    title: 'Commercial Shops',
    description: 'Strategic product showcases and brand stories tailored for commercial success and high conversion.',
    icon: Briefcase,
    image: 'https://picsum.photos/seed/shop-lux/800/600'
  }
];

const PORTFOLIO = [
  { id: 1, videoUrl: 'https://www.youtube.com/embed/mv1V7bz5wII?rel=0&modestbranding=1&controls=1' },
  { id: 2, videoUrl: 'https://www.youtube.com/embed/HpFbxT8utTM?rel=0&modestbranding=1&controls=1' },
  { id: 3, videoUrl: 'https://www.youtube.com/embed/QSpIJT3wmWs?rel=0&modestbranding=1&controls=1' },
  { id: 4, videoUrl: 'https://www.youtube.com/embed/ArfAOfRBuCY?rel=0&modestbranding=1&controls=1' }
];

function ProjectBox({ videoUrl, aspectRatio = "aspect-[9/16]" }: { videoUrl: string; aspectRatio?: string; key?: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isYoutube = videoUrl.includes('youtube.com/embed');

  const togglePlay = () => {
    if (isYoutube || !videoRef.current || !videoUrl) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={togglePlay}
      className={`relative ${aspectRatio} rounded-2xl overflow-hidden group cursor-pointer glass-premium bg-black/40 flex items-center justify-center border border-white/5`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
      
      {videoUrl ? (
        isYoutube ? (
          <iframe
            src={videoUrl}
            title="Project Video"
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-cover"
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        )
      ) : (
        <div className="flex flex-col items-center gap-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <Play className="w-12 h-12 text-white" />
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white">Empty Slot</span>
        </div>
      )}

      {videoUrl && !isYoutube && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="p-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <Play className="w-10 h-10 text-white fill-current" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

const CAPABILITIES = [
  {
    id: 1,
    title: 'Precision Retention',
    description: 'Hook-driven editing that sustains audience interest and maximizes watch time.',
    icon: Youtube,
    metric: '95% Retention'
  },
  {
    id: 2,
    title: 'Sales Architecture',
    description: 'High-conversion VSL production designed to turn passive viewers into qualified leads.',
    icon: Target,
    metric: '3.5x Conversion'
  },
  {
    id: 3,
    title: 'Authority Branding',
    description: 'Visual identity system that positions you as the undisputed leader in your niche.',
    icon: UserCheck,
    metric: 'Market Dominance'
  }
];

const VerticalGuide = ({ className = "", height = "h-32" }: { className?: string; height?: string }) => (
  <div className={`w-px ${height} bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto blur-[0.5px] ${className}`} />
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const targetRef = useRef(null);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText('jordvisuals');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <div className="min-h-screen selection:bg-apple-blue/30 scroll-smooth bg-vignette relative overflow-x-hidden">
      <div className="atmosphere">
        <div className="grain opacity-5" />
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,113,227,0.1),transparent_50%)]" />
      </div>

      {/* GLOBAL CINEMATIC MOTION BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
      >
        {/* Layer 1: Atmospheric Ribbon (Upper-Left) */}
        <motion.div 
          initial={{ x: 0, y: 0, rotate: -12, scale: 1 }}
          animate={{
            x: '8%',
            y: '5%',
            rotate: -7,
            scale: 1.08,
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute w-[90vw] h-[260px] top-[6%] left-[-18%] opacity-70 blur-[48px] z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 26%, rgba(255,255,255,0.06) 48%, transparent 72%)",
          }}
        />

        {/* Layer 2: Luminous Wave (Lower-Right) */}
        <motion.div 
          initial={{ x: 0, y: 0, rotate: -8, scale: 1 }}
          animate={{
            x: '-6%',
            y: '-4%',
            rotate: -13,
            scale: 1.10,
          }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute w-[85vw] h-[240px] bottom-[2%] right-[-15%] opacity-[0.7] blur-[52px] z-10"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.18) 24%, rgba(255,255,255,0.06) 50%, transparent 74%)",
          }}
        />

        {/* Layer 3: Drifting Streak (Middle-Lower) */}
        <motion.div 
          initial={{ x: '-2%', y: 0, rotate: -10, scaleX: 1, opacity: 0.42 }}
          animate={{
            x: '4%',
            y: '-3%',
            rotate: -6,
            scaleX: 1.08,
            opacity: 0.62,
          }}
          transition={{ duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute w-[120vw] h-[80px] top-[58%] left-[-8%] blur-[20px] z-10"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 18%, rgba(255,255,255,0.16) 48%, rgba(255,255,255,0.04) 72%, transparent 100%)",
          }}
        />

        {/* Layer 4: Secondary Soft Fog (Atmospheric Density) */}
        <motion.div 
          initial={{ x: 0, y: 0, rotate: 6, scale: 1 }}
          animate={{
            x: '-3%',
            y: '4%',
            rotate: 10,
            scale: 1.06,
          }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute w-[70vw] h-[300px] top-[25%] right-[-10%] opacity-[0.32] blur-[70px] z-10"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 30%, transparent 70%)",
          }}
        />

        {/* Motion Noise Overlay */}
        <div className="absolute inset-0 z-20 opacity-5 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "3px 3px"
          }}
        />
        
        {/* Global Atmospheric Vignette */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15) 30%,rgba(0,0,0,0.95) 100%)]" />
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-[998] mix-blend-overlay opacity-10 px-8 py-8 flex flex-col justify-between">
        <div className="flex justify-between items-start font-mono text-[9px] uppercase tracking-[0.4em] text-white">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
            <span>RECORDING // 00:24:12</span>
          </div>
          <div className="flex gap-4">
            <span>SESSION.4K.AV_IF</span>
            <span className="opacity-40">24FPS</span>
          </div>
        </div>
        <div className="flex justify-between items-end font-mono text-[9px] uppercase tracking-[0.4em] text-white opacity-40">
          <div className="flex gap-2">
            <span>STILL_FRAME_REF</span>
            <span className="opacity-40">[A/B]</span>
          </div>
          <span>MASTER: 01 // 1.3TB FREE</span>
        </div>
      </div>

      {/* Ghost Vertical Thread for Continuity */}
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-white/[0.02] -translate-x-1/2 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 px-6 backdrop-blur-sm bg-black/5 border-b border-white/[0.02]">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-7xl flex justify-between items-center"
        >
          <a href="#" className="font-bold text-white tracking-tighter text-2xl tracking-[-0.05em] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-apple-blue" />
            Jords.
          </a>
          <div className="hidden md:flex gap-10 items-center">
            <a href="#portfolio" className="nav-link text-white/50 hover:text-white text-base font-medium transition-colors">Projects</a>
            <motion.a 
              href="https://x.com/Jordvisuals"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 bg-white/[0.02] backdrop-blur-md border border-white/[0.06] px-7 py-2.5 rounded-full text-base font-bold text-white transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
            >
              {/* Subtle inner glow for the pill button */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <Sparkles className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" />
              <span className="tracking-tight text-white/90 group-hover:text-white">Hire Me</span>
            </motion.a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        <VerticalGuide className="mb-12 opacity-40" height="h-24" />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[95vw] w-full relative z-30"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl mb-12 shadow-[0_0_30px_rgba(255,255,255,0.05)] group relative"
          >
            <div className="absolute inset-x-4 inset-y-1 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
            <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.05em] sm:tracking-[0.2em] text-white/90 uppercase">Helping clients enhance their content</span>
          </motion.div>
          
          <motion.h1
            animate={{
              filter: [
                "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                "drop-shadow(0 20px 50px rgba(0,0,0,0.6)) drop-shadow(0 0 50px rgba(255,255,255,0.06))",
                "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
              ]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
            className="text-[2.5rem] sm:text-7xl md:text-[9rem] font-bold tracking-tight mb-4 leading-[0.85] text-white pb-2 px-4 sm:px-16 overflow-visible select-none antialiased cursor-default block"
          >
            <span className="block">Architecture</span>
            <span className="block">of <span className="text-gradient">Attention.</span></span>
          </motion.h1>
          
          <p className="max-w-3xl mx-auto text-white/50 text-base md:text-xl font-light mb-8 leading-[1.4] tracking-tight px-4 md:px-0">
            Elevating your content through immersive narratives, <br className="hidden md:block" /> engineered for retention and engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 relative z-20">
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://x.com/Jordvisuals"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-[22px] bg-black/30 backdrop-blur-md border border-white/25 text-white font-bold text-base tracking-tight transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.08)] overflow-visible inline-block"
            >
              <div className="absolute inset-0 rounded-[21px] overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/[0.06] to-transparent" />
                <div className="absolute inset-0 border border-white/10 rounded-[21px]" />
              </div>
              <div className="absolute -inset-1.5 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[85%] h-[2.5px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] z-20" />
              <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[65%] h-2 bg-white/40 blur-lg z-20 group-hover:w-[75%] group-hover:bg-white/60 transition-all duration-500" />
              <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[45%] h-6 bg-white/15 blur-2xl z-10 opactiy-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                Level-up My Content
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-500" />
              </span>
            </motion.a>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              whileHover={{ scale: 1.02, y: -2, border: "1px solid rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="#portfolio"
              className="px-6 py-3 rounded-[22px] border border-white/10 text-white/40 font-bold text-base tracking-tight hover:text-white transition-all duration-300 bg-transparent backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.6)] inline-block"
            >
              View My Work
            </motion.a>
          </div>

          <VerticalGuide className="mb-16 opacity-30" height="h-24" />

          {/* Integrated Capability Cards - Now part of the Hero composition */}
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-8 pb-16">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + idx * 0.1, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.01 }}
                className="group relative glass-premium p-8 rounded-3xl text-left overflow-hidden z-10 border border-white/[0.03] min-h-[350px] flex flex-col justify-between"
              >
                <div className="grain-overlay opacity-[0.2] scale-125" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-apple-blue/5 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2 group-hover:bg-apple-blue/15 transition-all duration-700" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] flex items-center justify-center mb-6 border border-white/5 group-hover:border-apple-blue/30 shadow-2xl relative transition-all duration-500">
                    <cap.icon className="w-5 h-5 text-white/90 group-hover:text-apple-blue transition-colors duration-500" />
                  </div>
                  <h4 className="text-base font-bold tracking-[0.1em] mb-3 text-white uppercase">{cap.title}</h4>
                  <p className="text-xs leading-relaxed text-apple-sub/70 mb-6 font-light flex-grow">{cap.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-apple-blue shadow-[0_0_10px_rgba(0,113,227,0.5)]" />
                    <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-apple-blue font-bold">{cap.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Minimal Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="hidden sm:flex items-center justify-center gap-6 mt-12 select-none pointer-events-none pb-8"
          >
            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/30">Scroll down</span>
            
            <div className="flex items-center gap-6">
              <div className="w-24 h-px bg-white/10" />
              
              <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex justify-center p-1 relative bg-white/[0.05]">
                <motion.div 
                  animate={{ 
                    y: [0, 10, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2.2, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  className="w-[1.5px] h-[5px] bg-white/70 rounded-full mt-1"
                />
              </div>
              
              <div className="w-24 h-px bg-white/10" />
            </div>

            <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/30">to see projects</span>
          </motion.div>
          
          <VerticalGuide className="mt-12 opacity-50" height="h-32" />
        </motion.div>
      </section>
      
      {/* Subtle Divider */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Portfolio Showcase */}
      <section id="portfolio" ref={targetRef} className="pt-32 pb-20 md:pb-36 px-6 relative overflow-hidden">
        <VerticalGuide className="absolute top-0 left-1/2 -translate-x-1/2 opacity-60" height="h-32" />
        
        <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6">
            <div className="text-center w-full">
              <span className="micro-label opacity-40 tracking-[0.4em]">turning videos into experiences</span>
              <motion.h2 
                initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                whileInView={{ opacity: 0.1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[4rem] sm:text-[8rem] md:text-[12rem] font-bold text-white select-none leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] tracking-[-0.08em]"
              >
                Projects.
              </motion.h2>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center">
            {/* Top row: 3 vertical boxes centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
              {PORTFOLIO.slice(0, 3).map((item) => (
                <ProjectBox key={item.id} videoUrl={item.videoUrl} aspectRatio="aspect-[9/16]" />
              ))}
            </div>

            {/* Bottom row: 1 horizontal box centered */}
            <div className="max-w-5xl w-full">
              {PORTFOLIO[3] && (
                <ProjectBox 
                  key={PORTFOLIO[3].id} 
                  videoUrl={PORTFOLIO[3].videoUrl} 
                  aspectRatio="aspect-video" 
                />
              )}
            </div>
          </div>
          
          <VerticalGuide className="mt-16 opacity-40" height="h-24" />
        </motion.div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Introduction / About Section */}
      <section id="about" className="pt-16 pb-16 md:pt-24 px-6 relative overflow-hidden">
        <VerticalGuide className="absolute top-0 left-1/2 -translate-x-1/2 opacity-40 z-20" height="h-48" />
        {/* Atmospheric Background Layer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-apple-blue/5 blur-[180px] rounded-full opacity-40" />
          <div className="grain-overlay opacity-[0.1]" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Main Identity Heading - Text Based */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tighter text-white/30 flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span>It's</span>
              <span className="relative group">
                <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-bold tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                  Jords.
                </span>
                
                {/* Subtle Animated Luminous Line below */}
                <motion.div 
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2],
                    width: ["0%", "100%", "0%"]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]"
                />
              </span>
            </h2>
          </motion.div>
          
          {/* Expansive, Centered Body Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 max-w-5xl"
          >
            <p className="text-base md:text-xl lg:text-2xl leading-snug text-white/50 font-light tracking-tight">
              I'm Jords, a video editor helping creators and brands turn raw footage into content that <span className="text-white/90">feels intentional</span>, engaging, and impossible to ignore.
            </p>
            <p className="text-base md:text-xl lg:text-2xl leading-snug text-white/50 font-light tracking-tight">
              My work blends high-retention editing, visual storytelling, and content strategy to create videos that hold attention, elevate your brand, and make every piece of content <span className="text-white/90">more purposeful</span>.
            </p>
          </motion.div>

          {/* Consistent Premium Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href="https://x.com/Jordvisuals"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 py-3 sm:px-8 sm:py-4 rounded-[26px] bg-transparent backdrop-blur-md border border-white/[0.12] text-white font-bold text-base tracking-tight transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-visible hover:bg-white/[0.02] inline-block"
            >
              <div className="absolute inset-0 rounded-[25px] overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-[60%] bg-gradient-to-b from-white/[0.05] to-transparent" />
                <div className="absolute inset-0 border border-white/5 rounded-[25px]" />
              </div>

              <div className="absolute -inset-2 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[85%] h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px] z-20 group-hover:via-white transition-all duration-500" />
              <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[65%] h-2 bg-white/20 blur-lg z-20 group-hover:w-[75%] transition-all duration-500" />
              
              <span className="relative z-10 flex items-center gap-4">
                let's work together?
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Philosophy / About */}
      <section id="vision" className="pt-16 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <VerticalGuide className="mb-6 opacity-50" height="h-24" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1] text-center mb-3 italic">
            Visual Storytelling at <span className="text-white/40">Scale.</span>
          </h2>
          <p className="text-apple-sub text-sm md:text-base font-light text-center max-w-xl leading-relaxed">
            content with rhythm, clarity, emotion, and strategy.
          </p>
          <VerticalGuide className="mt-8 opacity-30" height="h-10" />
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      </div>

      {/* Contact Section / Footer */}
      <footer id="contact" className="pt-8 pb-32 px-6 border-t border-white/10 relative overflow-hidden flex flex-col items-center">
        <VerticalGuide className="absolute top-0 left-1/2 -translate-x-1/2 opacity-30" height="h-32" />
        {/* Background Atmosphere */}

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[120px] rounded-full translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
          {/* Available For Work Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)] mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/90 uppercase">Available For Work</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-[2.5rem] sm:text-[4rem] md:text-[8rem] font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-none"
          >
            Let's create.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/30 text-sm md:text-lg font-light max-w-2xl leading-relaxed mb-10 px-4 tracking-tight"
          >
            Ready to work together, and <br className="hidden sm:block" />
            take your content to the next level?
          </motion.p>

          <VerticalGuide className="mb-12 opacity-20" height="h-16" />

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-4">
            <motion.button 
              onClick={handleCopyDiscord}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-64 h-20 bg-white/[0.01] backdrop-blur-2xl border border-white/5 rounded-[32px] flex items-center justify-center gap-5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <MessageSquare className="w-10 h-10 text-white/20 group-hover:text-white transition-all duration-700 relative z-10" />
              <div className="flex flex-col items-start relative z-10">
                <span className="text-white/20 group-hover:text-white font-bold tracking-[0.2em] uppercase text-[9px] transition-all duration-700 mb-0.5">
                  {copied ? "Copied!" : "Discord"}
                </span>
                <span className="text-white text-lg font-medium tracking-tight">@jordvisuals</span>
              </div>
            </motion.button>
            <motion.a 
              href="https://x.com/Jordvisuals"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-64 h-20 bg-white/[0.01] backdrop-blur-2xl border border-white/5 rounded-[32px] flex items-center justify-center gap-4 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.5)] group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Twitter className="w-10 h-10 text-white/20 group-hover:text-white transition-all duration-700 relative z-10" />
              <span className="text-white/20 group-hover:text-white font-bold tracking-widest uppercase text-[10px] transition-all duration-700">Twitter / X</span>
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}
