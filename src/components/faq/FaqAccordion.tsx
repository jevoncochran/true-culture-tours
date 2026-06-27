"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faqItems } from "@/data/faq";

function PlusMinusIcon() {
  return (
    <div className="relative w-4 h-4 shrink-0">
      <span className="absolute inset-y-[7px] left-0 right-0 h-px bg-[#C8A04D]" />
      {/* Vertical bar hidden when open via group-data-[state=open] */}
      <span className="absolute inset-x-[7px] top-0 bottom-0 w-px bg-[#C8A04D] transition-transform duration-300 group-data-[state=open]:scale-y-0" />
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {faqItems.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <div className="h-px bg-[#C8A04D]/20" />
          <Accordion.Trigger className="group w-full flex items-center justify-between gap-6 py-6 text-left hover:text-[#C8A04D] transition-colors duration-200">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-[#F8F8F5] group-hover:text-[#C8A04D] transition-colors duration-200">
              {item.question}
            </span>
            <PlusMinusIcon />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-[accordion-down_0.25s_ease-out] data-[state=closed]:animate-[accordion-up_0.25s_ease-out]">
            <div className="pb-8 space-y-4">
              {item.content.map((block, i) =>
                block.type === "paragraph" ? (
                  <p
                    key={i}
                    className="font-sans text-sm text-[#B7B7B0] leading-relaxed"
                  >
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="space-y-2">
                    {block.items?.map((listItem) => (
                      <li key={listItem} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A04D] shrink-0 mt-[6px]" />
                        <span className="font-sans text-sm text-[#B7B7B0]">
                          {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              )}
              {item.afterList && (
                <p className="font-sans text-sm text-[#B7B7B0] leading-relaxed">
                  {item.afterList}
                </p>
              )}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
      <div className="h-px bg-[#C8A04D]/20" />
    </Accordion.Root>
  );
}
