export default function AlternativeContact() {
  return (
    <section className="bg-[#0D1F4E] border-t border-white/20 py-16">
      <div className="max-w-4xl mx-auto px-10 text-center">
        <h2 className="font-display font-semibold text-5xl text-white mb-4">
          Alternative Contacts
        </h2>
        <div className="w-16 h-1 bg-[#B8860B] mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Jonathan */}
          <div>
            <h3 className="font-display font-semibold text-2xl text-white mb-2">
              Jonathan Gesalem
            </h3>
            <p className="font-body text-xl text-white">Founder & Chairman</p>
            <p className="font-body text-xl text-white mt-1">+63 32 XXX XXXX</p>
          </div>

          {/* Jiaan */}
          <div>
            <h3 className="font-display font-semibold text-2xl text-white mb-2">
              Jiaan Gesalem
            </h3>
            <p className="font-body text-xl text-white">Operations Director</p>
            <p className="font-body text-xl text-white mt-1">+63 9XX XXX XXXX</p>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-display font-semibold text-2xl text-white mb-2">
              Office
            </h3>
            <p className="font-body text-xl text-white">General Inquiries</p>
            <p className="font-body text-xl text-white mt-1">contact@gesalemgroup.ph</p>
            <p className="font-body text-xl text-white mt-1">Cebu, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
}
