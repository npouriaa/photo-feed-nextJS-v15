import { Photo } from "@/types/dataType";
import Image from "next/image";
import Link from "next/link";

type PhotoDetailsProps = {
  params: Promise<{ id: string }>;
};

const PhotoDetails = async ({ params }: PhotoDetailsProps) => {
  const CLIENT_ID = "6U--AI61gXSGYdYuPp3E3hNA1Gmrijjno5IfFQE4mgE";

  const response = await fetch(
    `https://api.unsplash.com/photos/${
      (
        await params
      ).id
    }?client_id=${CLIENT_ID}`
  );

  const photo: Photo = await response.json();

  return (
    <div className="w-full flex gap-10 flex-col">
      <Link href="/">Back to home</Link>
      <div className="w-[30rem] max-sm:h-96 xl:h-[30rem] relative bg-[#fdfdfd]">
        <Image
          priority
          className="object-cover"
          fill
          sizes="384px"
          alt={photo.alt_description}
          src={photo.urls.regular}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <p>Description : {photo.description}</p>
        <p>username : {photo.user.username}</p>
      </div>
    </div>
  );
};

export default PhotoDetails;
