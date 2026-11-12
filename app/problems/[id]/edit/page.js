'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AppShell from '@/components/AppShell';
import ProblemForm from '@/components/ProblemForm';
export default function EditProblem(){const {id}=useParams();const [p,setP]=useState(null);const [error,setError]=useState('');useEffect(()=>{fetch(`/api/problems/${id}`).then(async r=>{const d=await r.json();if(!r.ok)throw Error(d.error);setP(d)}).catch(e=>setError(e.message))},[id]);return <AppShell><div className="mb-6"><h1 className="text-2xl font-bold">Edit Problem</h1></div>{error?<p className="text-red-400">{error}</p>:p?<ProblemForm initial={p}/>:<p className="text-zinc-400">Loading problem…</p>}</AppShell>}
