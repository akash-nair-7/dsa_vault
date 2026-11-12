'use client';
import Link from 'next/link';
import { useEffect,useMemo,useState } from 'react';
import AppShell from '@/components/AppShell';
import { TOPICS } from '@/lib/problem';
export default function Patterns(){const [problems,setProblems]=useState([]);useEffect(()=>{fetch('/api/problems').then(r=>r.json()).then(setProblems)},[]);const all=useMemo(()=>[...new Set([...TOPICS,...problems.flatMap(p=>p.topics)])].sort(),[problems]);return <AppShell><h1 className="text-2xl font-bold">DSA Patterns</h1><p className="mt-1 text-sm text-zinc-500">Browse problems by topic and pattern.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{all.map(topic=>{const matches=problems.filter(p=>p.topics.includes(topic));return <Link href={`/problems?topic=${encodeURIComponent(topic)}`} key={topic} className="card p-4 hover:border-zinc-600"><p className="font-medium">{topic}</p><p className="mt-2 text-sm text-zinc-500">{matches.length} {matches.length===1?'problem':'problems'}</p></Link>})}</div></AppShell>}
