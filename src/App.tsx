/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Code2, 
  Shield, 
  Network, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronRight,
  Github,
  Linkedin,
  FileText,
  Terminal,
  Cpu,
  Globe,
  Info,
  CheckCircle2,
  Building2,
  Zap,
  Sun,
  Moon,
  Send,
  Loader2,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, EXPERIENCES, DETAILED_SKILLS, SKILLS } from './constants';
import { Project, Experience, Skill } from './types';
type Page = 'home' | 'skills' | 'experience' | 'projects' | 'cv';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject || selectedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, selectedSkill]);

  const NavItem = ({ id, label, icon: Icon }: { id: Page, label: string, icon: any }) => (
    <button
      onClick={() => setActivePage(id)}
      className={`px-3 md:px-4 py-2 transition-all duration-300 relative group cursor-pointer ${
        activePage === id 
          ? 'text-black font-bold' 
          : 'text-zinc-500 hover:text-black'
      }`}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap">{label}</span>
      {activePage === id && (
        <motion.div 
          layoutId="nav-underline"
          className="absolute bottom-0 left-3 right-3 md:left-4 md:right-4 h-px bg-black"
        />
      )}
    </button>
  );

  const SkillIcon = ({ name, size = 18, className = "" }: { name?: string, size?: number, className?: string }) => {
    const icons: Record<string, any> = {
      Terminal,
      Globe,
      Building2,
      Shield,
      Zap,
      Network,
      Phone,
      Code2,
      Briefcase
    };
    const Icon = name && icons[name] ? icons[name] : Zap;
    return <Icon size={size} className={className} />;
  };

  return (
    <div className="min-h-screen transition-colors duration-500 font-sans selection:bg-blue-500/30 relative overflow-hidden text-zinc-900">
      {/* Background with Space/Stars elements */}
      <div className="fixed inset-0 pointer-events-none transition-all duration-1000 -z-20 bg-white">
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop" 
          alt="Space background" 
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-[0.03] grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] text-black -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 bg-white/80 border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8 w-full">
            <h2 className="font-serif italic text-2xl tracking-tighter shrink-0">JP.</h2>
            <div className="flex items-center overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex items-center min-w-max">
                <NavItem id="home" label="Accueil" icon={User} />
                <NavItem id="cv" label="CV" icon={FileText} />
                <NavItem id="experience" label="Expérience" icon={Briefcase} />
                <NavItem id="skills" label="Compétences" icon={Cpu} />
                <NavItem id="projects" label="Projets" icon={Terminal} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="py-12"
            >
              <div className="flex flex-col items-center lg:items-start gap-24 mb-32">
                <div className="text-center lg:text-left flex-1 py-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 block">
                      01. PROFIL / Réseaux & Télécommunications
                    </span>
                    <h1 className="font-serif text-7xl md:text-[10rem] leading-[0.85] mb-12 flex flex-col">
                      <span>JOËL</span>
                      <span className="lg:ml-20">PAVIOT</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed text-zinc-600">
                      Étudiant en 3ème année de BUT R&T, alternant chez EDF. Spécialisé dans la conception d'infrastructures résilientes et la cybersécurité industrielle.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8">
                        <button 
                          onClick={() => setActivePage('projects')} 
                          className="text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-4 group cursor-pointer text-black"
                        >
                          Voir les collections
                          <div className="w-12 h-px transition-all group-hover:w-20 bg-black" />
                        </button>
                        <button 
                          onClick={() => setActivePage('cv')} 
                          className="text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-4 group cursor-pointer text-zinc-400 hover:text-black"
                        >
                          Consulter le CV
                          <div className="w-8 h-px transition-all group-hover:w-16 bg-zinc-400 group-hover:bg-black" />
                        </button>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-px border-y border-zinc-800 bg-zinc-800 mb-32 overflow-hidden">
                {[
                  { label: "Années d'études", value: "3", prefix: "", suffix: "" },
                  { label: "années d'alternance", value: "2", prefix: "", suffix: "" },
                  { label: "Projets IT", value: "15", prefix: "+", suffix: "" },
                  { label: "Engagement", value: "100", prefix: "", suffix: "%" }
                ].map((stat) => (
                  <motion.div 
                    key={`stat-${stat.label}`} 
                    className="py-16 px-12 group transition-all duration-500 bg-white text-black"
                  >
                    <div className="font-serif text-6xl mb-4 italic opacity-50">{stat.prefix}{stat.value}{stat.suffix}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                {[
                  { title: "Cybersécurité", desc: "Expertise en durcissement système, audit de vulnérabilités et déploiement de solutions de sécurité périmétrique.", id: "01" },
                  { title: "Réseaux Critiques", desc: "Conception, configuration et maintenance de réseaux industriels complexes. Maîtrise Cisco, Alcatel et HP.", id: "02" },
                  { title: "Cloud & Systèmes", desc: "Administration avancée Windows/Linux, virtualisation VMware/Proxmox et gestion d'environnements hybrides.", id: "03" }
                ].map((item) => (
                  <motion.div 
                    key={`service-${item.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="text-[10px] font-mono mb-4 opacity-30 tracking-widest">{item.id}. SERVICE</div>
                    <h3 className="font-serif text-3xl mb-6 italic">{item.title}</h3>
                    <p className="text-sm leading-relaxed font-light text-zinc-500">
                      {item.desc}
                    </p>
                    <div className="mt-8 w-full h-px transition-all duration-500 group-hover:scale-x-110 bg-zinc-100" />
                  </motion.div>
                ))}
              </div>

              {/* Contact Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-24 border-t border-zinc-800"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
                  <div className="max-w-xl">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 block">Contact</span>
                    <h2 className="font-serif text-6xl italic mb-8">Commençons une collaboration.</h2>
                    <p className="text-lg font-light leading-relaxed text-zinc-500">
                      Disponible pour échanger sur vos projets ou opportunités de Master. Écrivez-moi directement ou passez par le formulaire.
                    </p>
                  </div>

                  <div className="flex flex-col gap-8 w-full lg:w-auto">
                    {[
                      { label: "Email", value: "paviotjoel@orange.fr", href: "mailto:paviotjoel@orange.fr" },
                      { label: "LinkedIn", value: "Joël Paviot", href: "https://linkedin.com/in/joel-paviot" },
                      { label: "Location", value: "Grenoble, France", href: null }
                    ].map((link) => (
                      <div key={`contact-${link.label}`} className="group">
                        <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">{link.label}</div>
                        {link.href ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:opacity-60 transition-opacity">
                            {link.value}
                          </a>
                        ) : (
                          <span className="text-xl font-medium">{link.value}</span>
                        )}
                        <div className="mt-4 w-12 h-px transition-all group-hover:w-24 bg-black" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-12 md:p-20 border transition-all duration-700 bg-zinc-50/30 border-zinc-100">
                  {formStatus === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-24"
                    >
                      <h3 className="font-serif text-4xl italic mb-6">Message envoyé.</h3>
                      <p className="text-zinc-500 mb-12">Je reviendrai vers vous dès que possible.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="text-xs uppercase tracking-[0.3em] font-medium border-b py-2 border-black text-black"
                      >
                        Nouveau message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="max-w-4xl space-y-16">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">Nom</label>
                          <input 
                            required
                            type="text"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            placeholder="Votre nom"
                            className="w-full py-4 bg-transparent border-b outline-none transition-all border-zinc-200 focus:border-black text-black"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">Email</label>
                          <input 
                            required
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            placeholder="votre@email.com"
                            className="w-full py-4 bg-transparent border-b outline-none transition-all border-zinc-200 focus:border-black text-black"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">Objet</label>
                        <input 
                          required
                          type="text"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                          placeholder="Le sujet"
                          className="w-full py-4 bg-transparent border-b outline-none transition-all border-zinc-200 focus:border-black text-black"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block">Message</label>
                        <textarea 
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                          placeholder="Votre message ici"
                          className="w-full py-4 bg-transparent border-b outline-none transition-all resize-none border-zinc-200 focus:border-black text-black"
                        />
                      </div>
                      
                      <div className="pt-8">
                          <button 
                            disabled={formStatus === 'sending'}
                            type="submit"
                            className="group flex items-center gap-6 text-xs uppercase tracking-[0.4em] font-bold disabled:opacity-50 cursor-pointer text-black"
                          >
                            {formStatus === 'sending' ? 'Transmission...' : 'Envoyer'}
                            <div className="w-16 h-px transition-all group-hover:w-32 bg-black" />
                          </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.section>
          )}

          {activePage === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24"
            >
              <div className="mb-32">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 block">04. EXPERTISE</span>
                <h2 className="font-serif text-8xl md:text-[10rem] italic leading-[0.85] mb-12">Compétences.</h2>
                <p className="text-xl font-light max-w-2xl leading-relaxed text-zinc-500">
                  Un socle technique architecturé autour de la résilience système et de la souveraineté numérique.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border-y border-zinc-800 mb-32">
                {DETAILED_SKILLS.map((skill, index) => (
                  <motion.div
                    key={`skill-card-${skill.name}`}
                    onClick={() => setSelectedSkill(skill)}
                    className="cursor-pointer p-16 transition-all duration-500 group bg-white hover:bg-zinc-50"
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-[10px] font-mono opacity-30 tracking-widest">{String(index + 1).padStart(2, '0')}</div>
                      <Info size={14} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500 mb-4 block">
                      {skill.category}
                    </span>
                    <h3 className="font-serif text-3xl mb-6 italic">{skill.name}</h3>
                    <p className="text-sm leading-relaxed font-light opacity-50 group-hover:opacity-100 transition-opacity">{skill.description}</p>
                    <div className="mt-12">
                      <div className="w-8 h-px transition-all group-hover:w-full bg-black" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 py-24 border-t border-zinc-800">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Savoir-être</h3>
                  <div className="space-y-6">
                    {SKILLS.soft.map((atout, index) => (
                      <div key={`soft-skill-${index}`} className="flex items-center gap-6 group">
                        <div className="w-2 h-2 rounded-full transition-all group-hover:scale-150 bg-black" />
                        <span className="text-2xl font-light">{atout}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Langues</h3>
                  <div className="space-y-8">
                    {SKILLS.languages.map((lang, index) => (
                      <div key={`lang-${lang.name}`} className="flex items-end justify-between border-b border-zinc-800 pb-4 group">
                        <div className="flex items-baseline gap-4">
                          <span className="text-sm opacity-30 font-mono italic">0{index + 1}</span>
                          <span className="text-4xl font-serif italic">{lang.name}</span>
                        </div>
                        <span className="text-sm uppercase tracking-widest font-medium opacity-50">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {selectedSkill && (
                  <>
                    <motion.div 
                      key="skill-modal-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedSkill(null)}
                      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />
                    <motion.div 
                      key={`skill-modal-${selectedSkill.name}`}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="fixed inset-x-6 top-[10%] bottom-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[800px] md:max-h-[80vh] z-[70] shadow-2xl flex flex-col bg-white rounded-sm overflow-hidden"
                    >
                      <div className="flex justify-between items-start p-12 md:p-20 border-b border-zinc-100">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6 block">
                            {selectedSkill.category}
                          </span>
                          <h3 className="font-serif text-3xl md:text-5xl italic leading-none">{selectedSkill.name}</h3>
                        </div>
                        <button 
                          onClick={() => setSelectedSkill(null)}
                          className="group flex items-center gap-4 text-zinc-500 hover:text-black cursor-pointer transition-colors"
                        >
                          <span className="text-[9px] uppercase tracking-[0.3em]">Fermer</span>
                          <div className="w-8 h-px transition-all group-hover:w-16 bg-black" />
                        </button>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16 scrollbar-thin scrollbar-thumb-zinc-200">
                        <section>
                          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Description .</h4>
                          <p className="text-xl font-light leading-relaxed text-zinc-600">
                            {selectedSkill.description}
                          </p>
                        </section>
                        
                        <section className="pt-12 border-t border-zinc-100">
                          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-8">Détails techniques</h4>
                          <p className="text-base font-light leading-relaxed text-zinc-500 mb-6">
                            Mise en œuvre approfondie de ces technologies dans le cadre de projets académiques et professionnels (EDF).
                          </p>
                        </section>

                        <section className="pt-12 border-t border-zinc-100">
                          <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-10">Applications techniques</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {['Analyse Architecture', 'Mise en œuvre Réseau', 'Optimisation Sécurité', 'Maintenance Critique'].map((tag, i) => (
                              <div key={`skill-tag-${i}`} className="flex items-center gap-4 group">
                                <span className="text-[9px] font-mono opacity-20">0{i + 1}</span>
                                <span className="text-lg font-light tracking-wide">{tag}</span>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.section>
          )}
          
          {activePage === 'experience' && (
            <motion.section
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24"
            >
              <div className="mb-24">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 block">03. EXPÉRIENCE</span>
                <h2 className="font-serif text-8xl md:text-[10rem] italic leading-[0.85] mb-12">Expérience.</h2>
              </div>

              <div className="space-y-32">
                {EXPERIENCES.map((exp, index) => (
                  <div key={`exp-${exp.id}`} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pb-24 border-b border-zinc-800">
                    <div className="lg:col-span-5 space-y-12">
                      <div className="text-[10px] font-mono mb-8 opacity-30 tracking-widest italic leading-relaxed">
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-6 mb-8">
                        <h4 className="font-serif text-4xl italic">{exp.company}</h4>
                      </div>
                      
                      <div className="relative group overflow-hidden border border-zinc-100 rounded-sm shadow-sm transition-all duration-700 hover:shadow-2xl">
                        <img 
                          src="/src/assets/CNPE_BUGEY.jpg" 
                          alt="CNPE du Bugey" 
                          className="w-full h-80 object-cover transition-all duration-1000 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <p className="text-[10px] uppercase tracking-widest opacity-50 font-medium">{exp.location}</p>
                    </div>

                    <div className="lg:col-span-7 space-y-12 pt-12 lg:pt-24">
                      <h3 className="font-serif text-6xl leading-tight italic">{exp.role}</h3>
                      <p className="text-xl font-light leading-relaxed max-w-3xl text-zinc-600">
                        {exp.fullDescription}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div>
                          <h5 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Missions Principales</h5>
                          <ul className="space-y-4">
                            {exp.tasks.map((task, i) => (
                              <li key={`task-${exp.id}-${i}`} className="text-sm font-light flex gap-4 leading-relaxed group">
                                <span className="w-1 h-1 rounded-full mt-2 shrink-0 transition-all group-hover:scale-150 bg-black" />
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-8 font-bold">Impact & Savoir</h5>
                          <ul className="space-y-4">
                            {exp.acquiredSkills?.map((skill, i) => (
                              <li key={`acquired-${exp.id}-${i}`} className="text-sm font-light flex gap-4 leading-relaxed group">
                                <span className="w-1 h-1 rounded-full mt-2 shrink-0 transition-all group-hover:scale-150 bg-black" />
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {exp.featuredProject && (
                      <div className="col-span-full pt-12 mt-12 border-t border-zinc-100">
                        <div className="bg-zinc-50/50 border border-zinc-100 p-8 md:p-16 relative overflow-hidden group rounded-sm transition-all duration-500 hover:bg-white hover:shadow-xl">
                          <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Terminal size={160} />
                          </div>
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                              <div className="flex-1">
                                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block font-bold">Projet Marquant . Focus technique</span>
                                <h5 className="font-serif text-4xl md:text-6xl italic leading-tight group-hover:text-black transition-colors">{exp.featuredProject.title}</h5>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
                              <div className="lg:col-span-5">
                                <p className="text-xl font-light text-zinc-500 leading-relaxed italic">
                                  {exp.featuredProject.description}
                                </p>
                              </div>
                              <div className="lg:col-span-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {exp.featuredProject.details.map((detail, i) => (
                                    <div key={`fp-detail-${i}`} className="flex gap-6 pb-6 border-b border-zinc-100 last:border-0 md:last:border-b">
                                      <span className="text-xs font-mono text-zinc-300 mt-1">0{i+1}</span>
                                      <p className="text-sm font-light leading-relaxed text-zinc-600">{detail}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-8 border-t border-zinc-100">
                              {exp.featuredProject.technologies.map((tech, i) => (
                                <span key={`fp-tech-${i}`} className="text-[9px] uppercase tracking-widest border border-zinc-200 px-5 py-2.5 text-zinc-400 bg-white hover:border-black hover:text-black transition-all cursor-default">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === 'projects' && (
            <motion.section
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24"
            >
              <div className="mb-24">
                <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 block">05. PROJETS</span>
                <h2 className="font-serif text-8xl md:text-[10rem] italic leading-[0.85] mb-12">Projets.</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-zinc-800 border-y border-zinc-800 mb-32">
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group cursor-pointer p-16 transition-all duration-700 bg-white hover:bg-zinc-50"
                  >
                    <div className="flex justify-between items-start mb-24">
                      <span className="text-[10px] opacity-20 font-mono italic tracking-widest">PROJECT — 0{index + 1}</span>
                      <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                    
                    <div className="space-y-8">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-500">{project.category} / {project.year}</span>
                      <h3 className="font-serif text-4xl leading-tight italic">{project.title}</h3>
                      <p className="text-sm font-light opacity-50 max-w-sm line-clamp-2 leading-relaxed">{project.description}</p>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-3">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={`tech-list-${project.id}-${i}`} className="text-[9px] uppercase tracking-[0.2em] border border-zinc-800 px-3 py-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {selectedProject && (
                  <>
                    <motion.div 
                      key="project-modal-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedProject(null)}
                      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />
                    <motion.div 
                      key={`project-modal-${selectedProject.id}`}
                      initial={{ opacity: 0, scale: 0.98, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 30 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="fixed inset-4 md:inset-x-24 md:inset-y-12 z-[70] shadow-2xl flex flex-col bg-white rounded-sm overflow-hidden"
                    >
                      <div className="flex justify-between items-start p-8 md:p-12 border-b border-zinc-100">
                        <div className="space-y-2">
                          <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 block">
                            {selectedProject.category} / {selectedProject.year}
                          </span>
                          <h3 className="font-serif text-3xl md:text-5xl italic leading-none">{selectedProject.title}</h3>
                        </div>
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="group flex items-center gap-4 text-zinc-500 hover:text-black cursor-pointer transition-colors"
                        >
                          <span className="text-[9px] uppercase tracking-[0.3em]">Fermer</span>
                          <div className="w-8 h-px transition-all group-hover:w-16 bg-black" />
                        </button>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16 scrollbar-thin scrollbar-thumb-zinc-200">
                        {selectedProject.images && selectedProject.images.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {selectedProject.images.map((img, i) => (
                              <div key={`proj-img-${selectedProject.id}-${i}`} className="space-y-4">
                                <div className="border border-zinc-100 aspect-video overflow-hidden">
                                  <img 
                                    src={img.url} 
                                    alt={img.caption} 
                                    className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 italic">{img.caption}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                          <div className="lg:col-span-8">
                            <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-6">Étude de cas .</h4>
                            <p className="text-xl font-light leading-relaxed mb-12 text-zinc-600">{selectedProject.description}</p>
                            
                            <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-8">Spécifications</h4>
                            <ul className="space-y-4">
                              {selectedProject.details.map((detail, i) => (
                                <li key={`proj-detail-${selectedProject.id}-${i}`} className="text-base font-light flex gap-4 leading-relaxed group text-zinc-600">
                                  <span className="w-1 h-1 rounded-full mt-2.5 shrink-0 bg-black opacity-30" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="lg:col-span-4">
                            <h4 className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 mb-8">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.technologies.map((tech, i) => (
                                <span key={`proj-tech-${selectedProject.id}-${i}`} className="text-[9px] uppercase tracking-widest border border-zinc-100 px-3 py-1.5 text-zinc-500">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.section>
          )}
          
          {activePage === 'cv' && (
            <motion.section
              key="cv"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 md:py-24"
            >
              {/* CV Title Section */}
              <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 block font-mono">02. Curriculum Vitae</span>
                  <h2 className="font-serif text-7xl md:text-9xl italic leading-[0.8]">Mon CV.</h2>
                </div>
                <a 
<<<<<<< HEAD
                  href="/CV_Joel_PAVIOT.pdf"
=======
                  href="/src/assets/CV_Joel_PAVIOT.pdf"
>>>>>>> a863143dda7981606058d4554ec7af4f88102108
                  download="CV_Joel_PAVIOT.pdf"
                  className="px-8 py-4 border border-zinc-200 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-4 group hover:bg-black hover:text-white transition-all duration-500 rounded-full"
                >
                  Télécharger PDF
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Main CV Container */}
              <div className="bg-white border border-zinc-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* CV Header: Name & Contact */}
                <div className="p-8 md:p-12 lg:p-16 border-b border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 bg-zinc-50/20">
                  <div className="space-y-4">
                    <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl italic tracking-tighter leading-none mb-4">Joël Paviot</h3>
                    <div className="inline-block px-4 py-2 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold">Réseaux & Cybersécurité</div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                    <div className="flex items-center gap-3">
                      <span>Isère (38), France</span>
                      <MapPin size={10} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span>+33 7 72 77 09 04</span>
                      <Phone size={10} />
                    </div>
                    <div className="flex items-center gap-3 underline decoration-zinc-200 underline-offset-4">
                      <span>paviotjoel@orange.fr</span>
                      <Mail size={10} />
                    </div>
                  </div>
                </div>

                {/* CV Body Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column (Info Sidebar) */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-100 bg-zinc-50/10">
                    
                    <div className="p-8 md:p-12 lg:p-16 space-y-20">
                      <section>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 mb-10 pb-4 border-b border-zinc-50 font-bold flex items-center justify-between">
                          <span>FORMATION</span>
                          <span className="w-8 h-px bg-zinc-100" />
                        </h4>
                        <div className="space-y-12">
                          <div className="group">
                            <div className="text-[9px] font-mono text-zinc-300 mb-2 uppercase tracking-widest italic font-bold">2023 — 2026</div>
                            <h5 className="font-serif text-xl italic mb-2 leading-tight">BUT Réseaux & Télécoms</h5>
                            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">IUT 1 - Saint Martin D'Hères</p>
                          </div>
                          <div className="group">
                            <div className="text-[9px] font-mono text-zinc-300 mb-2 uppercase tracking-widest italic font-bold">2020 — 2023</div>
                            <h5 className="font-serif text-xl italic mb-2 leading-tight">Baccalauréat Scientifique</h5>
                            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Option Maths-NSI (Mention TB)</p>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 mb-10 pb-4 border-b border-zinc-50 font-bold flex items-center justify-between">
                          <span>EXPERTISE</span>
                          <span className="w-8 h-px bg-zinc-100" />
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {SKILLS.technical.map((s, i) => (
                            <span key={`cv-tech-${i}`} className="text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1.5 text-zinc-500 hover:border-black hover:text-black transition-all cursor-default">
                              {s}
                            </span>
                          ))}
                        </div>
                      </section>

                      <section>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 mb-10 pb-4 border-b border-zinc-50 font-bold flex items-center justify-between">
                          <span>LOISIRS</span>
                          <span className="w-8 h-px bg-zinc-100" />
                        </h4>
                        <div className="space-y-4">
                          {(SKILLS as any).hobbies?.map((h: string, i: number) => (
                            <div key={`cv-hobby-${i}`} className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 flex items-center gap-4">
                              <span className="w-6 h-px bg-zinc-100" />
                              {h}
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  {/* Right Column (Experience Content) */}
                  <div className="lg:col-span-8">
                    <div className="p-8 md:p-12 lg:p-16 space-y-24">
                      <section>
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-zinc-300 mb-16 pb-2 border-b border-zinc-50 font-bold flex items-center justify-between">
                          <span>PARCOURS . EXPÉRIENCE</span>
                          <span className="text-[10px] font-mono text-zinc-200">/ 01</span>
                        </h4>
                        
                        <div className="space-y-16">
                          {EXPERIENCES.map(exp => (
                            <div key={`cv-exp-v3-${exp.id}`} className="group relative">
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                                <div className="space-y-4 flex-1">
                                  <div className="flex items-center gap-4 mb-2">
                                    <div className="w-2 h-2 rounded-full border border-black bg-white" />
                                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black opacity-30">{exp.company}</p>
                                  </div>
                                  <h5 className="font-serif text-3xl md:text-5xl italic leading-none tracking-tighter group-hover:text-zinc-500 transition-colors">
                                    {exp.role}
                                  </h5>
                                </div>
                                <div className="md:text-right shrink-0 py-2">
                                  <span className="px-5 py-3 border border-zinc-100 text-[10px] font-mono tracking-widest text-zinc-400 uppercase bg-zinc-50/50 rounded-full">
                                    {exp.period}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                <div className="md:col-span-3 text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold italic pt-1">
                                  Missions clés
                                </div>
                                <div className="md:col-span-9 pl-6 border-l border-zinc-100">
                                  <ul className="space-y-5">
                                    {exp.tasks.map((t, i) => (
                                      <li key={`cv-task-v3-${exp.id}-${i}`} className="text-[14px] font-light leading-relaxed text-zinc-500 group-hover:text-zinc-800 transition-colors">
                                        {t}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                      
                      <section className="pt-24 border-t border-zinc-50">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-300 mb-16 font-bold flex items-center justify-between">
                          <span>SAVOIR-ÊTRE . VALEURS</span>
                          <span className="text-[10px] font-mono text-zinc-200">/ 02</span>
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                          {SKILLS.soft.map((s, i) => (
                            <div key={`cv-soft-v3-${i}`} className="group space-y-3">
                              <span className="text-[9px] font-mono text-zinc-200 group-hover:text-black transition-colors block">0{i+1}</span>
                              <p className="text-[12px] uppercase tracking-wider font-bold text-zinc-600 group-hover:tracking-widest transition-all">{s}</p>
                              <div className="h-px w-8 bg-zinc-100 group-hover:w-full transition-all duration-700" />
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-40 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-40">
            <div className="max-w-md">
              <h2 className="font-serif text-6xl italic italic mb-12 tracking-tighter">JP.</h2>
              <p className="text-sm font-light leading-relaxed opacity-50">
                Spécialiste en infrastructures critiques et cybersécurité industrielle. Basé à Grenoble, disponible internationalement.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
              <div className="space-y-6">
                <h5 className="text-[10px] uppercase tracking-widest font-bold">Navigation</h5>
                <ul className="space-y-4 text-sm font-light opacity-50 uppercase tracking-[0.2em]">
                  <li className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActivePage('home')}>Accueil</li>
                  <li className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActivePage('cv')}>CV</li>
                  <li className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActivePage('experience')}>Expérience</li>
                  <li className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActivePage('skills')}>Compétences</li>
                  <li className="hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActivePage('projects')}>Projets</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h5 className="text-[10px] uppercase tracking-widest font-bold">Social</h5>
                <ul className="space-y-4 text-sm font-light opacity-50 uppercase tracking-[0.2em]">
                  <li><a href="https://linkedin.com/in/joel-paviot" className="hover:opacity-100 transition-opacity cursor-pointer">LinkedIn</a></li>
                </ul>
              </div>
              <div className="space-y-6 col-span-2 md:col-span-1">
                <h5 className="text-[10px] uppercase tracking-widest font-bold">Contact</h5>
                <p className="text-sm font-light opacity-50 uppercase tracking-[0.2em] leading-loose">
                  paviotjoel@orange.fr<br/>
                  Grenoble, FR
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-100">
            <p className="text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
              © Portfolio de Joël PAVIOT 2026
            </p>
            <div className="flex gap-12">
              <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em]">Infrastructure & Sécurité</span>
              <span className="text-[10px] font-mono opacity-30 uppercase tracking-[0.3em]">L'efficacité par la rigueur</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
