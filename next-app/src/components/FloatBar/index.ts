import dynamic from 'next/dynamic';

export const FloatBar = dynamic(() => import('./FloatBar').then(n => n.FloatBar), {ssr: false});
