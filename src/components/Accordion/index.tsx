'use client';
import React from 'react';
import { iconRight, iconDown } from '../GenericIcons';
import './index.css';
export type AccordionItem = {
  title: React.ReactNode;
  description: React.ReactNode;
};

type AccordionItemProps = {
  item: AccordionItem;
};

type AccordionProps = {
  items: AccordionItem[];
};

function AccordionItem({ item }: AccordionItemProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className='accordion-item' onClick={() => setIsVisible(!isVisible)}>
      <div className='accordion-item-header'>
        {isVisible ? iconDown : iconRight}
        <h4 className='ml-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100'>
          {item.title}
        </h4>
      </div>
      {isVisible && (
        <div className='ml-6 mt-6 text-base text-zinc-600 dark:text-zinc-400'>
          {item.description}
        </div>
      )}
    </div>
  );
}

export function Accordion({ items }: AccordionProps) {
  return (
    <ul className='accordion-container'>
      {items.map((item, index) => (
        <li key={index}>
          <AccordionItem item={item} />
        </li>
      ))}
    </ul>
  );
}
