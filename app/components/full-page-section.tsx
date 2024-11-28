import { ReactNode } from 'react';

interface FullPageSectionProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  id: string;
}

export default function FullPageSection({
  children,
  bgColor,
  textColor,
  id,
}: FullPageSectionProps) {
  return (
    <section
      id={id}
      data-section
      data-bg-color={bgColor}
      className={`h-screen w-full snap-start flex flex-col items-center justify-center ${bgColor} ${textColor} transition-colors duration-500 ease-in-out`}
    >
      {children}
    </section>
  );
}