function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8.2h2.7l.4-3.1h-3.1V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.4v1.2H6.5v3.1h2.9V22h4.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
      <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 2A2.7 2.7 0 1 1 12 14.7 2.7 2.7 0 0 1 12 9.3Z" />
      <path d="M17.8 6.6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.2 2H21l-6.6 7.6L22 22h-6.4l-4-5.2L6.8 22H4l7.1-8.2L2 2h6.6l3.6 4.7L18.2 2Zm-1.1 18h1.5L7.3 3.9H5.7L17.1 20Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12.2 2c3.5 0 5.8 1.6 6.4 4.2.3 1.4.2 3-.3 4.4-.5 1.5-1.4 2.7-2.6 3.4 1.4.8 2.4 2.1 2.9 3.8.6 2 .3 4.2-1 5.9-1.4 1.8-3.7 2.8-6.7 2.8H7c-1.1 0-2-.9-2-2v-16c0-3.7 2.5-6.5 7.2-6.5Zm-.2 2c-3.8 0-5 2-5 4.5V20h4.8c2.4 0 4-.7 5-2 .9-1.2 1.1-2.8.7-4.2-.4-1.3-1.3-2.3-2.6-2.8 1.8-.9 3-2.6 3.5-4.6.4-1.7.5-3.3.2-4.5C16.8 5.4 15 4 12 4Z" />
    </svg>
  );
}

const socialRow = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "Threads", href: "#", Icon: ThreadsIcon },
];

export default function ContactPage() {
  return (
    <main className="bg-white pb-16 pt-40 text-neutral-900 sm:pb-20 sm:pt-48 md:pt-52 lg:pt-60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 pt-2 sm:pt-4 md:pt-6">
          <h1 className="font-cormorant-sc text-[32px] font-normal uppercase leading-none text-black sm:text-[38px] md:text-[44px]">
            Contact
          </h1>
          <div className="h-px w-full bg-neutral-300" />
        </div>

        <div className="mt-14 space-y-4 text-left sm:mt-16">
          <h2 className="font-cormorant-sc text-[26px] font-normal leading-tight text-black sm:text-[30px] md:text-[32px]">
            Entrer en relation avec Trianon Capital
          </h2>
          <p className="max-w-[720px] font-cormorant-garamond text-[12px] font-normal uppercase leading-relaxed tracking-[0.08em] text-neutral-700 sm:text-[13px] md:text-[14px]">
            Un premier échange permet souvent d’y voir plus clair. Nous vous
            répondrons avec discrétion et attention.
          </p>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-0">
          <div className="min-w-0 lg:pr-10">
            <h3 className="font-cormorant-sc text-[17px] font-normal uppercase tracking-[0.06em] text-black sm:text-[18px]">
              Nos informations de contact
            </h3>
            <p className="mt-3 font-cormorant-garamond text-[15px] leading-relaxed text-neutral-800">
              Toute relation commence par une conversation.
            </p>
            <ul className="mt-8 space-y-4 font-cormorant-garamond text-[16px] text-neutral-900">
              <li className="flex gap-2">
                <span className="shrink-0 text-neutral-500">&gt;</span>
                <a className="hover:underline" href="tel:+33100000000">
                  +33 1 XX XX XX XX
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-neutral-500">&gt;</span>
                <a
                  className="break-all hover:underline"
                  href="mailto:contact@trianoncapital.fr"
                >
                  contact@trianoncapital.fr
                </a>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-neutral-500">&gt;</span>
                <span>26 rue XXX, Paris</span>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              {socialRow.map((s) => (
                <a
                  key={s.label}
                  aria-label={s.label}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-opacity hover:opacity-85"
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0 border-neutral-300 lg:border-l lg:pl-10">
            <h3 className="font-cormorant-sc text-[17px] font-normal uppercase tracking-[0.06em] text-black sm:text-[18px]">
              Demande de rendez-vous
            </h3>
            <form className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="page-contact-name"
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Nom
                </label>
                <input
                  id="page-contact-name"
                  name="name"
                  autoComplete="name"
                  className="h-[38px] w-full rounded-[10px] border border-black/20 bg-white px-4 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="page-contact-email"
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Email
                </label>
                <input
                  id="page-contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-[38px] w-full rounded-[10px] border border-black/20 bg-white px-4 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="page-contact-message"
                  className="mb-1 block font-cormorant-sc text-[16px] text-black"
                >
                  Message
                </label>
                <textarea
                  id="page-contact-message"
                  name="message"
                  className="h-[122px] w-full resize-none rounded-[10px] border border-black/20 bg-white px-4 py-3 font-cormorant-sc text-[16px] text-black shadow-[0px_2px_4px_rgba(0,0,0,0.10)] outline-none"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="h-[38px] min-w-[142px] bg-[#B9A889] px-8 font-cormorant-sc text-[16px] font-normal uppercase tracking-wide text-white"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
