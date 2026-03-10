import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className='min-h-screen pt-16 md:pt-24 w-full scroll-mt-16' >
      <div className='max-w-6xl mx-auto space-y-8 md:space-y-12'>
        <div className='space-y-3 md:space-y-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight'>Get In Touch</h1>
          <p className='text-muted-foreground text-base md:text-lg'>Have a project in mind or want to collaborate? I&apos;d love to hear from you.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
