import Modal from "@/components/modal";
import { Photo } from "@/types/dataType";
import Image from "next/image";

type PhotoDetailsModalProps = {
  params: Promise<{ id: string }>;
};

const PhotoDetailsModal = async ({ params }: PhotoDetailsModalProps) => {
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
    <Modal>
      <div className="w-full h-96 relative">
        <Image
          priority
          className="object-cover"
          fill
          sizes="384px"
          alt={photo.alt_description}
          src={photo.urls.regular}
        />
      </div>
      <div className="bg-white p-4 flex flex-col gap-2">
        <h2>descriptipon : {photo.description}</h2>
        <h2>username : {photo.user.username}</h2>
      </div>
    </Modal>
  );
};

export default PhotoDetailsModal;
