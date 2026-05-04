export default function Home() {
  const faqs = [
    {
      q: 'How does symptom tracking help my treatment?',
      a: 'By logging daily symptoms and medications, you reveal patterns over time — helping you and your doctor make data-driven decisions about what works.'
    },
    {
      q: 'Can I share reports with my doctor?',
      a: 'Yes. Generate a clean PDF or shareable summary of your symptom and medication history to bring to any appointment.'
    },
    {
      q: 'Is my health data private?',
      a: 'Absolutely. Your data is encrypted and never sold or shared. You own it and can export or delete it at any time.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Symptoms &amp;<br />Medication Effectiveness
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Log daily symptoms and medications to uncover patterns, measure what works, and generate clear reports for your healthcare provider.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $5/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '📋', title: 'Daily Logging', desc: 'Quick symptom and medication entries in under a minute.' },
          { icon: '📈', title: 'Trend Charts', desc: 'Visualize patterns across days, weeks, and months.' },
          { icon: '📄', title: 'Doctor Reports', desc: 'Export clean summaries for your next appointment.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited symptom & medication logs',
              'Trend charts & pattern insights',
              'PDF reports for healthcare providers',
              'Data export & full privacy controls',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} Symptom &amp; Medication Tracker. All rights reserved.
      </footer>
    </main>
  )
}
