import Heading from "./Heading";
import { MdKeyboardArrowDown } from "react-icons/md";

type FAQProps = {
  FaqTableData: { question: string; answer: string }[];
  heading?: string;
};

export default function FAQs({ FaqTableData = [], heading }: FAQProps) {

  // if the answer has ● then line break
  const formattedAnswer = (answer: string) => {
    return answer.replace(/●/g, "<br/>●");
  }

  return (
    <div className="py-12">
      <Heading>{heading || "FAQs"}</Heading>
      <div className="space-y-4 max-w-screen-xl mx-auto">
        {FaqTableData.map((qa, index) => (
          <details
            className="group border-b-2 border-black p-6 [&_summary::-webkit-details-marker]:hidden"
            key={index}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-sm md:text-xl font-medium text-gray-900">
                {qa.question}
              </h2>
              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <MdKeyboardArrowDown
                  size={30}
                  className="shrink-0 transition duration-300 group-open:-rotate-180"
                />
              </span>
            </summary>

            <div className="mt-4 leading-relaxed text-[12px] md:text-base text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: formattedAnswer(qa.answer) }} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
