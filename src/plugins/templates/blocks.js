/**
 * CityBuilder Template Library
 * 20+ pre-designed blocks organized by category
 * Ready to drag & drop into canvas
 */

export const templates = [  // ===== HERO SECTION (5 blocks) =====
  {
    id: 'hero-basic',
    label: 'Hero Basic',
    category: 'Hero',
    content: `
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; min-height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: bold;">Welcome to Your Site</h1>
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
        <h1 style="font-size: 3rem; color: #1f2937; margin-bottom: 15px;">Build Your Dream</h1>
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
      <section style="background: black; color: white; padding: 80px 20px; text-align: center;">
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="background: url('https://picsum.photos/800/450?random=2') center/cover; height: 450px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;">
            <button style="width: 80px; height: 80px; background: rgba(255,255,255,0.3); border: 3px solid white; border-radius: 50%; cursor: pointer; font-size: 30px; color: white;">▶</button>
          </div>
          <h2 style="font-size: 2rem; margin-bottom: 15px;">Watch Our Story</h2>
          <p style="color: #ccc;">See how we can transform your web presence</p>
        </div>
      </section>
    `,
  },
  {
    id: 'hero-dark',
    label: 'Hero Dark',
    category: 'Hero',
    content: `
      <section style="background: #1f2937; color: white; padding: 120px 20px; text-align: center;">
        <h1 style="font-size: 3.5rem; margin-bottom: 20px; font-weight: bold;">Build Something Great</h1>
        <p style="font-size: 1.2rem; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">Start creating your website today with our powerful tools</p>
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
          <button style="padding: 15px 40px; background: #667eea; color: white; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">Start Free</button>
          <button style="padding: 15px 40px; background: transparent; color: white; font-weight: bold; border: 2px solid white; border-radius: 4px; cursor: pointer; font-size: 1rem;">Learn More</button>
        </div>
      </section>
    `,
  },

  // ===== ABOUT SECTION (5 blocks) =====
  {
    id: 'about-simple',
    label: 'About Simple',
    category: 'About',
    content: `
      <section style="padding: 80px 20px; background: white; max-width: 1000px; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">About Us</h2>
        <p style="font-size: 1.1rem; color: #6b7280; line-height: 1.8; margin-bottom: 30px;">We're passionate about helping businesses create beautiful, functional websites. Our intuitive builder makes it easy for anyone to design professional sites.</p>
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
    id: 'about-image-left',
    label: 'About Image Left',
    category: 'About',
    content: `
      <section style="padding: 60px 20px; background: #f9fafb; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
        <img src="https://picsum.photos/400/400?random=3" alt="About" style="width: 100%; height: auto; border-radius: 8px;">
        <div>
          <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">Our Mission</h2>
          <p style="font-size: 1rem; color: #6b7280; line-height: 1.8; margin-bottom: 15px;">Empowering creators to build professional websites without technical barriers.</p>
          <p style="font-size: 1rem; color: #6b7280; line-height: 1.8; margin-bottom: 30px;">We believe everyone deserves access to powerful web creation tools.</p>
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
            <img src="https://picsum.photos/150/150?random=4" alt="Team" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">Alex Johnson</h3>
            <p style="color: #6b7280;">Founder & CEO</p>
          </div>
          <div style="padding: 20px;">
            <img src="https://picsum.photos/150/150?random=5" alt="Team" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">Sarah Smith</h3>
            <p style="color: #6b7280;">Lead Designer</p>
          </div>
          <div style="padding: 20px;">
            <img src="https://picsum.photos/150/150?random=6" alt="Team" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 15px;">
            <h3 style="color: #1f2937; font-size: 1.2rem;">Mike Chen</h3>
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
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2020 - Founded</h3>
            <p style="color: #6b7280;">Started with a simple vision to democratize web design</p>
          </div>
          <div style="padding: 20px; border-left: 4px solid #667eea; margin-bottom: 30px;">
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2022 - Growth</h3>
            <p style="color: #6b7280;">Reached 5000+ users milestone and launched new features</p>
          </div>
          <div style="padding: 20px; border-left: 4px solid #667eea;">
            <h3 style="color: #1f2937; font-size: 1.3rem; margin-bottom: 5px;">2024 - Present</h3>
            <p style="color: #6b7280;">Expanding globally with 25+ pre-built templates</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'about-values',
    label: 'About Values',
    category: 'About',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Our Values</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; max-width: 1000px; margin: 0 auto;">
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">💡</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Innovation</h3>
              <p style="color: #6b7280;">Constantly improving and adding new features based on user feedback</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">🤝</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Community</h3>
              <p style="color: #6b7280;">Building a supportive community of creators and designers</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">✨</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Excellence</h3>
              <p style="color: #6b7280;">Delivering high-quality tools and support to every user</p>
            </div>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">🌍</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Accessibility</h3>
              <p style="color: #6b7280;">Making website creation accessible to everyone worldwide</p>
            </div>
          </div>
        </div>
      </section>
    `,
  },

  // ===== FEATURES SECTION (6 blocks) =====
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
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Lightning Fast</h3>
            <p style="color: #6b7280;">Optimized for speed and performance</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">🎨</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Beautiful</h3>
            <p style="color: #6b7280;">Professional templates included</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">🔒</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Secure</h3>
            <p style="color: #6b7280;">Enterprise-grade security</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px;">📱</div>
            <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Responsive</h3>
            <p style="color: #6b7280;">Works on all devices</p>
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
            <li style="padding: 15px 0; color: #6b7280; border-bottom: 1px solid #e5e7eb;">✓ 50+ templates</li>
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
            <h3 style="color: #1f2937; font-size: 1.5rem; margin-bottom: 30px;">Starter</h3>
            <p style="font-size: 2rem; color: #667eea; font-weight: bold; margin-bottom: 30px;">$9<span style="font-size: 1rem; color: #6b7280;">/mo</span></p>
            <ul style="list-style: none; padding: 0;">
              <li style="padding: 10px 0; color: #6b7280;">✓ 3 websites</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ Basic support</li>
              <li style="padding: 10px 0; color: #6b7280;">✓ 500MB storage</li>
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
    id: 'features-icons-grid',
    label: 'Features Icons Grid',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: white; max-width: 1000px; margin: 0 auto;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Powerful Tools</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px;">
          <div style="display: flex; gap: 20px;">
            <div style="font-size: 2.5rem; flex-shrink: 0;">🎯</div>
            <div>
              <h3 style="color: #1f2937; font-size: 1.2rem; margin-bottom: 10px;">Targeted Design</h3>
              <p style="color: #6b7280;">Reach your audience with precision targeting</p>
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
  {
    id: 'features-steps',
    label: 'Features Steps',
    category: 'Features',
    content: `
      <section style="padding: 80px 20px; background: #f9fafb;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">How It Works</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1200px; margin: 0 auto;">
          <div style="padding: 30px; background: white; border-radius: 8px; text-align: center;">
            <div style="width: 50px; height: 50px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 15px;">1</div>
            <h3 style="color: #1f2937; font-size: 1.1rem; margin-bottom: 10px;">Sign Up</h3>
            <p style="color: #6b7280; font-size: 0.9rem;">Create your account in seconds</p>
          </div>
          <div style="padding: 30px; background: white; border-radius: 8px; text-align: center;">
            <div style="width: 50px; height: 50px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 15px;">2</div>
            <h3 style="color: #1f2937; font-size: 1.1rem; margin-bottom: 10px;">Choose Template</h3>
            <p style="color: #6b7280; font-size: 0.9rem;">Pick from 50+ designs</p>
          </div>
          <div style="padding: 30px; background: white; border-radius: 8px; text-align: center;">
            <div style="width: 50px; height: 50px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 15px;">3</div>
            <h3 style="color: #1f2937; font-size: 1.1rem; margin-bottom: 10px;">Customize</h3>
            <p style="color: #6b7280; font-size: 0.9rem;">Drag, drop, and edit easily</p>
          </div>
          <div style="padding: 30px; background: white; border-radius: 8px; text-align: center;">
            <div style="width: 50px; height: 50px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin: 0 auto 15px;">4</div>
            <h3 style="color: #1f2937; font-size: 1.1rem; margin-bottom: 10px;">Publish</h3>
            <p style="color: #6b7280; font-size: 0.9rem;">Go live instantly</p>
          </div>
        </div>
      </section>
    `,
  },

  // ===== GALLERY SECTION (3 blocks) =====
  {
    id: 'gallery-grid',
    label: 'Gallery Grid',
    category: 'Gallery',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Gallery</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1200px; margin: 0 auto;">
          <img src="https://picsum.photos/300/300?random=7" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
          <img src="https://picsum.photos/300/300?random=8" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
          <img src="https://picsum.photos/300/300?random=9" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
          <img src="https://picsum.photos/300/300?random=10" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
          <img src="https://picsum.photos/300/300?random=11" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
          <img src="https://picsum.photos/300/300?random=12" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px; cursor: pointer;">
        </div>
      </section>
    `,
  },
  {
    id: 'gallery-masonry',
    label: 'Gallery Masonry',
    category: 'Gallery',
    content: `
      <section style="padding: 80px 20px; background: #f9fafb;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Masonry Gallery</h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; max-width: 1200px; margin: 0 auto;">
          <img src="https://picsum.photos/250/250?random=13" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/300?random=14" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/280?random=15" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/310?random=16" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/270?random=17" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/290?random=18" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/260?random=19" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
          <img src="https://picsum.photos/250/320?random=20" alt="Gallery" style="width: 100%; height: auto; border-radius: 8px;">
        </div>
      </section>
    `,
  },
  {
    id: 'gallery-carousel',
    label: 'Gallery Carousel',
    category: 'Gallery',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Photo Carousel</h2>
        <div style="max-width: 800px; margin: 0 auto; position: relative;">
          <img src="https://picsum.photos/800/400?random=21" alt="Carousel" style="width: 100%; height: auto; border-radius: 8px;">
          <div style="position: absolute; top: 50%; transform: translateY(-50%); left: 20px; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer; font-size: 1.5rem;">❮</div>
          <div style="position: absolute; top: 50%; transform: translateY(-50%); right: 20px; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; display: flex; align-items: center; justify-content: center; border-radius: 4px; cursor: pointer; font-size: 1.5rem;">❯</div>
        </div>
      </section>
    `,
  },

  // ===== TESTIMONIALS SECTION (3 blocks) =====
  {
    id: 'testimonials-simple',
    label: 'Testimonials Simple',
    category: 'Testimonials',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">What Our Users Say</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1200px; margin: 0 auto;">
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px;">
            <p style="color: #6b7280; margin-bottom: 20px; font-style: italic;">"Amazing tool! Built my website in just 2 hours. No coding required!"</p>
            <p style="color: #1f2937; font-weight: bold;">- John Smith</p>
            <p style="color: #6b7280; font-size: 0.9rem;">Founder, Tech Startup</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px;">
            <p style="color: #6b7280; margin-bottom: 20px; font-style: italic;">"Best website builder I've used. Clean interface and great support."</p>
            <p style="color: #1f2937; font-weight: bold;">- Sarah Johnson</p>
            <p style="color: #6b7280; font-size: 0.9rem;">Marketing Manager</p>
          </div>
          <div style="padding: 30px; background: #f9fafb; border-radius: 8px;">
            <p style="color: #6b7280; margin-bottom: 20px; font-style: italic;">"Highly recommend! Professional results without the cost of a developer."</p>
            <p style="color: #1f2937; font-weight: bold;">- Mike Chen</p>
            <p style="color: #6b7280; font-size: 0.9rem;">Small Business Owner</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'testimonials-featured',
    label: 'Testimonials Featured',
    category: 'Testimonials',
    content: `
      <section style="padding: 80px 20px; background: #f9fafb;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Success Stories</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="padding: 40px; background: white; border-radius: 8px; border-left: 4px solid #667eea;">
            <div style="display: flex; gap: 15px; margin-bottom: 20px;">
              <img src="https://picsum.photos/60/60?random=22" alt="User" style="width: 60px; height: 60px; border-radius: 50%;">
              <div>
                <p style="color: #1f2937; font-weight: bold; margin-bottom: 2px;">Emily Rodriguez</p>
                <p style="color: #6b7280; font-size: 0.9rem;">E-commerce Business Owner</p>
              </div>
            </div>
            <p style="color: #6b7280; line-height: 1.8; font-size: 1.1rem;">"Using CityBuilder, I launched my online store in just one week. The drag-and-drop interface is intuitive, and the export feature made it easy to integrate with my hosting provider. My sales have increased 40% since going live!"</p>
            <div style="margin-top: 20px; color: #ffc107;">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'testimonials-carousel',
    label: 'Testimonials Carousel',
    category: 'Testimonials',
    content: `
      <section style="padding: 80px 20px; background: white;">
        <h2 style="font-size: 2.5rem; color: #1f2937; text-align: center; margin-bottom: 50px;">Customer Reviews</h2>
        <div style="max-width: 700px; margin: 0 auto; position: relative;">
          <div style="padding: 40px; background: #f9fafb; border-radius: 8px; text-align: center;">
            <div style="font-size: 2rem; margin-bottom: 15px;">❝</div>
            <p style="color: #6b7280; font-size: 1.1rem; margin-bottom: 20px; font-style: italic;">This tool changed my entire workflow. I can now build client websites in a fraction of the time.</p>
            <p style="color: #1f2937; font-weight: bold;">Alex Mitchell</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-bottom: 15px;">Web Designer & Freelancer</p>
            <div style="color: #ffc107;">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>
    `,
  },

  // ===== CTA SECTION (4 blocks) =====
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
    label: 'CTA Newsletter',
    category: 'CTA',
    content: `
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px;">
        <div style="max-width: 500px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 2rem; margin-bottom: 15px;">Subscribe to Our Newsletter</h2>
          <p style="font-size: 1rem; margin-bottom: 30px; opacity: 0.9;">Get the latest updates, tips, and templates delivered to your inbox</p>
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
    label: 'CTA Dual Button',
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
  {
    id: 'cta-testimonial',
    label: 'CTA with Testimonial',
    category: 'CTA',
    content: `
      <section style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px;">
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
          <h2 style="font-size: 2.5rem; margin-bottom: 30px;">Join 10,000+ Happy Users</h2>
          <blockquote style="font-size: 1.2rem; margin-bottom: 30px; font-style: italic;">"CityBuilder transformed how I work. What used to take days now takes hours. Absolutely recommend!"</blockquote>
          <p style="font-weight: bold; margin-bottom: 30px;">- Jessica Lee, Digital Entrepreneur</p>
          <button style="padding: 15px 40px; background: white; color: #667eea; font-weight: bold; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">Start Building Today</button>
        </div>
      </section>
    `,
  },

  // ===== FOOTER SECTION (4 blocks) =====
  {
    id: 'footer-simple',
    label: 'Footer Simple',
    category: 'Footer',
    content: `
      <footer style="background: #1f2937; color: white; padding: 40px 20px; text-align: center;">
        <p style="margin-bottom: 10px;">&copy; 2024 Your Company. All rights reserved.</p>
        <div style="display: flex; gap: 20px; justify-content: center;">
          <a href="#" style="color: #9ca3af; text-decoration: none;">Privacy Policy</a>
          <a href="#" style="color: #9ca3af; text-decoration: none;">Terms of Service</a>
          <a href="#" style="color: #9ca3af; text-decoration: none;">Contact Us</a>
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
            <h4 style="margin-bottom: 15px; font-weight: bold;">Product</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Features</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Pricing</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Company</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">About</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Blog</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Resources</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Documentation</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Support</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">API</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Legal</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Privacy</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Terms</a></li>
              <li><a href="#" style="color: #9ca3af; text-decoration: none; font-size: 0.9rem;">Contact</a></li>
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
            <h3 style="margin-bottom: 15px; font-size: 1.5rem; font-weight: bold;">CityBuilder</h3>
            <p style="color: #9ca3af; margin-bottom: 20px;">The easiest way to create beautiful websites without coding</p>
            <div style="display: flex; gap: 15px;">
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.2rem;">f</a>
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.2rem;">𝕏</a>
              <a href="#" style="color: #9ca3af; text-decoration: none; font-size: 1.2rem;">in</a>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Subscribe to Updates</h4>
            <form style="display: flex; gap: 10px;">
              <input type="email" placeholder="your@email.com" style="flex: 1; padding: 10px; border: none; border-radius: 4px;">
              <button type="submit" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Send</button>
            </form>
          </div>
        </div>
        <div style="border-top: 1px solid #374151; padding-top: 20px; text-align: center; color: #6b7280;">
          <p>&copy; 2024 CityBuilder. All rights reserved.</p>
        </div>
      </footer>
    `,
  },
  {
    id: 'footer-dark',
    label: 'Footer Dark Premium',
    category: 'Footer',
    content: `
      <footer style="background: #0f172a; color: white; padding: 80px 20px;">
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 40px; max-width: 1400px; margin: 0 auto; margin-bottom: 60px;">
          <div>
            <h4 style="margin-bottom: 20px; font-weight: bold; font-size: 1.1rem;">CityBuilder</h4>
            <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.6;">Build beautiful websites with our intuitive drag-and-drop editor. No coding required.</p>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Product</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Features</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Pricing</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block;">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Resources</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Docs</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Blog</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block;">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Legal</h4>
            <ul style="list-style: none; padding: 0;">
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Privacy</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block; margin-bottom: 8px;">Terms</a></li>
              <li><a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem; display: block;">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style="margin-bottom: 15px; font-weight: bold;">Follow Us</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem;">Facebook</a>
              <a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem;">Twitter</a>
              <a href="#" style="color: #94a3b8; text-decoration: none; font-size: 0.9rem;">LinkedIn</a>
            </div>
          </div>
        </div>
        <div style="border-top: 1px solid #334155; padding-top: 30px; text-align: center; color: #64748b;">
          <p>&copy; 2024 CityBuilder. Built with ❤️ for creators worldwide.</p>
        </div>
      </footer>
    `,
  },
];

export default templates;  // ===== HERO SECTION (5 blocks) =====
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
