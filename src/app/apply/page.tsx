'use client';

import { useState } from 'react';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    whyCoding: '',
    projectIdea: '',
    perseveranceStory: '',
    householdIncome: '',
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
          <div className="text-6xl mb-8">🎉</div>
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Application Submitted!
          </h1>
          <p className="text-xl text-muted mb-8">
            Thank you for applying to Axis W25 Cohort. We'll review your application 
            and get back to you within 2 weeks.
          </p>
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-foreground mb-4">What's Next?</h2>
            <ul className="text-muted space-y-2 text-left">
              <li>• We'll review your application within 2 weeks</li>
              <li>• Selected candidates will be invited for a brief interview</li>
              <li>• Final decisions will be communicated by [Date]</li>
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Apply to W25 Cohort
          </h1>
          <p className="text-xl text-muted mb-4">
            <span className="text-primary font-semibold">20 spots available</span> • Applications close soon
          </p>
          <p className="text-lg text-muted">
            Tell us about yourself and why you want to join Axis
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Basic Information</h2>
              
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
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
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
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="grade" className="block text-sm font-medium text-foreground mb-2">
                  What grade are you in? *
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select your grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Application Questions */}
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Tell Us About You</h2>
              
              <div className="space-y-6">
                {/* Question 1 */}
                <div>
                  <label htmlFor="whyCoding" className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to learn coding? *
                  </label>
                  <textarea
                    id="whyCoding"
                    name="whyCoding"
                    required
                    rows={4}
                    value={formData.whyCoding}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-vertical"
                    placeholder="Share what draws you to coding and what you hope to achieve..."
                  />
                </div>

                {/* Question 2 */}
                <div>
                  <label htmlFor="projectIdea" className="block text-sm font-medium text-foreground mb-2">
                    What's something you'd love to build? *
                  </label>
                  <textarea
                    id="projectIdea"
                    name="projectIdea"
                    required
                    rows={4}
                    value={formData.projectIdea}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-vertical"
                    placeholder="Describe an app, website, or project you'd be excited to create..."
                  />
                </div>

                {/* Question 3 */}
                <div>
                  <label htmlFor="perseveranceStory" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about a time you didn't give up. *
                  </label>
                  <textarea
                    id="perseveranceStory"
                    name="perseveranceStory"
                    required
                    rows={4}
                    value={formData.perseveranceStory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-vertical"
                    placeholder="Share a story about overcoming a challenge or persisting through difficulty..."
                  />
                </div>
              </div>
            </div>

            {/* Income Information */}
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Household Information</h2>
              <p className="text-muted mb-6 leading-relaxed">
                Axis is designed to support kids who don't usually get access to programs like this. 
                To help us prioritize applicants fairly, we ask for your household income range. 
                Your answer will be kept private.
              </p>
              
              <div>
                <label htmlFor="householdIncome" className="block text-sm font-medium text-foreground mb-2">
                  Household Income Range *
                </label>
                <select
                  id="householdIncome"
                  name="householdIncome"
                  required
                  value={formData.householdIncome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select income range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000–$50,000</option>
                  <option value="50k-75k">$50,000–$75,000</option>
                  <option value="75k-100k">$75,000–$100,000</option>
                  <option value="100k-plus">$100,000+</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-background px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              
              <p className="text-muted mt-4 text-sm">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
