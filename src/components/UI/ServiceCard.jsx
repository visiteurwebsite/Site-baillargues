import Image from 'next/image';

export function ServiceCard({ title, description, image, onClick }) {
  return (
    <div
      className="grid cursor-pointer grid-cols-1 place-items-center gap-4 rounded-md border-2 border-white/30 bg-gray-800/50 py-6 text-center shadow-md shadow-white/30 transition-all duration-300 hover:border-primary-300/30 hover:shadow-lg hover:shadow-primary-300/30 lg:py-4"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={50}
        className="mx-auto"
      />
      <div className="flex flex-col gap-4 p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
