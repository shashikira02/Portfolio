import { certifications } from '@/lib/certifications.data'

const CertificationsSection = () => {
    return (
        <section className='max-w-5xl mx-auto mt-24 space-y-10'>
            <h2>Certifications</h2>
            <div className='grid md:grid-cols-2 gap-8' >
                {certifications.map(cert => (
                    <div key={cert.id} className='p-6 border border-white/5 rounded-xl bg-white/5 backdrop-blur-md'>
                        <h3 className='text-lg font-semibold' >
                            {cert.title}
                        </h3>

                        <p className='text-sm text-neutral-400' >
                            {cert.issuer}
                        </p>

                        <p className='text-sm text-neutral-400' >
                            {cert.date}
                        </p>

                        {cert.credentialUrl && (
                            <a href={cert.credentialUrl} target='_blank' className='inline-block mt-3 text-sm underline hover:opacity-70' >
                                View Credential
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CertificationsSection