import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { problemsCollection } from '@/lib/mongodb';
import { serialize } from '@/lib/problem';
export async function PATCH(request, { params }) { try { const _id = new ObjectId(params.id); const body = await request.json(); const update = { revision: Boolean(body.revision), updatedAt: new Date() }; if (body.assessment) { update.assessment = body.assessment; update.lastRevisedAt = new Date(); } const result = await (await problemsCollection()).findOneAndUpdate({ _id }, { $set: update }, { returnDocument: 'after' }); return result ? NextResponse.json(serialize(result)) : NextResponse.json({ error: 'Not found' }, { status: 404 }); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); } }
