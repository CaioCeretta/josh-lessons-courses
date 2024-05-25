import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className="relative h-20 bg-white">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div
          className="flex h-full flex-col items-center justify-center md:flex-row
        md:justify-between"
        >
          <div className="pb-2 text-center md:pb-0 md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Casecobra Cases. All Rights
              Reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                className="text-sm text-muted-foreground hover:text-gray-600"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="text-sm text-muted-foreground hover:text-gray-600"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm text-muted-foreground hover:text-gray-600"
                href="#"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export { Footer }
