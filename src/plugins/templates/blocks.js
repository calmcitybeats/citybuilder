/**
 * CityBuilder Template Library
 * 20+ pre-designed blocks organized by category
 * Ready to drag & drop into canvas
 */

export const templates = [
  // ===== HERO SECTION (5 blocks) =====
  {
    id: 'hero-basic',
    label: 'Hero Basic',
    category: 'Hero',
    content: `
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; min-height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: bold;">Welcome to CityBuilder</h1>
        <p style="font-size: 1.3rem; margin-bottom: 30px;">Create stunning websites without coding</p>
        <button style="padding: 15px 40px; background: white; color: #667eea; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">Get Started</button>
      </section>
    `,
  },
  {
    id: 'hero-minimal',
    label: 'Hero Minimal',
    category: 'Hero',
    content: `
      <section style="background: white; padding: 80px 20px; text-align: center; border-bottom: 1px solid #e5e7eb;">
        <h1 style="font-size: 3rem; color: #1f2937; margin-bottom: 15px;">Build Your Dream Website</h1>
        <p style="font-size: 1.1rem; color: #6b7280; max-width: 600px; margin: 0 auto;">Simple, powerful, and flexible website builder for everyone</p>
      </section>
    `,
  },
  {
    id: 'hero-image',
    label: 'Hero with Image',
    category: 'Hero',
    content: `
      <section style="background: #f3f4f6; padding: 60px 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
        <div>
          <h1 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">Welcome</h1>
          <p style="font-size: 1.1rem; color: #6b7280; line-height: 1.6; margin-bottom: 30px;">Create amazing content with our easy-to-use editor</p>
          <button style="padding: 12px 30px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Learn More</button>
        </div>
        <img src="https://picsum.photos/400/300?random=1" alt="Hero" style="width: 100%; height: auto; border-radius: 8px;">
      </section>
    `,
  },
  {
    id: 'hero-video',
    label: 'Hero with Video',
    category: 'Hero',
    content: `
      <section style="background: black; color: white; padding: 80px 20px; text-align: center; position: relative;">
        <div style="position: relative; max-width: 800px; margin: 0 auto;">
          <div style="background: url('https://picsum.photos/800/450?random=2') center/cover; height: 450px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;">
            <button style="width: 80px; height: 80px; background: rgba(255,255,255,0.3); border: 3px solid white; border-radius: 50%; cursor: pointer; font-size: 30px; color: white;">▶</button>
          </div>
          <h2 style="font-size: 2rem; margin-bottom: 15px;">Watch Our Story</h2>
          <p style="color: #ccc;">See how CityBuilder can transform your web presence</p>
        </div>
      </section>
    `,
  },
  {
    id: 'hero-cta',
    label: 'Hero CTA',
    category: 'Hero',
    content: `
      <section style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%); color: white; padding: 120px 20px; text-align: center;">
        <h1 style="font-size: 3rem; margin-bottom: 20px; font-weight: bold;">Ready to Build?</h1>
        <p style="font-size: 1.2rem; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">Start creating your website today. No credit card required.</p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button style="padding: 15px 40px; background: white; color: #667eea; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">Start Free</button>
          <button style="padding: 15px 40px; background: transparent; color: white; font-weight: bold; border: 2px solid white; border-radius: 4px; cursor: pointer; font-size: 1rem;">Learn More</button>
        </div>
      </section>
    `,
  },

  // ===== ABOUT SECTION (4 blocks) =====
  {
    id: 'about-simple',
    label: 'About Simple',
    category: 'About',
    content: `
      <section style="padding: 80px 20px; background: white; max-width: 1000px; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">About Us</h2>
        <p style="font-size: 1.1rem; color: #6b7280; line-height: 1.8; margin-bottom: 30px;">We're passionate about helping businesses create beautiful, functional websites. With our intuitive builder, anyone can design professional sites without any technical knowledge.</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px;">
          <div style="padding: 20px;">
            <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 10px;">10K+</h3>
            <p style="color: #6b7280;">Happy Users</p>
          </div>
          <div style="padding: 20px;">
            <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 10px;">5 Years</h3>
            <p style="color: #6b7280;">In Business</p>
          </div>
          <div style="padding: 20px;">
            <h3 style="color: #667eea; font-size: 1.5rem; margin-bottom: 10px;">24/7</h3>
            <p style="color: #6b7280;">Support</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'about-image-text',
    label: 'About Image + Text',
    category: 'About',
    content: `
      <section style="padding: 60px 20px; background: #f9fafb; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; max-width: 1200px; margin: 0 auto;">
        <img src="https://picsum.photos/400/400?random=3" alt="About" style="width: 100%; height: auto; border-radius: 8px;">
        <div>
          <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">Our Mission</h2>
          <p style="font-size: 1rem; color: #6b7280; line-height: 1.8; margin-bottom: 15px;">Empowering creators and entrepreneurs to build professional websites without technical barriers.</p>
          <p style="font-size: 1rem; color: #6b7280; line-height: 1.8; margin-bottom: 30px;">We believe everyone deserves access to powerful web creation tools, regardless of their technical background.</p>
          <button style="padding: 12px 30px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Read More</button>
        </div>
      </section>
    `,
  },
  {
    id: 'about-team',
    label: 'About Team',
    category: 'About',
    content: `
      <section style="padding: 80px 20px; background: white; text-align: center;">
        <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 50px;">Meet Our Team</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; max-width: 1000px; margin: 0 auto;">
          <div style="padding: 20px;">
            <img src="https://picsum.photos/150/150?random=4" alt="Team member" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">John Doe</h3>
            <p style="color: #6b7280;">Founder & CEO</p>
          </div>
          <div style="padding: 20px;">
            <img src="https://picsum.photos/150/150?random=5" alt="Team member" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">Jane Smith</h3>
            <p style="color: #6b7280;">Lead Designer</p>
          </div>
          <div style="padding: 20px;">
            <img src="https://picsum.photos/150/150?random=6" alt="Team member" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">Mike Johnson</h3>
            <p style="color: #6b7280;">Head Developer</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'about-timeline',
    label: 'About Timeline',
    category: 'About',
    content: `
      <section style="padding: 80px 20px; background: #f9fafb;">
        <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 50px; text-align: center;">Our Journey</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="padding: 20px; border-left: 4px solid #667eea; margin-bottom: 30px;">
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2019 - Founded</h3>
            <p style="color: #6b7280;">Started with a simple vision</p>
          </div>
          <div style="padding: 20px; border-left: 4px solid #667eea; margin-bottom: 30px;">
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2021 - Growth</h3>
            <p style="color: #6b7280;">Reached 5000+ users milestone</p>
          </div>
          <div style="padding: 20px; border-left: 4px solid #667eea;">
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2024 - Present</h3>
            <p style="color: #6b7280;">Continuing to innovate and expand</p>
          </div>
        </div>
      </section>
    `,
  },

  // ===== FEATURES SECTION (4 blocks) =====
  {
    id: 'features-grid',
    label: 'Features Grid',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Key Features</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; max-width: 1200px; margin: 0 auto;">
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">⚡</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Fast</h3>
            <p style="color: #6b7280;">Lightning quick load times</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">🎨</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Beautiful</h3>
            <p style="color: #6b7280;">Stunning templates included</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">🔒</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Secure</h3>
            <p style="color: #6b7280;">Enterprise-grade security</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">📱</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Mobile</h3>
            <p style="color: #6b7280;">Fully responsive design</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'features-list',
    label: 'Features List',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: #f9fafb;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Why Choose Us</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 1000px; margin: 0 auto;">
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ Drag & drop interface</li>
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ 1000+ templates</li>
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ SEO optimized</li>
            <li style="padding: 15px 0; color: #6b7280;">✓ Free hosting included</li>
          </ul>
          <ul style="list-style: none; padding: 0;">
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ 24/7 support</li>
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ SSL certificate</li>
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ Analytics included</li>
            <li style="padding: 15px 0; color: #6b7280;">✓ Custom domain</li>
          </ul>
        </div>
      </section>
    `,
  },
  {
    id: 'features-comparison',
    label: 'Features Comparison',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Compare Plans</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1200px; margin: 0 auto;">
          <div style="padding: 40px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; font-size: 1.5rem; margin-bottom: 30px;">Basic</h3>
            <p style="font-size: 2rem; color: #667eea; font-weight: bold; margin-bottom: 30px;">$9<span style="font-size: 1rem; color: #6b7280;">/mo</span></p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 10px 0; color: #6b7280;">✓ 5 websites</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ Basic support</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ 1GB storage</li>
            </ul>
          </div>
          <div style="padding: 40px; background: #667eea; color: white; border-radius: 8px; transform: scale(1.05); box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);">
            <h3 style="font-size: 1.5rem; margin-bottom: 30px;">Pro</h3>
            <p style="font-size: 2rem; font-weight: bold; margin-bottom: 30px;">$29<span style="font-size: 1rem;">/mo</span></p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 10px 0;">✓ Unlimited websites</li>
              <li style="padding: 10px 0;">✓ Priority support</li>
              <li style="padding: 10px 0;">✓ 100GB storage</li>
            </ul>
          </div>
          <div style="padding: 40px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #1f2937; font-size: 1.5rem; margin-bottom: 30px;">Business</h3>
            <p style="font-size: 2rem; color: #667eea; font-weight: bold; margin-bottom: 30px;">$99<span style="font-size: 1rem; color: #6b7280;">/mo</span></p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 10px 0; color: #6b7280;">✓ Everything in Pro</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ Dedicated support</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ Unlimited storage</li>
            </ul>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'features-icons',
    label: 'Features with Icons',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: white; max-width: 1000px; margin: 0 auto;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Powerful Tools</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px;">
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">🎯</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Targeted Marketing</h3>
              <p style="color: #6b7280;">Reach your audience with precision</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">📊</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Analytics</h3>
              <p style="color: #6b7280;">Deep insights into your performance</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">🔌</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Integrations</h3>
              <p style="color: #6b7280;">Connect with your favorite tools</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">⚙️</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Customization</h3>
              <p style="color: #6b7280;">Tailor everything to your brand</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // ===== CTA SECTION (3 blocks) =====
  {
    id: 'cta-simple',
    label: 'CTA Simple',
    category: 'CTA',
    content: `
      <section style="background: #667eea; color: white; padding: 60px 20px; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 20px;">Ready to get started?</h2>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">Join thousands of creators building beautiful websites</p>
        <button style="padding: 15px 40px; background: white; color: #667eea; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">Sign Up Now</button>
      </section>
    `,
  },
  {
    id: 'cta-form',
    label: 'CTA with Form',
    category: 'CTA',
    content: `
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px;">
        <div style="max-width: 500px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 2rem; margin-bottom: 15px;">Get Our Newsletter</h2>
          <p style="font-size: 1rem; margin-bottom: 30px; opacity: 0.9;">Subscribe to get tips and updates delivered to your inbox</p>
          <form style="display: flex; gap: 10px;">
            <input type="email" placeholder="your@email.com" style="flex: 1; padding: 12px; border: none; border-radius: 4px; font-size: 1rem;">
            <button type="submit" style="padding: 12px 30px; background: white; color: #667eea; font-weight: bold; border: none; border-radius: 4px; cursor: pointer;">Subscribe</button>
          </form>
        </div>
      </section>
    `,
  },
  {
    id: 'cta-two-buttons',
    label: 'CTA Two Buttons',
    category: 'CTA',
    content: `
      <section style="background: white; padding: 80px 20px; border-top: 1px solid #e5e7eb; text-align: center;">
        <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">What will you create?</h2>
        <p style="font-size: 1.1rem; color: #6b7280; margin-bottom: 40px;">Start building your next project today</p>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <button style="padding: 15px 40px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 1rem;">Start Free Trial</button>
          <button style="padding: 15px 40px; background: transparent; color: #667eea; border: 2px solid #667eea; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 1rem;">Schedule Demo</button>
        </div>
      </section>
    `,
  },

  // ===== FOOTER (3 blocks) =====
  {
    id: 'footer-simple',
    label: 'Footer Simple',
    category: 'Footer',
    content: `
      <footer style="background: #1f2937; color: white; padding: 40px 20px; text-align: center;">
        <p style="margin-bottom: 10px;">&copy; 2024 CityBuilder. All rights reserved.</p>
        <div style="display: flex; gap: 20px; justify-content: center;">
          <a href="#" style="color: #9ca3af; text-decoration: none;">Privacy</a>
          <a href="#" style="color: #9ca3af; text-decoration: none;">Terms</a>
          <a href="#" style="color: #9ca3af; text-decoration: none;">Contact</a>
        </div>
      </footer>
    `,
  },
  {
    id: 'footer-multi-column',
    label: 'Footer Multi-Column',
    category: 'Footer',
    content: `
      <footer style="background: #111827; color: white; padding: 60px 20px;">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; max-width: 1200px; margin: 0 auto; margin-bottom: 40px;">
          <div>
            <h4 style="margin-bottom: 15px;">Product</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Features</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Pricing</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px;">Company</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">About</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Blog</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px;">Resources</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Docs</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Support</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">API</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px;">Legal</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Privacy</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Terms</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none;">Contact</a></li>
            </ul>
          </div>
        </div>
        <div style="border-top: 1px solid #374151; padding-top: 20px; text-align: center; color: #6b7280;">
          <p>&copy; 2024 CityBuilder. All rights reserved.</p>
        </div>
      </footer>
    `,
  },
  {
    id: 'footer-newsletter',
    label: 'Footer with Newsletter',
    category: 'Footer',
    content: `
      <footer style="background: #1f2937; color: white; padding: 60px 20px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 1200px; margin: 0 auto; margin-bottom: 40px; align-items: start;">
          <div>
            <h3 style="margin-bottom: 15px; font-size: 1.5rem;">CityBuilder</h3>
            <p style="color: #9ca3af; margin-bottom: 20px;">The easiest way to create beautiful websites</p>
            <div style="display: flex; gap: 15px;">
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.5rem;">f</a>
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.5rem;">𝕏</a>
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.5rem;">in</a>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 15px;">Subscribe to Updates</h4>
            <form style="display: flex; gap: 10px;">
              <input type="email" placeholder="your@email.com" style="flex: 1; padding: 10px; border: none; border-radius: 4px;">
              <button type="submit" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer;">Send</button>
            </form>
          </div>
        </div>
        <div style="border-top: 1px solid #374151; padding-top: 20px; text-align: center; color: #6b7280;">
          <p>&copy; 2024 CityBuilder. All rights reserved.</p>
        </div>
      </footer>
    `,
  },
];

export default templates;
