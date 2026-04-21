import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-muted mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Padel Toolkit"
              width={28}
              height={28}
              className="w-7 h-7 rounded-md opacity-60"
            />
            <div>
              <p className="text-sm font-semibold text-foreground/40">
                Padel Toolkit
              </p>
              <p className="text-xs text-foreground/30 mt-0.5">
                Simple tools for padel players
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/tools"
              className="text-sm text-foreground/30 hover:text-foreground/60 transition-colors"
            >
              Tools
            </Link>
            <span className="text-foreground/10">|</span>
            <p className="text-sm text-foreground/30">
              Made with care for the padel community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
