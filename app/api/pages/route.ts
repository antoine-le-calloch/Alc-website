import {NextResponse} from "next/server";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@lib/firebase";

export async function GET(request: Request) {
    try {
        const snapshot = await getDocs(collection(db, 'pages'));
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        let message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}