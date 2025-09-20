'use client';

import { useState } from 'react';

export default function Mentors() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    experience: '',
    motivation: '',
    availability: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-8">🙏</div>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Thank You for Volunteering!
          </h1>
          <p className="text-xl text-muted mb-8">
            We're excited to have you join our mentor community. We'll be in touch 
            soon with next steps and onboarding information.
          </p>
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-4">What's Next?</h2>
            <ul className="text-muted space-y-2 text-left">
              <li>• We'll review your application and reach out within 1 week</li>
              <li>• Brief onboarding call to discuss expectations</li>
              <li>• Match you with 2-3 students based on interests</li>
              <li>• Program starts [Start Date]</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            1 Hour a Week Can Change a Kid's Life
          </h1>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Join our community of engineers and volunteers making a direct impact 
            on the next generation of builders. Share your knowledge, experience, 
            and passion with students who need it most.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1:4</div>
              <div className="text-lg text-foreground mb-2">Mentor to Student Ratio</div>
              <div className="text-muted">Personal attention for every student</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1hr</div>
              <div className="text-lg text-foreground mb-2">Per Week Commitment</div>
              <div className="text-muted">Flexible scheduling around your life</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-lg text-foreground mb-2">Lasting Impact</div>
              <div className="text-muted">Relationships that extend beyond the program</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Mentors Do */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            What Our Mentors Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Guide Learning</h3>
              <p className="text-muted">
                Help students navigate coding challenges, debug problems, 
                and understand complex concepts through patient explanation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Career Advice</h3>
              <p className="text-muted">
                Share insights about the tech industry, career paths, 
                and what it takes to succeed as a professional developer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Build Confidence</h3>
              <p className="text-muted">
                Provide encouragement, celebrate wins, and help students 
                believe in their potential to succeed in tech.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Code Reviews</h3>
              <p className="text-muted">
                Review student projects, provide constructive feedback, 
                and teach best practices for writing clean code.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Network Access</h3>
              <p className="text-muted">
                Connect students with opportunities, introduce them to 
                other professionals, and open doors they couldn't access alone.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Long-term Support</h3>
              <p className="text-muted">
                Continue the relationship beyond the program, providing 
                ongoing guidance as students advance in their careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Application Form */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Join Our Mentor Community
            </h2>
            <p className="text-lg text-muted">
              Ready to make a difference? Tell us about yourself and we'll get you started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Basic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Where you work"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your job title"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Motivation */}
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">Tell Us More</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to mentor? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-vertical"
                    placeholder="Share what motivates you to give back and help the next generation..."
                  />
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time Commitment *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select availability</option>
                    <option value="1-hour">1 hour per week</option>
                    <option value="2-hours">2 hours per week</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-background px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Join as Mentor'}
              </button>
              
              <p className="text-muted mt-4 text-sm">
                We'll reach out within a week to discuss next steps.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
