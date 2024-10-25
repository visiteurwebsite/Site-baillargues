import Image from 'next/image';
export function ValueCard({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-white/40 bg-gray-800/50 p-4 text-center shadow-md shadow-white/30 transition-all duration-300 hover:border-primary-300/30 hover:shadow-lg hover:shadow-primary-300/30 ">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
