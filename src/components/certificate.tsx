import { CERTIFICATE } from "@/data/certificate"
import Image from "next/image"

export default function Certificate(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
  {CERTIFICATE.map((cert, id) => (
    <div
      key={id}
      className="border-border shadow-shadow rounded-base bg-background border-2 p-4 sm:p-5 flex flex-col justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none gap-2"
    >
      <Image
        src={cert.image}
        alt={cert.nameCertificate}
        width={300}
        height={200}
        className="w-full h-auto object-cover rounded-base"
      />

      <h3 className="font-heading text-sm sm:text-base md:text-lg">
        {cert.nameCertificate}
      </h3>

      <p className="text-muted-foreground text-justify">
        {cert.description}
      </p>
    </div>
  ))}
</div>
    );
}