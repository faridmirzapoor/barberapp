import React from "react";

interface SectionBoxProps {
  name: string;
  count: number | string;
  classes: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({ name, count, classes }) => {
  return (
    <div
      className={`cursor-pointer h-full col-span-2 xl:col-span-1 lg:min-w-[220px] xl:min-w-[180px] aspect-square sm:aspect-video lg:aspect-video flex items-center justify-center p-6 rounded-lg ${classes}`}
    >
      <div className="flex flex-col w-full">
        <div className="font-primary-black text-4xl lg:text-[40px]">{count}</div>
        <div className="font-primary-demibold text-sm lg:text-2xl">{name}</div>
      </div>
    </div>
  );
};

export default SectionBox;
