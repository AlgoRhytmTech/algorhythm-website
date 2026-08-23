import Eyebrow from '@/components/Eyebrow';

export default function HomeContact() {
  return (
    <section id="contact" className="container-page hairline py-20 md:py-28">
      <Eyebrow index="03">Contact</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        Get in touch
      </h2>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-paper-300">
        Replace this with a real contact channel — email, a contact form, or a
        link to wherever you'd like people to reach you.
      </p>
      <a
        href="mailto:algorhythm65@gmail.com"
        className="btn-secondary mt-8 inline-flex"
      >
        algorhythm65@gmail.com
      </a>
    </section>
  );
}
