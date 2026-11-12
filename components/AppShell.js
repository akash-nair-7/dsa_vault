'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['Dashboard', '/', '▦'], ['All Problems', '/problems', '☷'], ['Patterns', '/patterns', '◇'], ['Revision', '/revision', '↻'], ['Settings', '/settings', '⚙']
];
export default function AppShell({ children }) {
  const path = usePathname();
  return <div className="min-h-screen md:flex"><aside className="sticky top-0 z-20 flex h-auto items-center gap-1 border-b border-zinc-800 bg-zinc-950 px-4 py-3 md:h-screen md:w-60 md:flex-col md:items-stretch md:border-b-0 md:border-r md:px-4 md:py-6">
    <Link href="/" className="mr-auto flex items-center gap-2 text-lg font-bold tracking-tight md:mb-8"><span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-sm">⌘</span><span className="hidden md:inline">DSA Vault</span></Link>
    <nav className="flex gap-1 overflow-x-auto md:flex-col">{links.map(([label, href, icon]) => <Link key={href} href={href} className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm ${path === href ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'}`}><span>{icon}</span><span className="hidden md:inline">{label}</span></Link>)}</nav>
    <Link href="/problems/new" className="btn-primary ml-2 md:mt-auto md:ml-0">+ <span className="hidden md:inline">Add Problem</span></Link>
  </aside><main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 md:px-8 md:py-8">{children}</main></div>;
}
