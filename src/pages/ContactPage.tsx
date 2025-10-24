import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { pageVariants, pixelVariants, staggerContainer } from '@/lib/animations';

const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:mithrajith46@gmail.com',
    icon: Mail,
    color: 'violet',
    handle: 'mithrajith46@gmail.com',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Mithrajith',
    icon: Github,
    color: 'text',
    handle: '@Mithrajith',
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/mithrajitks046',
    icon: Linkedin,
    color: 'cyan',
    handle: 'mithrajitks046',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Mithrajith',
    icon: Twitter,
    color: 'lime',
    handle: '@Mithrajith',
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, randomly succeed or fail
    const success = Math.random() > 0.3;
    setSubmitStatus(success ? 'success' : 'error');
    setIsSubmitting(false);
    
    if (success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } else {
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <motion.div
      className="min-h-screen pixel-grid crt py-20"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Header */}
          <motion.div className="text-center space-y-4" variants={pixelVariants}>
            <h1 className="font-pixel text-3xl md:text-5xl text-violet-2">
              Get In Touch
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Let's create something amazing together. Drop me a message or connect on social media.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div variants={pixelVariants}>
              <PixelCard className="p-6">
                <h2 className="font-display text-xl text-text mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-muted text-sm mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-surface border border-violet-2/20 rounded text-text focus:border-violet-2 focus:ring-1 focus:ring-violet-2 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-muted text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-surface border border-violet-2/20 rounded text-text focus:border-violet-2 focus:ring-1 focus:ring-violet-2 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-surface border border-violet-2/20 rounded text-text focus:border-violet-2 focus:ring-1 focus:ring-violet-2 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-muted text-sm mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 py-2 bg-surface border border-violet-2/20 rounded text-text focus:border-violet-2 focus:ring-1 focus:ring-violet-2 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted">
                      * Required fields
                    </div>
                    
                    <PixelButton
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      loading={isSubmitting}
                      className={`${
                        submitStatus === 'success' ? 'bg-lime hover:bg-lime/90' :
                        submitStatus === 'error' ? 'bg-rose hover:bg-rose/90' : ''
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle size={16} />
                          Sent!
                        </span>
                      ) : submitStatus === 'error' ? (
                        <span className="flex items-center gap-2">
                          <AlertCircle size={16} />
                          Error
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Send Message
                        </span>
                      )}
                    </PixelButton>
                  </div>

                  {/* Status messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-lime text-sm bg-lime/10 border border-lime/20 rounded p-3"
                    >
                      Thanks for your message! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-rose text-sm bg-rose/10 border border-rose/20 rounded p-3"
                    >
                      Oops! Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </PixelCard>
            </motion.div>

            {/* Social links and info */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div variants={pixelVariants}>
                <PixelCard className="p-6">
                  <h3 className="font-display text-lg text-text mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded hover:bg-surface/50 transition-colors group"
                          whileHover={{ x: 4 }}
                        >
                          <div className={`p-2 rounded bg-${social.color}/20`}>
                            <Icon className={`text-${social.color}`} size={18} />
                          </div>
                          <div>
                            <div className="font-medium text-text group-hover:text-violet-2 transition-colors">
                              {social.name}
                            </div>
                            <div className="text-muted text-sm">{social.handle}</div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </PixelCard>
              </motion.div>

              {/* <motion.div variants={pixelVariants}>
                <PixelCard className="p-6">
                  <h3 className="font-display text-lg text-text mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Location:</span>
                      <span className="text-text">Remote / Global</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Response time:</span>
                      <span className="text-text">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Availability:</span>
                      <span className="text-lime">Open to projects</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Timezone:</span>
                      <span className="text-text">UTC+0</span>
                    </div>
                  </div>
                </PixelCard>
              </motion.div> */}

              <motion.div variants={pixelVariants}>
                <PixelCard className="p-6 bg-violet/5 border border-violet/20">
                  <h3 className="font-display text-lg text-violet-2 mb-2">Let's Build Something!</h3>
                  <p className="text-muted text-sm">
                    Every great project starts with a conversation.
                  </p>
                </PixelCard>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
