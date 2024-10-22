import Image from 'next/image';

export function ServiceCard({ title, description, image, onClick }) {
  return (
    <div
      className="bg-gray-800/50 py-6 lg:py-4 gap-4 grid grid-cols-1 place-items-center text-center rounded-md shadow-md hover:shadow-lg hover:shadow-primary-300/30 transition-all duration-300 shadow-white/30 border-2 border-white/30 hover:border-primary-300/30 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={50}
        className="mx-auto"
      />
      <div className="p-4 gap-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
