import Image from 'next/image';

export function ServiceCard({ title, description, image, onClick }) {
  return (
    <div
      className="grid h-full cursor-pointer grid-cols-1 place-items-center gap-4 rounded-md border-2 border-primary bg-primary py-6 text-center shadow-md shadow-primary/50 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:shadow-lg hover:shadow-slate-400 dark:hover:shadow-secondary/20 lg:py-4"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={60}
        className="mx-auto size-auto"
      />
      <div className="flex flex-col gap-4 p-4">
        <h3 className="mb-2 text-xl font-semibold text-textColor">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
