import { Photo } from "@/types/dataType";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const CLIENT_ID = "6U--AI61gXSGYdYuPp3E3hNA1Gmrijjno5IfFQE4mgE";
  const response = await fetch(
    `https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`
  );
  const photos: Photo[] = await response.json();

  return (
    <div className="p-2 flex flex-wrap items-center max-sm:justify-center xl:justify-between gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="max-sm:w-full max-sm:h-72 sm:w-[30rem] md:w-72 md2:w-[22rem] xl:w-[23rem] 2xl:w-[29rem] 3xl:w-[20rem] 4xl:w-[23rem] relative group bg-[#fdfdfd]"
        >
          <Link
            href={`/${photo.id}`}
            className="w-full h-full bg-[#0000007c] absolute z-10 hidden group-hover:flex text-white justify-center items-center font-bold"
          >
            View details
          </Link>
          <Image
            priority
            className="object-cover"
            fill
            sizes="384px"
            alt={photo.alt_description}
            src={photo.urls.regular}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
