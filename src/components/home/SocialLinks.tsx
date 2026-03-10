import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const SocialLinks = () => {
  return (
    <section>
      <div>
        <Link href='#' aria-label="GitHub" >
          <Github className="hover:opacity-70 transition" />GitHub
        </Link>
        <Link href='#' aria-label="LinkedIn" >
          <Linkedin className="hover:opacity-70 transition" />LinkedIn
        </Link>
        <Link href='#' aria-label="Email" >
          <Mail className="hover:opacity-70 transition" />GMail
        </Link>

      </div>
    </section>
  )
}

export default SocialLinks