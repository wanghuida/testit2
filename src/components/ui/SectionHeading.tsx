import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  label?: string;
}

export function SectionHeading({ title, subtitle, label }: SectionHeadingProps) {
  return (
    <div className="lg:text-center">
      {label && (
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{label}</h2>
      )}
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {subtitle}
      </p>
    </div>
  );
}