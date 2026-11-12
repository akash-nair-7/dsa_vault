import AppShell from '@/components/AppShell';
import ProblemList from '@/components/ProblemList';
import Link from 'next/link';
export default function ProblemsPage() { return <AppShell><div className="mb-6 flex items-center justify-between"><div><h1 className="text-2xl font-bold">All Problems</h1><p className="mt-1 text-sm text-zinc-500">Search, filter, and review your solutions.</p></div><Link href="/problems/new" className="btn-primary">+ Add Problem</Link></div><ProblemList /></AppShell>; }
