import dynamic from 'next/dynamic';

export const SupportDialog = dynamic(() => import('./SupportDialog').then(n => n.SupportDialog), {ssr: false});
