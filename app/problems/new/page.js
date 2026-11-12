import AppShell from '@/components/AppShell';
import ProblemForm from '@/components/ProblemForm';
export default function NewProblem() { return <AppShell><div className="mb-6"><h1 className="text-2xl font-bold">Add Problem</h1><p className="mt-1 text-sm text-zinc-500">Capture the essentials now; fill in the rest whenever you need it.</p></div><ProblemForm /></AppShell>; }
