import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";
import React, { useState } from 'react';

const Links = ({ repoUrl, webUrl }: { repoUrl: string; webUrl: string | undefined }) => {

  const [isModalOpen, setModalOpen] = useState(false)

  const handleGithubIconClick = () => {
    if (!repoUrl) {
        setModalOpen(true); // repoUrl이 빈 값이면 모달 열기
    } else {
        window.open(repoUrl, "_blank"); // repoUrl이 있을 경우 링크 열기
    }
};

  return (
    <div className="flex gap-1 justify-end">
        <a onClick={handleGithubIconClick} className="w-fit cursor-pointer">
                <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
            </a>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto transform transition-all duration-300 scale-100 hover:scale-105">
                        <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">알림</h2>
                        <p className="text-center text-lg text-gray-700 mb-6 relative">
                            <span className="bg-blue-100 text-black-700 font-semibold px-4 py-2 rounded-lg shadow-md">
                                회사 정책에 따라 코드는 비공개입니다.
                            </span>
                        </p>
                        <div className="flex justify-end">
                            <button 
                                onClick={() => setModalOpen(false)} 
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}

           

      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
    </div>
  );
};

export default Links;
