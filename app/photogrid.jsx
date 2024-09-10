import bottle from "@/public/images/bottle-tissue.png";
import tape from "@/public/images/tape.png";
import sitting from "@/public/images/sitting-room.png";
import tap from "@/public/images/tap.png";
import Image from "next/image";

export default function Photos() {
  const images = [bottle, tape, sitting, tap];

  return (
    <section className="grid grid-cols-2 slg:grid-cols-4 ">
      {images.map((image, index) => (
        <div key={index} className="w-full h-auto">
          <Image
            src={image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
}
