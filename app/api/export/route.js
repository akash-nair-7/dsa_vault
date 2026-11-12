import { NextResponse } from 'next/server';
import { problemsCollection } from '@/lib/mongodb';
import { serialize } from '@/lib/problem';
export async function GET() { try { const data = (await (await problemsCollection()).find({}).sort({ createdAt: -1 }).toArray()).map(serialize); return new NextResponse(JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), problems: data }, null, 2), { headers: { 'Content-Type': 'application/json', 'Content-Disposition': 'attachment; filename="dsa-vault-export.json"' } }); } catch (error) { return NextResponse.json({ error: error.message }, { status: 500 }); } }
