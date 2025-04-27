import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeModel, setActiveModel] = useState(0)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const scrollToModels = () => {
    const modelsSection = document.getElementById('models')
    modelsSection.scrollIntoView({ behavior: 'smooth' })
  }

  const bikeModels = [
    {
      name: "Thunderbolt X1",
      price: "$12,999",
      specs: {
        range: "200 miles",
        speed: "0-60 mph in 3.2s",
        power: "150 kW",
        weight: "185 kg"
      },
      features: [
        "Advanced Regenerative Braking",
        "Adaptive LED Lighting",
        "Wireless Updates",
        "Custom Riding Modes"
      ],
      image: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg"
    },
    {
      name: "Urban Glide E2",
      price: "$8,999",
      specs: {
        range: "150 miles",
        speed: "0-60 mph in 4.5s",
        power: "100 kW",
        weight: "165 kg"
      },
      features: [
        "City Navigation System",
        "Anti-theft GPS Tracking",
        "Eco Mode",
        "Integrated Storage"
      ],
      image: "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg"
    },
    {
      name: "Storm Runner S3",
      price: "$15,999",
      specs: {
        range: "250 miles",
        speed: "0-60 mph in 2.8s",
        power: "180 kW",
        weight: "195 kg"
      },
      features: [
        "Race Track Mode",
        "Carbon Fiber Frame",
        "Advanced Traction Control",
        "Biometric Security"
      ],
      image: "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg"
    }
  ]

  const techSpecs = [
    {
      title: "Battery Technology",
      details: [
        "Next-gen Lithium Ion cells",
        "Advanced thermal management",
        "10-year warranty",
        "Fast charging capability"
      ]
    },
    {
      title: "Motor System",
      details: [
        "Brushless DC motor",
        "Water-cooled design",
        "98% efficiency",
        "Regenerative braking"
      ]
    },
    {
      title: "Frame Design",
      details: [
        "Aerospace-grade aluminum",
        "Carbon fiber components",
        "Optimized aerodynamics",
        "Modular construction"
      ]
    }
  ]

  const awards = [
    {
      year: "2025",
      title: "Best Electric Motorcycle",
      organization: "Green Tech Awards"
    },
    {
      year: "2024",
      title: "Innovation Excellence",
      organization: "Mobility Future"
    },
    {
      year: "2024",
      title: "Design of the Year",
      organization: "Industrial Design Society"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <>
      <nav className="nav">
        <div className="logo">EV Bikes</div>
        <div className={`nav-links ${showMobileMenu ? 'show' : ''}`}>
          <a href="#features" onClick={() => setShowMobileMenu(false)}>Features</a>
          <a href="#models" onClick={() => setShowMobileMenu(false)}>Models</a>
          <a href="#tech" onClick={() => setShowMobileMenu(false)}>Tech</a>
          <a href="#about" onClick={() => setShowMobileMenu(false)}>About</a>
          <a href="#contact" onClick={() => setShowMobileMenu(false)}>Contact</a>
        </div>
        <button className="mobile-menu" onClick={toggleMobileMenu}>
          {showMobileMenu ? '✕' : '☰'}
        </button>
      </nav>

      <motion.section 
        className="hero"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            The Future of Urban Mobility
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the perfect blend of power, style, and sustainability
          </motion.p>
          <motion.button 
            className="cta-button"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToModels}
          >
            Discover Our Bikes
          </motion.button>
        </div>
        <motion.div 
          className="hero-stats"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: heroInView ? 0 : 50, opacity: heroInView ? 1 : 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat">
            <span className="stat-number">250+</span>
            <span className="stat-label">Mile Range</span>
          </div>
          <div className="stat">
            <span className="stat-number">2.8s</span>
            <span className="stat-label">0-60 mph</span>
          </div>
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Emissions</span>
          </div>
        </motion.div>
      </motion.section>

      <section className="features" id="features">
        <h2 className="section-title">Revolutionary Features</h2>
        <div className="features-grid">
          {techSpecs.map((spec, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="feature-title">{spec.title}</h3>
              <ul className="feature-list">
                {spec.details.map((detail, i) => (
                  <li key={i} className="feature-item">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="models" id="models">
        <h2 className="section-title">Our Models</h2>
        <div className="models-showcase">
          {bikeModels.map((model, index) => (
            <motion.div 
              key={index}
              className={`model-card ${activeModel === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setActiveModel(index)}
            >
              <div className="model-image-container">
                <img src={model.image} alt={model.name} className="model-image" />
                <div className="model-overlay">
                  <ul className="model-features">
                    {model.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="model-info">
                <h3 className="model-name">{model.name}</h3>
                <p className="model-price">{model.price}</p>
                <div className="model-specs">
                  <div className="spec">Range: {model.specs.range}</div>
                  <div className="spec">Speed: {model.specs.speed}</div>
                  <div className="spec">Power: {model.specs.power}</div>
                  <div className="spec">Weight: {model.specs.weight}</div>
                </div>
                <motion.button 
                  className="model-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Configure Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tech-specs" id="tech">
        <h2 className="section-title">Technical Excellence</h2>
        <div className="tech-grid">
          {techSpecs.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{tech.title}</h3>
              <ul>
                {tech.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="awards">
        <h2 className="section-title">Recognition & Awards</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="award-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="award-year">{award.year}</span>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-org">{award.organization}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h2 className="section-title">About Our Technology</h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Crafted with Precision</h3>
            <p>Our bikes are manufactured in state-of-the-art facilities using aerospace-grade materials and advanced robotics. Each bike undergoes 100+ quality checks before delivery.</p>
            <h3>Sustainable Production</h3>
            <p>100% powered by renewable energy, our production facility sets new standards in sustainable manufacturing. We use recycled materials wherever possible.</p>
          </motion.div>
          <div className="manufacturing-process">
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Design</h4>
              <p>Aerodynamic modeling & virtual testing</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>Materials</h4>
              <p>Carbon fiber & aerospace aluminum</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4>Assembly</h4>
              <p>Precision robotics & expert craftsmen</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Testing</h4>
              <p>Rigorous quality control & road tests</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="sustainability">
        <h2 className="section-title">Sustainability Commitment</h2>
        <div className="sustainability-content">
          <motion.div 
            className="sustainability-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Zero Emissions</h3>
            <p>Our bikes produce zero direct emissions, contributing to cleaner air in urban environments.</p>
          </motion.div>
          <motion.div 
            className="sustainability-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Renewable Energy</h3>
            <p>All our facilities are powered by 100% renewable energy sources.</p>
          </motion.div>
          <motion.div 
            className="sustainability-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Recycled Materials</h3>
            <p>We use recycled materials in our production whenever possible.</p>
          </motion.div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <select>
              <option value="">Select Model</option>
              {bikeModels.map((model, index) => (
                <option key={index} value={model.name}>{model.name}</option>
              ))}
            </select>
            <textarea placeholder="Message" required></textarea>
            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-item">
              <h4>Visit Our Showroom</h4>
              <p>123 Tech Boulevard<br />Silicon Valley, CA 94025</p>
            </div>
            <div className="info-item">
              <h4>Contact Details</h4>
              <p>Phone: (555) 123-4567<br />Email: info@evbikes.com</p>
            </div>
            <div className="info-item">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                 Saturday: 10:00 AM - 4:00 PM<br />
                 Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EV Bikes</h4>
            <p>Revolutionizing urban mobility with sustainable, high-performance electric motorcycles.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#features">Features</a>
            <a href="#models">Models</a>
            <a href="#tech">Tech</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Warranty Information</a>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 EV Bikes. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App