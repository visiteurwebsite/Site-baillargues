import Image from 'next/image';
export function ValueCard({ title, description, icon }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border-2 border-primary/30 bg-primary p-4 text-center shadow-md shadow-secondary">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-xl font-semibold text-textColor">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}
