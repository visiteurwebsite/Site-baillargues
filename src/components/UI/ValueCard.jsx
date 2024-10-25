import Image from 'next/image';
export function ValueCard({ title, description, icon }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-primary/30 bg-primary/30 p-4 text-center shadow-md shadow-primary/20 transition-all duration-300 hover:border-secondary/30 hover:bg-secondary/30 hover:shadow-lg hover:shadow-secondary/40 ">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
