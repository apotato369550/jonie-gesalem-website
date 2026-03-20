export default function ContactForm() {
  return (
    <section className="bg-[#0D1F4E] py-24">
      <div className="w-3/4 mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid grid-cols-3 gap-12">
          {/* LEFT: Contact Persons (~35%) */}
          <div className="col-span-1">
            {/* Eyebrow label */}
            <div className="uppercase tracking-[0.15em] text-xs font-bold text-color-gold mb-8">
              Reach Out To
            </div>

            {/* Contact persons list */}
            <div className="space-y-8">
              {/* Contact person entry */}
              <div>
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-color-gold flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white mb-1">
                      Jonathan Gesalem
                    </h3>
                    <p className="text-xs text-color-gold uppercase tracking-[0.1em]">
                      Founder & Chairman
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact person entry */}
              <div>
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-color-gold flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white mb-1">
                      Jiaan Gesalem
                    </h3>
                    <p className="text-xs text-color-gold uppercase tracking-[0.1em]">
                      Operations Director
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact person entry */}
              <div>
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-color-gold flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white mb-1">
                      Office
                    </h3>
                    <p className="text-xs text-color-gold uppercase tracking-[0.1em]">
                      General Inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form (~65%) */}
          <div className="col-span-2">
            {/* Section header */}
            <div className="mb-10">
              <h2 className="font-display font-semibold text-2xl text-white">
                Get In Touch
              </h2>
            </div>

            {/* Contact form */}
            <form className="space-y-6">
              {/* Contact Type dropdown */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Contact Type
                </label>
                <select className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold">
                  <option value="">Select a contact type</option>
                  <option value="general">General Inquiry</option>
                  <option value="franchise">Franchise Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder=""
                  className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block uppercase tracking-[0.12em] text-xs text-white font-bold mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder=""
                  className="w-full bg-white border border-[#E8E0D0] rounded-sm px-4 py-3 font-body text-[1rem] text-color-ink focus:outline-none focus:border-color-gold resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="button"
                className="w-full bg-color-gold text-[#0D1F4E] font-display font-semibold py-3 rounded-sm uppercase tracking-[0.1em] text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
