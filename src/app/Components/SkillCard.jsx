'use client';

import React, { useState } from 'react';
import { default as IconHtml5 } from '@/app/icons/html5.svg';
import { default as IconCss3 } from '@/app/icons/css3.svg';
import { default as IconJavascript } from '@/app/icons/javascript.svg';
import { default as IconTypescript } from '@/app/icons/typescript.svg';
import { default as IconReactjs } from '@/app/icons/reactjs.svg';
import { default as IconNextjs } from '@/app/icons/nextjs.svg';
import { default as IconNodejs } from '@/app/icons/nodejs.svg';
import { default as IconNestjs } from '@/app/icons/nestjs.svg';
import { default as IconVitejs } from '@/app/icons/vitejs.svg';
import { default as IconRedux } from '@/app/icons/redux.svg';
import { default as IconBootstrap } from '@/app/icons/bootstrap.svg';
import { default as IconPhp } from '@/app/icons/php.svg';
import { default as IconLaravel } from '@/app/icons/laravel.svg';
import { default as IconSql } from '@/app/icons/sql.svg';

const icons = {
  html5: IconHtml5,
  css3: IconCss3,
  javascript: IconJavascript,
  typescript: IconTypescript,
  reactjs: IconReactjs,
  nextjs: IconNextjs,
  nodejs: IconNodejs,
  nestjs: IconNestjs,
  vitejs: IconVitejs,
  redux: IconRedux,
  bootstrap: IconBootstrap,
  php: IconPhp,
  laravel: IconLaravel,
  sql: IconSql,
};

const SkillCard = ({ name = 'html' }) => {
  const [hovered, setHovered] = useState(false);
  const iconName = name ? name.toLowerCase() : '';
  const Icon = icons[iconName];

  const hoverColors = {
    html5: 'fill-[#E34F26]',
    css3: 'fill-[#1572B6]',
    javascript: 'text-[#F7DF1E]',
    typescript: 'text-[#3178C6]',
    reactjs: 'fill-[#61DAFB]',
    nextjs: 'fill-[#000000]',
    nodejs: 'fill-[#339933]',
    nestjs: 'text-[#E0234E]',
    vitejs: 'text-[#646CFF]',
    redux: 'fill-[#764ABC]',
    bootstrap: 'text-[#7952B3]',
    php: 'fill-[#777BB4]',
    laravel: 'fill-[#FF2D20]',
    sql: 'fill-[#4479A1]',
  };

  const isTextIcon = [
    'javascript',
    'typescript',
    'nestjs',
    'vitejs',
    'bootstrap',
  ].includes(iconName);

  return (
    <div
      className="w-24 h-28 bg-[#323232] rounded-tr-2xl flex flex-col items-center justify-center border-b-4 border-b-[#3DA661]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {Icon ? (
        <Icon
          className={`w-11 h-11 transition-colors duration-200 ease-in ${
            hovered
              ? hoverColors[iconName]
              : isTextIcon
              ? 'text-white'
              : 'fill-white'
          }`}
        />
      ) : (
        <span className="text-white">?</span>
      )}
      <p className="text-white text-xs font-medium mt-2 text-center">{name}</p>
    </div>
  );
};

export default SkillCard;
