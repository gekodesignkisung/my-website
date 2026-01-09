import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f5f9] flex flex-col items-start relative min-h-screen w-full">
      {/* Header */}
      <div className="flex h-[60px] items-center justify-between px-[10px] py-[20px] w-full">
        <div className="flex gap-[10px] items-center">
          <div className="h-[32px] w-[26px] relative">
            <Image
              alt="Episteme Logo"
              className="block"
              src="/assets/logo.svg"
              width={26}
              height={32}
            />
          </div>
          <div className="flex flex-col font-bold justify-center text-[#464d77] text-[18px] font-[Arial,sans-serif]">
            <p className="leading-normal">Episteme</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-end">
            <div className="relative w-[32px] h-[32px]">
              <Image
                alt="User Icon"
                className="block"
                src="/assets/user-icon.svg"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#f5f5f9] flex flex-col items-center justify-center w-full px-[20px] md:px-[281px] py-[100px]">
        <div className="flex flex-col gap-[20px] items-center w-full max-w-[1280px]">
          {/* Search Box */}
          <div className="bg-white border-0 flex flex-col h-[120px] items-start overflow-hidden p-[15px] rounded-[35px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] w-full max-w-[640px]">
            <div className="flex items-start justify-between w-full h-full">
              <div className="flex-1 flex items-center p-[10px]">
                <input
                  type="text"
                  placeholder="논문 , 저자, 개념에 대해 질문하세요"
                  className="flex-1 text-[#999] text-[16px] outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center w-[40px] h-[40px]">
                <Image
                  alt="Search"
                  className="block"
                  src="/assets/search-icon.svg"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="flex h-[20px] items-center justify-center w-full">
            <div className="flex flex-col justify-center text-[16px] text-[#292929]">
              <p className="leading-normal">연구, 지식, 그래프를 탐색하세요.</p>
            </div>
          </div>

          {/* Example Cards */}
          <div className="flex gap-[10px] items-start justify-center w-full flex-wrap">
            <div className="bg-white border border-[#787ea1] border-dashed flex h-[60px] items-center justify-center overflow-hidden px-[15px] py-[10px] rounded-[10px] w-full md:w-[250px]">
              <p className="font-normal text-[#333] text-[14px] leading-normal">
                ITER와 SPARC 원자로 설계에 대한 주장들을 비교해주세요.
              </p>
            </div>
            <div className="bg-white border border-[#787ea1] border-dashed flex h-[60px] items-center justify-center overflow-hidden px-[15px] py-[10px] rounded-[10px] w-full md:w-[250px]">
              <p className="font-normal text-[#333] text-[14px] leading-normal">
                토카막 원자로에서 플라즈마 가둠을 달성하는 주요 방법은 무엇인가요?
              </p>
            </div>
            <div className="bg-white border border-[#787ea1] border-dashed flex h-[60px] items-center justify-center overflow-hidden px-[15px] py-[10px] rounded-[10px] w-full md:w-[250px]">
              <p className="font-normal text-[#333] text-[14px] leading-normal">
                디스플레이용 산화물 TFT 백플레인 기술의 최근 발전은 무엇인가요?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
