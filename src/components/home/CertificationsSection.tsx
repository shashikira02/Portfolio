import { certifications } from '@/lib/certifications.data'

const CertificationsSection = () => {
    return (
        <section id='certifications' className='max-w-5xl mx-auto mt-24 py-16 space-y-12 scroll-mt-24'>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>Certifications</h2>
            <div className='grid md:grid-cols-2 gap-6' >
                {certifications.map(cert => (
                    <div key={cert.id} className='p-6 border border-border rounded-xl bg-card/50 backdrop-blur-md hover:border-border/80 transition-colors space-y-3'>
                        <h3 className='text-lg md:text-xl font-bold' >
                            {cert.title}
                        </h3>

                        <p className='text-sm text-muted-foreground' >
                            {cert.issuer}
                        </p>

                        <p className='text-sm text-muted-foreground' >
                            {cert.date}
                        </p>

                        {cert.credentialUrl && (
                            <a href={cert.credentialUrl} target='_blank' rel='noopener noreferrer' className='inline-block mt-2 text-sm text-foreground font-medium underline underline-offset-2 hover:opacity-70 transition' >
                                View Credential →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CertificationsSection