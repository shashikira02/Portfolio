import Link from "next/link"

const notFound = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-muted-foreground">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground">
                        The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                </div>
                <Link 
                    href="/" 
                    className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
                >
                    Go Home
                </Link>
            </div>
        </section>
    )
}

export default notFound