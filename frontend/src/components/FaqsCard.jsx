import { useRef, useState } from "react";

const FaqsCard = ({ faq }) => {
    const answerElRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState('0px');

    const handleToggle = () => {
        const answerElHeight = answerElRef.current.scrollHeight;
        setIsOpen(!isOpen);
        setAnswerHeight(isOpen ? '0px' : `${answerElHeight}px`);
    };

    return (
        <div className="space-y-3 mt-5 overflow-hidden border-b" onClick={handleToggle}>
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faq.q}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="transition-all duration-300 ease-in-out"
                style={{ height: answerHeight }}
            >
                <div className="p-2">
                    <p className="text-gray-500">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const faqsList = [
        {
            q: "How can i book an appointment with MediHub ?",
            a: "To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time."
        },
        {
            q: "Why do patients visit MediHub ?",
            a: "Patients visit MediHub for health related problems. To see more reasons visit the doctor's profile on MediHub."
        },
        {
            q: "How can I take an appointment with MediHub ?",
            a: "To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time."
        },
        {
            q: "Why to choose MediHub ?",
            a: "Because, it is a one stop solution for you."
        }
    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {faqsList.map((faq, idx) => (
                    <FaqsCard key={idx} faq={faq} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
