import Image from 'next/image';

export function ServiceCard({ title, description, image, onClick }) {
  return (
    <div
      className="grid h-full cursor-pointer grid-cols-1 place-items-center gap-4 rounded-md border-2 border-primary/30 bg-primary/30 py-6 text-center shadow-md shadow-primary/20 transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/40 lg:py-4"
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
