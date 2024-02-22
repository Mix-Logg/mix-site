"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../Animations/FadeIn";
import { IoIosArrowDown } from "react-icons/io";

const Faq = ({ title, paragraph }: FaqProps) => {
  const [showParagraph, setShowParagraph] = useState(true);

  const handleToggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <FadeIn>
      <div className="flex items-center justify-center md:px-52">
        <div className="flex flex-col items-start justify-center py-7 md:w-full">
          <div
            className={`flex items-center justify-between gap-20 rounded-xl bg-neutral-200 px-4 py-3 text-lg font-medium text-terciary md:w-full md:gap-40 `}
          >
            <p className="w-44 text-base text-neutral-800 md:w-80">{title}</p>
            <motion.div
              className={`cursor-pointer rounded-lg p-2  ${
                showParagraph
                  ? "text-primary bg-complement1 "
                  : "text-complement1 text-primary"
              } transition duration-150 ease-in-out hover:bg-primary hover:text-complement1 `}
              onClick={handleToggleParagraph}
              initial={false}
              animate={{ rotate: showParagraph ? 0 : 180 }}
              transition={{ duration: 0.17 }}
            >
              <p>
                <IoIosArrowDown />
              </p>
            </motion.div>
          </div>
          <AnimatePresence>
            {!showParagraph && (
              <motion.p
                key="paragraph"
                initial={{ opacity: 1, height: "auto" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 rounded-lg bg-neutral-200 p-3 text-justify text-sm font-extralight tracking-widest text-neutral-800 md:text-base"
              >
                {paragraph}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  );
};

const FaqList: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqProps[]>([]);

  useEffect(() => {
    const data = [ 
      {
          "title": "Onde atuamos?",
          "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ..."
      },
      {
          "title": "O que fazemos?",
          "paragraph": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ..."
      }
    ];
  
    setFaqData(data);
  }, []);

  return (
    <>
      {faqData.map((faq, index) => (
        <Faq key={index} title={faq.title} paragraph={faq.paragraph} />

      ))}
    </>
  );
};

export default FaqList;
