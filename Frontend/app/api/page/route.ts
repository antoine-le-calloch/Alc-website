import {NextResponse} from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "@/lib/firebase";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get('slug');

        if (!slug) { return NextResponse.json({}, { status: 404 });}

        const snapshot = await getDocs(
            query(collection(db, 'pages'), where('title', '==', slug))
        );

        if (snapshot.empty) {return NextResponse.json({}, { status: 404 });}

        const page = snapshot.docs.map(doc => doc.data());
        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({}, { status: 500 });
    }
}