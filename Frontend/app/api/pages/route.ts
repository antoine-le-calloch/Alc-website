import {NextResponse} from "next/server";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase";

export async function GET() {
    try {
        const snapshot = await getDocs(collection(db, 'pages'));
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        return NextResponse.json({}, { status: 500 });
    }
}