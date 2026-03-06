import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>
        ),
        a: ({ href, children }) => (
            <Link href={href ?? "#"} target={'_blank'} className="text-primary hover:underline">
                {children}
            </Link>
        ),
        blockquote: ({ children }) => (
            <blockquote className="italic m-4 border-l-4 border-primary px-4 w-fit">{children}</blockquote>
        ),
        img: ({ src, alt }) => (
            <Image src={src ?? ""} alt={alt ?? ""} width={800} height={400} />
        )
}