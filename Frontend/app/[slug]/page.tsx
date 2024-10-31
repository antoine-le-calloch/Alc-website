import {notFound} from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page?slug=${params.slug}`);
    if (res.status === 500) {
        throw new Error('Internal Server Error');
    }
    if (res.status === 404) {
        return notFound();
    }
    const page = (await res.json())[0];
    
    return (
        <main className="flex-grow">
            <div className="container">
                <div className="text-center py-8">
                    <h1>{page.title}</h1>
                </div>
            </div>
        </main>
    );
};