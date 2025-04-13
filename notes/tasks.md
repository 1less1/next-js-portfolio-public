# Tasks

## Loading Squares
- I want to be able to make a grid of pulsating "loading" squares the exact
same aspect ratio as the real "InstaPostCard". Once done loading, the real
post cards will replace the "temporary loading squares" smoothly without
layout shift (should just appear in the exact same spot -> opacity goes
from 0 to 1 for the real squares and then 1 to 0 for the loading squares). 
- Technically the loaing squares will always "exist" but they will be invisible once the real
content is ready to render.

### Hybrid Solution
- Keep, But Fully Detach with `display: none`

This approach initially **fades out** the loading squares (`opacity: 0`) and then **removes them from the DOM** using `display: none` to free up resources.

#### **Example Implementation (React + Tailwind)**

```tsx
import { useState, useEffect } from "react";

const InstaPostCard = ({ imageUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {/* Loading Placeholder */}
      <div
        className={`absolute inset-0 bg-gray-300 animate-pulse transition-opacity duration-500 ${
          isLoaded ? "opacity-0 hidden" : "opacity-100"
        }`}
      />

      {/* Actual Image */}
      <img
        src={imageUrl}
        alt="Insta Post"
        className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
```
## Design

### Fonts
**Bangers** - google font for comic book punchlines (headers)  
**Nunito** - google font used for the default font for all website content

### Colors
- Blue = #94b6b7
- Purple = #8b7fa2
- Tan = #e2ddc6

