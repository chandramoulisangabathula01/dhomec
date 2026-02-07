"use client";

import { useState, useRef, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  modelName: string | null;
}

export default function ProductGallery({ images, productName, modelName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (img: string) => {
    setActiveImage(img);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    
    // Calculate position as percentage (0-100)
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Area */}
      <div 
        className="relative bg-white border border-border rounded-xl overflow-hidden aspect-square flex items-center justify-center cursor-crosshair group z-10"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        ref={imageRef}
      >
        {activeImage ? (
           <>
              {/* Normal Image (visible when not zoomed) */}
              <img 
                src={activeImage} 
                alt={productName} 
                className={cn(
                    "max-h-full max-w-full object-contain transition-opacity duration-200",
                    isZoomed ? "opacity-0" : "opacity-100"
                )} 
              />

              {/* Zoomed Image (visible on hover) */}
              {isZoomed && (
                  <div 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                        backgroundImage: `url('${activeImage}')`,
                        backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                        backgroundSize: "200%", // 2x Zoom
                        backgroundRepeat: "no-repeat"
                    }}
                  />
              )}
           </>
        ) : (
             <div className="text-muted-foreground font-bold text-xl">No Image</div>
        )}

        <div className="absolute top-2 right-2 pointer-events-none">
            <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded shadow-sm">
                {modelName || 'Best Seller'}
            </span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20">
        {images.map((img, idx) => (
            <div
                key={idx}
                onMouseEnter={() => handleMouseEnter(img)}
                className={cn(
                    "flex-shrink-0 w-16 h-16 border rounded-lg overflow-hidden cursor-pointer transition-all p-1 bg-white",
                    activeImage === img ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
                )}
            >
                <img src={img} alt={`${productName} view ${idx + 1}`} className="w-full h-full object-cover rounded" />
            </div>
        ))}
      </div>
    </div>
  );
}
