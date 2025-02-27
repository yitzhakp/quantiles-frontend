/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_PAIvI_4S.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center py-3 w-4/5"> <img class="rounded-full w-12 h-12 bg-white" src="logo_IEA.png" alt="description"> <nav class="flex flex-row gap-x-4"> <a href="/">Home</a> <a href="/">Projects</a> <a href="https://www.linkedin.com/in/yitzhakp/" target="_blank">Contact</a> </nav> </header>`;
}, "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="logo_IEA.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="dark h-screen text-white"> <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`bg-red-100 text-red-800 text-xl font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`, "class")}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/components/Badge.astro", void 0);

function ShowAnswer(props) {
  const { answer, others, oneMorePoint, oneMoreTotal, isSubmitted, setIsSubmitted, selectedAnswer, setSelectedAnswer } = props;
  const handleAnswerOptionClick = (answer2) => {
    setSelectedAnswer(answer2);
  };
  const handleCheckAnswer = () => {
    setIsSubmitted(true);
    oneMoreTotal();
    if (selectedAnswer === answer) {
      oneMorePoint();
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("span", { className: "flex flex-col items-center justify-center h-30 transition-opacity ease-in-out delay-500 duration-500 ", children: [
    /* @__PURE__ */ jsx("div", { className: "answer-section grid grid-cols-2 gap-4", children: others.map((option, index) => {
      const isSelected = selectedAnswer === option;
      const isCorrect = option === answer;
      const color = isSubmitted & isCorrect ? "border-green-500" : isSubmitted & isSelected & !isCorrect ? "border-red-500" : !isSubmitted & isSelected ? "border-yellow-500" : "border-gray-500";
      return /* @__PURE__ */ jsxs("label", { className: `flex items-center border rounded-lg p-2 shadow-md ${!isSubmitted ? "cursor-pointer" : ""} ${color}`, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: "answer",
            value: option,
            checked: selectedAnswer === option,
            onChange: () => handleAnswerOptionClick(option),
            className: `absolute opacity-0 ${!isSubmitted ? "cursor-pointer" : ""}`,
            disabled: isSubmitted
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2", children: option })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleCheckAnswer,
        disabled: !selectedAnswer | isSubmitted,
        className: " mt-10 inline-flex items-center justify-center p-0.5 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
            children: "Enviar respuesta 🫣"
          }
        )
      }
    )
  ] }) });
}

function QuestionAndNext(props) {
  const [points, setPoints] = useState(0);
  const [total, setTotal] = useState(0);
  const [question, setQuestion] = useState(0);
  const [problem, setProblem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  useEffect(() => {
    fetch("https://nutritious-sallyanne-yitzhakp-2ef75de7.koyeb.app/").then((respuesta) => respuesta.json()).then((datos) => setProblem(datos)).catch((error) => console.error(error));
  }, [question]);
  const nextQuestion = () => {
    setQuestion(question + 1);
    if (selectedAnswer === "") {
      setTotal(total + 1);
      return;
    }
    setSelectedAnswer("");
    setIsSubmitted(false);
  };
  const oneMoreTotal = () => {
    setTotal(total + 1);
  };
  const oneMorePoint = () => {
    setPoints(points + 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("p", { className: "mt-5 text-xl", children: [
      "Score: ",
      points,
      "/",
      total
    ] }),
    problem ? /* @__PURE__ */ jsxs("article", { className: "w-9/10 my-5 p-5 bg-[#13151a] rounded flex-col pb-10 lg:mt-15 lg:pb-20", children: [
      /* @__PURE__ */ jsx("p", { className: "p-10 text-3xl ", children: problem.question }),
      /* @__PURE__ */ jsx(ShowAnswer, { selectedAnswer, setSelectedAnswer, isSubmitted, setIsSubmitted, oneMorePoint, oneMoreTotal, answer: problem.answer, others: problem.others, "client:visible": true })
    ] }) : /* @__PURE__ */ jsx("p", { children: "Loading..." }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextQuestion,
        className: "relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 lg:m-10",
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",
            children: "Siguiente 🏅"
          }
        )
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Estad\xEDsticas - IEA", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-4/5 text-center lg:w-2/3" data-astro-cid-j7pv25f6> <article data-astro-cid-j7pv25f6> <h1 class="p-5 text-white font-bold flex flex-grow fap-x-4 text-2xl lg:text-4xl lg:p-10" data-astro-cid-j7pv25f6>
Interpretaciones de los cuantiles
</h1> ${renderComponent($$result2, "Badge", $$Badge, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`Octavo` })} </article> ${renderComponent($$result2, "QuestionAndNext", QuestionAndNext, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/components/QuestionAndNext", "client:component-export": "QuestionAndNext", "data-astro-cid-j7pv25f6": true })} </section> ` })} `;
}, "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/pages/index.astro", void 0);

const $$file = "C:/Users/yitzhakp/Desktop/Quantiles/quantiles-frontend/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
