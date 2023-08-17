
interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-60">
        {images.map((imageUrl, index) => (
          <div key={index} className='carousel-item'>
            <img src={imageUrl} alt={`Image ${index}`} className='w-full h-full object-cover' />
          </div>
        ))}
    </div>
  );
}

export default ImageCarousel;
