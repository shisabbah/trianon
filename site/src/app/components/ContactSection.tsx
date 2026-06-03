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
        <div className="px-site py-[clamp(3rem,5vw+1rem,6rem)]">
          <div className="mx-auto max-w-[596px]">
            <h2 className="text-center font-cormorant-sc text-[clamp(1.5rem,3.5vw+0.5rem,2.5rem)] font-normal leading-tight text-black md:leading-[1.1]">
              Contact
            </h2>
            <p className="mt-3 text-center font-cormorant-garamond text-[clamp(0.85rem,0.35vw+0.82rem,1rem)] leading-snug text-black">
              Un premier échange permet souvent d’y voir plus clair.
              <br />
              Toute relation commence par une conversation.
            </p>

            <form className="mt-[clamp(2.25rem,4vw,3.25rem)] space-y-[clamp(1rem,2vw,1.35rem)]">
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
