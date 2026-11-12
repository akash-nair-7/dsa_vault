import { MongoClient } from 'mongodb';

let client;
let clientPromise;
function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Please define MONGODB_URI in .env.local or your deployment environment.');
  if (clientPromise) return clientPromise;
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}
export default getClientPromise;
export async function problemsCollection() {
  const mongo = await getClientPromise();
  return mongo.db(process.env.MONGODB_DB || 'dsa-vault').collection('problems');
}
