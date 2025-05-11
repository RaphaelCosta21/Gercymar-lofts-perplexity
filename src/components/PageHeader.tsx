import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const PageHeader = ({
  title,
  description,
  backgroundImage,
}: PageHeaderProps) => {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
