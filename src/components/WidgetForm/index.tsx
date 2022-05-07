import { useState } from "react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma núvem de pensamento",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback(){
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
          feedbackType={feedbackType} 
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text text-neutral-400">
        Feito com ♥ pela{" "}
        <a href="" className="underline underline-offset-2">
          {" "}
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
