// app/ui/fonts.ts
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// Secondary font (Static font - weight array is REQUIRED)
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});