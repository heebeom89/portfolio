import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { SkillsProps } from "@/types";

const SkillsItem = ({ percent, imgSrc }: SkillsProps) => {
  const [width, setWidth] = useState("0%");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(`${percent}%`);
            }, 1000); // 약간의 지연을 추가하여 애니메이션이 자연스럽게 시작되도록 함
          }else {
            setWidth("0%")
          }
        });
      },
      {
        threshold: 0.1, // 요소의 10%가 뷰포트에 나타날 때 트리거
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [percent]);

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start gap-6">
          {imgSrc && (
            <Image
              src={imgSrc}
              width="200"
              height="200"
              alt={percent}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-12 h-12"
              style={{
                borderColor: '#e7e6e6',
                borderWidth: '1px',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2)'
              }}
            />
          )}
        </div>
      </div>
      <div className="flex-1 h-8 bg-gray-300 rounded-lg ml-4">
        <div
          className="bg-green-400 h-full rounded-lg"
          style={{
            width: width,
            transition: 'width 2s ease-in-out' // 화면 로드시 애니메이션이 적용되도록 transition 추가
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsItem;