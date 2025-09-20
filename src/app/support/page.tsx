import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Sponsor a Coder for $500
          </h1>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Your support directly funds a student's journey from curiosity to career. 
            Every dollar goes toward mentorship, resources, and opportunities that 
            change lives.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Your Impact by the Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$500</div>
              <div className="text-lg text-foreground mb-2">Sponsors 1 Student</div>
              <div className="text-muted">Complete 8-week program</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-lg text-foreground mb-2">Weeks of Learning</div>
              <div className="text-muted">Intensive coding education</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1:4</div>
              <div className="text-lg text-foreground mb-2">Mentor Ratio</div>
              <div className="text-muted">Personal guidance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-lg text-foreground mb-2">Lifetime Value</div>
              <div className="text-muted">Career transformation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Money Goes */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Where Your Money Goes
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Mentorship Program (40%)
                </h3>
                <p className="text-muted">
                  Recruiting, training, and supporting industry professionals who 
                  provide 1:1 guidance to students throughout the program.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Technology & Resources (25%)
                </h3>
                <p className="text-muted">
                  Learning platforms, development tools, cloud services, and 
                  hardware support for students who need it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Curriculum Development (20%)
                </h3>
                <p className="text-muted">
                  Creating and updating course materials, projects, and assessments 
                  that prepare students for real-world careers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Operations & Growth (15%)
                </h3>
                <p className="text-muted">
                  Program coordination, student support, and scaling our impact 
                  to reach more underserved communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Sponsorship Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individual Sponsor */}
            <div className="bg-background p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Individual</h3>
              <div className="text-4xl font-bold text-primary mb-4">$500</div>
              <p className="text-muted mb-6">Sponsor one student's complete journey</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Fund 1 student's program
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Progress updates
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Tax-deductible receipt
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Alumni network access
                </li>
              </ul>
              
              <button className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Sponsor a Student
              </button>
            </div>

            {/* Corporate Partner */}
            <div className="bg-background p-8 rounded-lg border border-primary/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">Corporate</h3>
              <div className="text-4xl font-bold text-primary mb-4">$5,000</div>
              <p className="text-muted mb-6">Sponsor an entire cohort</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Fund 10 students
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Company logo on website
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Recruiting pipeline access
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Demo day presentation
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Custom impact report
                </li>
              </ul>
              
              <button className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Partner with Us
              </button>
            </div>

            {/* Foundation */}
            <div className="bg-background p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Foundation</h3>
              <div className="text-4xl font-bold text-primary mb-4">$25K+</div>
              <p className="text-muted mb-6">Scale our impact nationwide</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Fund 50+ students
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Named program recognition
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Board advisory role
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Program expansion input
                </li>
                <li className="flex items-center text-foreground">
                  <span className="text-primary mr-2">✓</span>
                  Quarterly impact meetings
                </li>
              </ul>
              
              <button className="w-full bg-primary text-background py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Transform Lives
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Nonprofit Structure */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Transparent & Accountable
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">501(c)(3) Status</h3>
              <p className="text-muted">
                Axis operates as a registered nonprofit organization. 
                All donations are tax-deductible to the full extent allowed by law.
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Impact Reporting</h3>
              <p className="text-muted">
                We provide detailed reports on how funds are used and the 
                outcomes achieved, ensuring complete transparency with our supporters.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <p className="text-lg text-muted mb-8">
              Ready to change lives through code?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-background px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Donate Now
              </button>
              
              <Link
                href="/about"
                className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-background transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
