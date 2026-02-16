export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
      <div className="glass p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Shad Hasan. All rights reserved.</p>
        <p>Built with Next.js, Cloudflare Pages, and a security-first mindset.</p>
      </div>
    </footer>
  );
}
