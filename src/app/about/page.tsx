import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            We believe coding is the ladder out of poverty.
          </h1>
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Axis exists to make sure every kid has a chance to climb it. 
            We're building a movement that transforms lives through code, 
            one student at a time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                To provide world-class coding education and mentorship to young people 
                who lack economic opportunities, creating pathways to high-paying careers 
                in technology and fostering a lifelong community of builders.
              </p>
              <p className="text-muted">
                We believe that talent is equally distributed, but opportunity is not. 
                Axis exists to bridge that gap.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                A world where every young person, regardless of their economic background, 
                has access to the tools, knowledge, and network needed to build a 
                successful career in technology.
              </p>
              <p className="text-muted">
                We envision a future where coding bootcamps are as accessible as 
                public libraries, and where economic mobility through tech is 
                a reality for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Our Story
          </h2>
          
          <div className="space-y-8 text-lg text-muted leading-relaxed">
            <p>
              Axis was born from a simple observation: the most transformative coding 
              programs are often the least accessible to those who need them most. 
              While elite bootcamps charge $15,000+ and require students to quit their 
              jobs, millions of talented young people are left behind.
            </p>
            
            <p>
              We started with a different question: What if we could create a program 
              that was both world-class and accessible? What if we could combine the 
              rigor of top-tier education with the flexibility needed by students 
              juggling school, work, and family responsibilities?
            </p>
            
            <p>
              The answer became Axis—a selective, intensive program that meets students 
              where they are while challenging them to reach heights they never thought 
              possible. We're not just teaching code; we're building a movement.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Meet the Team
          </h2>
          
          {/* Placeholder for team members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Founder & CEO</h3>
              <p className="text-primary mb-4">Coming Soon</p>
              <p className="text-muted text-sm">
                Passionate about democratizing access to coding education and 
                creating opportunities for underserved communities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Head of Curriculum</h3>
              <p className="text-primary mb-4">Coming Soon</p>
              <p className="text-muted text-sm">
                Expert in designing hands-on learning experiences that prepare 
                students for real-world software development careers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community Manager</h3>
              <p className="text-primary mb-4">Coming Soon</p>
              <p className="text-muted text-sm">
                Dedicated to building and nurturing the Axis community, 
                connecting students with mentors and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Advisory Board
          </h2>
          <p className="text-lg text-muted mb-16">
            We're building an advisory board of industry leaders, educators, 
            and advocates who share our vision of accessible coding education.
          </p>
          
          <div className="bg-secondary p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Join Our Advisory Board
            </h3>
            <p className="text-muted mb-6">
              Are you a leader in tech, education, or social impact? 
              Help us shape the future of accessible coding education.
            </p>
            <button className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted text-sm">
                We maintain the highest standards in everything we do, 
                from curriculum design to student support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility</h3>
              <p className="text-muted text-sm">
                Quality education should not be a privilege. 
                We remove barriers, not create them.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Growth</h3>
              <p className="text-muted text-sm">
                We believe in the potential of every student and 
                create environments where growth is inevitable.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted text-sm">
                Learning happens best in community. We build 
                lasting connections that extend far beyond the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Join the Movement
          </h2>
          <p className="text-xl text-muted mb-12">
            Whether you're a student, mentor, supporter, or just someone who believes 
            in equal opportunity—there's a place for you in the Axis community.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/apply"
              className="bg-primary text-background px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Apply as Student
            </Link>
            
            <Link
              href="/mentors"
              className="border border-primary text-primary px-6 py-4 rounded-lg font-semibold hover:bg-primary hover:text-background transition-colors"
            >
              Become a Mentor
            </Link>
            
            <Link
              href="/support"
              className="border border-primary text-primary px-6 py-4 rounded-lg font-semibold hover:bg-primary hover:text-background transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
