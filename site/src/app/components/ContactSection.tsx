type ContactSectionProps = {
  /** Ancre de la section (ex. <a href="#contact">) */
  id?: string;
  /** Préfixe des id des champs pour éviter les doublons entre pages */
  fieldIdPrefix?: string;
};

export function ContactSection({
  id = "contact",
  fieldIdPrefix = "contact",
}: ContactSectionProps) {
  const fid = (name: string) => `${fieldIdPrefix}-${name}`;

  return (
    <section id={id} className="bg-white py-0 text-black">
      <div className="mx-auto max-w-[1280px]">
        <div className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-[596px]">
            <h2 className="text-center font-cormorant-sc text-[40px] font-normal leading-[35px] text-black">
              Contact
            </h2>
            <p className="mt-3 text-center font-cormorant-garamond text-[16px] leading-[16px] text-black">
              Un premier échange permet souvent d’y voir plus clair.
              <br />
              Toute relation commence par une conversation.
            </p>

            <form className="mt-12 space-y-5">
              <div>
                <label
                  htmlFor={fid("name")}
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Nom
                </label>
                <input
                  id={fid("name")}
                  name="name"
                  className="h-[38px] w-full rounded-[10px] border border-black/20 bg-white px-4 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={fid("email")}
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Email
                </label>
                <input
                  id={fid("email")}
                  name="email"
                  type="email"
                  className="h-[38px] w-full rounded-[10px] border border-black/20 bg-white px-4 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor={fid("message")}
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Message
                </label>
                <textarea
                  id={fid("message")}
                  name="message"
                  className="h-[122px] w-full resize-none rounded-[10px] border border-black/20 bg-white px-4 py-3 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>

              <div className="pt-3 text-center">
                <button
                  type="submit"
                  className="h-[38px] min-w-[142px] bg-[#B9A889] px-8 font-cormorant-sc text-[16px] text-white"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
