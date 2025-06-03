"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect, FC } from "react";

type MoreDetailsProps = {
  title: string;
  content: string;
};

const MoreDetails: FC<MoreDetailsProps> = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("100px"); // Default collapsed height
  const [showButton, setShowButton] = useState(false); // State to control button visibility
  const contentRef = useRef<HTMLParagraphElement>(null);

  // Calculate the actual height of the content when it changes or when isOpen changes
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setMaxHeight(
        isOpen || contentHeight < 150 ? `${contentHeight}px` : "100px"
      );
      setShowButton(contentHeight > 150); // Show button only if content height is greater than 200px
    }
  }, [isOpen, content]);

  // Handle empty or undefined content
  if (!content) {
    return <p>محتوایی وجود ندارد.</p>;
  }

  return (
    <div
      className={`bg-purple-1 text-primary w-full rounded-[6px] pt-4 px-3 ${
        !showButton && "pb-3"
      } relative`}
    >
      <div
        className={`absolute inset-0 z-0 pointer-events-none rounded-[6px]`}
        style={{
          background: `linear-gradient(180deg, rgba(242, 234, 255, 0) 17.96%, ${
            !isOpen && showButton ? "#f2eaffef" : "#f2eaff9f"
          } 104.58%)`,
        }}
      />
      <h4 className="font-semibold text-base md:text-lg">{title}</h4>
      <div
        className={`overflow-hidden transition-all duration-500 mt-2`}
        style={{ maxHeight }}
      >
        <p
          ref={contentRef}
          className={`font-light transition-all duration-500 text-sm md:text-base`}
        >
          {content}
        </p>
      </div>
      {showButton && (
        <Button
          variant="unstyled"
          className="mx-auto block relative z-1 "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "کمتر" : "بیشتر"}
        >
          {isOpen ? "کمتر" : "ادامه"}
        </Button>
      )}
    </div>
  );
};

export default MoreDetails;
