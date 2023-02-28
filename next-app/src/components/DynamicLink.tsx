'use client';

// https://github.com/vercel/next.js/issues/43879
// https://github.com/vercel/next.js/issues/42991#issuecomment-1367466954
import {forwardRef} from 'react';
import {useRouter} from 'next/navigation';

export const DynamicLink = forwardRef<HTMLAnchorElement, Omit<React.HTMLProps<HTMLAnchorElement>, 'ref'>>(
    ({href, children, ...props}, ref) => {
        const router = useRouter();

        return (
            <a
                {...props}
                ref={ref}
                href={href}
                onClick={e => {
                    e.preventDefault();
                    router.push(href!);
                }}
            >
                {children}
            </a>
        );
    }
);

DynamicLink.displayName = 'DynamicLink';
