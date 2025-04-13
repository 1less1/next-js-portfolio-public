import Head from 'next/head';

import AdaptiveNavbar from '@/components/adaptive_navbar';
import Footer from '@/components/footer';
import '@/globals.css'; 

export const metadata = {
  title: "1less1's Portfolio",
  description: "Welcome to my portfolio!",
};

// Global Website Layout
export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <Head>
        {/* Preload the background image */}
        <link rel="preload" href="/images/comic_bg_one_long.webp" as="image" />
      </Head>

      
      <body
        className="relative min-h-screen min-w-screen flex flex-col font-nunito"
        style={{
          backgroundImage: "url('/images/comic_bg_one_long.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // backgroundAttachment: 'fixed', // Parallax effect: keeps the background fixed while scrolling
        }}
      >

        {/* Overlay div for the dark tint */}
        <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

        {/* Foreground Content */}
        <main className='container mx-auto flex-grow p-5 relative z-10 overflow-hidden'>
          

          <AdaptiveNavbar />  
          
          {children} {/* Ensures Page Content will be displayed */}
        
                  
        </main>

        <Footer />
        
      </body>
      
    </html>
  );
}
