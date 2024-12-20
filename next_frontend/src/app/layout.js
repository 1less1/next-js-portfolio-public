import './globals.css'; 
import AdaptiveNavbar from './components/adaptive_navbar';
import Footer from './components/footer';

export const metadata = {
  title: "1less1's Portfolio",
  description: "I totally didn't use AI to help me duhhh!",
};

// Global Website Layout
export default function RootLayout({ children }) {
  return (

    <html lang="en">
      
      <body 
        className="relative min-h-screen min-w-screen flex flex-col font-nunito" 
        style={{ 
          backgroundImage: "url('/images/comic_bg_one.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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