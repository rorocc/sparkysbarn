// src/components/mdx/Sources.tsx
interface Source {
    title: string;
    url?: string;
    author?: string;
    year?: number;
}

export default function Sources({ sources }: { sources: Source[] }) {
    if (!sources?.length) return null;

    return (
        <section className="mt-12 pt-6">
            <h2 className="text-lg font-semibold mb-4">Quellen</h2>
            <ol className="space-y-2 text-sm text-gray-600">
                {sources.map((source, index) => (
                    <li key={index}>
                        {source.author && <span>{source.author}. </span>}
                        {source.url ? (
                            <a href={source.url} className="underline hover:text-primary" target="_blank">
                                {source.title}
                            </a>
                        ) : (
                            <span>{source.title}</span>
                        )}
                        {source.year && <span> ({source.year})</span>}
                    </li>
                ))}
            </ol>
        </section>
    );
}