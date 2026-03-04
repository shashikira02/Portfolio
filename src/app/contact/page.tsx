import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';

const ContactPage = () => {
  return (
    <main className='min-h-screen px-6 py-26 max-w-7xl mx-auto' >
      <h1 className='text-4xl font-bold text-center mb-16' >Get In Touch</h1>
      <div className='grid md:grid-cols-2 gap-16'>
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
