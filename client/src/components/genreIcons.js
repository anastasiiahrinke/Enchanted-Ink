import React from 'react'

/**
 * Набір SVG-іконок під кожен жанр (тонкі лінії, currentColor — щоб
 * колір підхоплювався з CSS картки) + відповідність жанр → колірна тема
 * обкладинки (класи .bf-c1 … .bf-c9 з BookItem.css).
 *
 * Все централізовано тут, щоб додавання нового жанру в БД (Genre)
 * не вимагало правок у самому BookItem.jsx — достатньо додати запис
 * в GENRE_ICON_MAP / GENRE_THEME_MAP нижче.
 */

const baseProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: '100%',
  height: '100%',
}

export const FantasyIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* схрещені мечі */}
    <path d="M10 10 L38 38" />
    <path d="M10 10 L16 11.5 M10 10 L11.5 16" />
    <path d="M38 10 L10 38" />
    <path d="M38 10 L31.5 11.5 M38 10 L36.5 16" />
    <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
  </svg>
)

export const MysteryIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* лупа */}
    <circle cx="20" cy="20" r="11" />
    <path d="M28 28 L39 39" />
  </svg>
)

export const RomanceIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* серце */}
    <path d="M24 38 C9 28 5 17 13 11.5 C18.5 7.7 24 11.5 24 16.5 C24 11.5 29.5 7.7 35 11.5 C43 17 39 28 24 38 Z" />
  </svg>
)

export const DramaIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* театральні маски (комедія/трагедія) */}
    <ellipse cx="16.5" cy="24" rx="9" ry="11" />
    <ellipse cx="31.5" cy="24" rx="9" ry="11" />
    <path d="M11.5 27.5 C13.5 30.5 19.5 30.5 21.5 27.5" />
    <path d="M26.5 21 C28.5 18 34.5 18 36.5 21" />
    <circle cx="14" cy="20" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="19" cy="20" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="29" cy="27" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="34" cy="27" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export const HorrorIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* череп */}
    <path d="M24 9 C16 9 11 15 11 22 C11 26 13 28.5 14.5 30 V34 H19 V37 H29 V34 H33.5 V30 C35 28.5 37 26 37 22 C37 15 32 9 24 9 Z" />
    <circle cx="18.5" cy="22" r="2.4" fill="currentColor" stroke="none" />
    <circle cx="29.5" cy="22" r="2.4" fill="currentColor" stroke="none" />
    <path d="M22.5 26 L24 30 L25.5 26" />
  </svg>
)

export const AdventureIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* компас */}
    <circle cx="24" cy="24" r="14" />
    <path d="M29.5 18.5 L25.5 25.5 L18.5 29.5 L22.5 22.5 Z" fill="currentColor" stroke="none" />
    <circle cx="24" cy="24" r="1.4" fill="var(--bf-black,#000)" stroke="none" />
  </svg>
)

export const LiteraryIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* перо */}
    <path d="M35 8 C20 9.5 11 22 9 39 C19.5 36.5 30 29.5 34.5 17 C36.5 12.5 36.5 9.5 35 8 Z" />
    <path d="M31 13.5 L17.5 27" />
    <path d="M28.5 19.5 L16 32" />
    <path d="M11.5 35.5 L8 40" />
  </svg>
)

export const DefaultIcon = (props) => (
  <svg {...baseProps} {...props}>
    {/* розкрита книга — запасний варіант для невідомого жанру */}
    <path d="M24 15 C19.5 12 12.5 12 8.5 14 V35 C12.5 33 19.5 33 24 36 C28.5 33 35.5 33 39.5 35 V14 C35.5 12 28.5 12 24 15 Z" />
    <path d="M24 15 V36" />
  </svg>
)

/** жанр (у нижньому регістрі) → компонент-іконка */
export const GENRE_ICON_MAP = {
  fantasy: FantasyIcon,
  mystery: MysteryIcon,
  romance: RomanceIcon,
  drama: DramaIcon,
  horror: HorrorIcon,
  adventure: AdventureIcon,
  'literary fiction': LiteraryIcon,
}

/** жанр (у нижньому регістрі) → клас колірної теми обкладинки (BookItem.css) */
export const GENRE_THEME_MAP = {
  fantasy: 'bf-c6',
  mystery: 'bf-c2',
  romance: 'bf-c3',
  drama: 'bf-c5',
  horror: 'bf-c1',
  adventure: 'bf-c8',
  'literary fiction': 'bf-c9',
}

const normalize = (genreName = '') => genreName.trim().toLowerCase()

export function getGenreIcon(genreName) {
  return GENRE_ICON_MAP[normalize(genreName)] || DefaultIcon
}

export function getGenreTheme(genreName) {
  return GENRE_THEME_MAP[normalize(genreName)] || 'bf-c4'
}