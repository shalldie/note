import dynamic from 'next/dynamic';

// import {GitComment} from './GitComment';

export const GitComment = dynamic(() => import('./GitComment').then(n => n.GitComment), {ssr: false});
