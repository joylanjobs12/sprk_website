'use client';

interface CardData {
    iconSrc: string;
    iconAlt: string;
    title: string;
    items: string[];
}

interface AnalyzeThisReportProps {
    title: string;
    description: string;
    highlightedWord?: string;
    cards: CardData[];
}

export default function AnalyzeThisReport({ 
    title, 
    description, 
    highlightedWord, 
    cards 
}: AnalyzeThisReportProps) {
    const renderDescription = () => {
        if (!highlightedWord) {
            return description;
        }
        
        const parts = description.split(highlightedWord);
        return parts.map((part, index) => (
            <span key={index}>
                {part}
                {index < parts.length - 1 && (
                    <span className="font-semibold">{highlightedWord}</span>
                )}
            </span>
        ));
    };

    return (
        <section className="w-full flex flex-col gap-5 lg:gap-[50px] items-center justify-start pb-[50px] lg:pb-[150px] pt-[50px] lg:pt-[150px] px-4 lg:px-24">
            <div className="w-full max-w-[1248px] flex flex-col gap-5 lg:gap-[50px] items-center justify-start">
                {/* Header */}
                <div className="w-full flex flex-col gap-[15px] lg:gap-[30px] items-center justify-start">
                    <div className="w-full flex items-start justify-center">
                        <h2 className="text-center text-[35px] sm:text-[35px] md:text-[35px] lg:text-[56px] xl:text-[56px] 2xl:text-[56px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414]">
                            {title}
                        </h2>
                    </div>
                    <div className="w-full flex items-start justify-center">
                        <p className="text-center text-[16px] sm:text-[16px] md:text-[16px] lg:text-[22px] xl:text-[22px] 2xl:text-[22px] leading-[120%] font-normal font-['Inter'] text-[rgba(0,0,0,0.66)] max-w-4xl">
                            {renderDescription()}
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center">
                    {cards.map((card, index) => (
                        <div 
                            key={index}
                            className="bg-white w-full lg:w-[612px] min-w-[400px] rounded-[10px] border border-[rgba(0,0,0,0.15)] border-solid overflow-hidden"
                        >
                            <div className="flex flex-col items-center justify-start w-full">
                                {/* Icon Section */}
                                <div className="bg-white w-full h-[200px] lg:h-[300px] flex items-center justify-center p-[30px]">
                                    <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] overflow-hidden">
                                        <img 
                                            src={card.iconSrc}
                                            alt={card.iconAlt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                                
                                {/* Content Section */}
                                <div className="bg-white w-full flex flex-col gap-[22px] items-start justify-start pb-10 pt-[30px] px-[30px]">
                                    <div className="w-full flex items-center justify-center">
                                        <h3 className="text-[25px] sm:text-[25px] md:text-[25px] lg:text-[35px] xl:text-[35px] 2xl:text-[35px] leading-[110%] font-medium font-['Aeonik_Pro'] text-[#141414] text-center">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <ul className="list-disc text-[16px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] leading-[120%] font-medium font-['Inter'] text-[rgba(0,0,0,0.66)] space-y-2">
                                            {card.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="ml-[27px]">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
