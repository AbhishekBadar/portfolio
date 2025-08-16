const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h2 className="text-headline">About</h2>

                            <div className="space-y-6 text-body-lg text-gray-600">
                <p>
                  I'm a full-stack developer with a passion for creating digital
                  experiences that matter. With a Computer Engineering
                  background and over 2 years of hands-on experience, I
                  specialize in building scalable web applications and
                  innovative browser extensions.
                </p>

                <p>
                  I care about clarity over cleverness, shipping in small loops,
                  and leaving things easier to maintain than I found them. My
                  working style is calm and methodical: write it down, automate
                  the boring parts, measure what matters, and keep privacy in
                  mind by default.
                </p>

                <p>
                  Outside work, I'm a football fan (forever Manchester United)
                  and a steady reader. Books that shape how I think: The
                  Personal MBA, The Psychology of Money, Do Epic Shit, and The
                  Richest Man in Babylon. Currently reading: Psycho-Cybernetics
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            {/* Add spacing to align with main content */}
            <div className="hidden lg:block lg:pt-10"></div>
            
            <div className="space-y-6">
              <h3 className="text-title">Background</h3>

              <div className="space-y-6 text-body text-gray-600">
                <div className="space-y-2">
                  <div className="font-semibold text-black text-lg">Education</div>
                  <div className="space-y-1">
                    <div className="font-medium text-gray-900">BTech in Information Technology - RCOEM College</div>
                    <div className="font-medium text-gray-900">Minor in AI - IIT Ropar (Pursuing)</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-semibold text-black text-lg">Experience</div>
                  <div className="font-medium text-gray-900">2+ years in full-stack development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
