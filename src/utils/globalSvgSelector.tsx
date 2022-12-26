export function globalSvgSelector(icon: string, dark: boolean) {
  const color = dark ? '#abaaa9' : '#49474E'

  switch (icon) {
    case 'game':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>game</title>
          <path
            d='M467.51,248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5,91.5,0,0,0,352,96c-26.89,0-48.11,16-96,16s-69.15-16-96-16a99.09,99.09,0,0,0-27.2,3.66C89,112.59,61.94,165.7,43.33,248.83c-19,84.91-15.56,152,21.58,164.88,26,9,49.25-9.61,71.27-37,25-31.2,55.79-40.8,119.82-40.8s93.62,9.6,118.66,40.8c22,27.41,46.11,45.79,71.42,37.16C487.1,399.86,486.52,334.74,467.51,248.83Z'
            fill='none'
            stroke={color}
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <circle cx='292' cy='224' r='20' fill={color} />
          <path
            d='M336,288a20,20,0,1,1,20-19.95A20,20,0,0,1,336,288Z'
            fill={color}
          />
          <circle cx='336' cy='180' r='20' fill={color} />
          <circle cx='380' cy='224' r='20' fill={color} />
          <line
            x1='160'
            y1='176'
            x2='160'
            y2='272'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='208'
            y1='224'
            x2='112'
            y2='224'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'menu':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>menu</title>
          <line
            x1='88'
            y1='152'
            x2='424'
            y2='152'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='48px'
          />
          <line
            x1='88'
            y1='256'
            x2='424'
            y2='256'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='48px'
          />
          <line
            x1='88'
            y1='360'
            x2='424'
            y2='360'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='48px'
          />
        </svg>
      )
    case 'rules':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>ionicons-v5-e</title>
          <path
            d='M160,164s1.44-33,33.54-59.46C212.6,88.83,235.49,84.28,256,84c18.73-.23,35.47,2.94,45.48,7.82C318.59,100.2,352,120.6,352,164c0,45.67-29.18,66.37-62.35,89.18S248,298.36,248,324'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='40px'
          />
          <circle cx='248' cy='399.99' r='32' fill={color} />
        </svg>
      )
    case 'restart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill={color}
        >
          <title>ionicons-v5-b</title>
          <path
            d='M400,148l-21.12-24.57A191.43,191.43,0,0,0,240,64C134,64,48,150,48,256s86,192,192,192A192.09,192.09,0,0,0,421.07,320'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <path d='M464,97.42V208a16,16,0,0,1-16,16H337.42c-14.26,0-21.4-17.23-11.32-27.31L436.69,86.1C446.77,76,464,83.16,464,97.42Z' />
        </svg>
      )
    case 'statistics':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill={color}
        >
          <title>ionicons-v5-q</title>
          <path d='M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z' />
          <path d='M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z' />
          <path d='M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z' />
          <path d='M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z' />
        </svg>
      )
    case 'settings':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill={color}
        >
          <title>ionicons-v5-m</title>
          <path d='M456.7,242.27l-26.08-4.2a8,8,0,0,1-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08,8.08,0,0,1,3.9-8.62l23.09-12.82a8.05,8.05,0,0,0,3.9-9.92l-4-11a7.94,7.94,0,0,0-9.4-5l-25.89,5a8,8,0,0,1-8.59-4.11q-2.25-4.2-4.8-8.41a8.16,8.16,0,0,1,.7-9.52l17.29-19.94a8,8,0,0,0,.3-10.62l-7.49-9a7.88,7.88,0,0,0-10.5-1.51l-22.69,13.63a8,8,0,0,1-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8,8,0,0,1-2.5-9.11l9.4-24.75A8,8,0,0,0,365,78.77l-10.2-5.91a8,8,0,0,0-10.39,2.21L327.77,95.91a7.15,7.15,0,0,1-8.5,2.5s-5.6-2.3-9.8-3.71A8,8,0,0,1,304,87l.4-26.45a8.07,8.07,0,0,0-6.6-8.42l-11.59-2a8.07,8.07,0,0,0-9.1,5.61l-8.6,25.05a8,8,0,0,1-7.79,5.41h-9.8a8.07,8.07,0,0,1-7.79-5.41l-8.6-25.05a8.07,8.07,0,0,0-9.1-5.61l-11.59,2a8.07,8.07,0,0,0-6.6,8.42l.4,26.45a8,8,0,0,1-5.49,7.71c-2.3.9-7.3,2.81-9.7,3.71-2.8,1-6.1.2-8.8-2.91L167.14,75.17A8,8,0,0,0,156.75,73l-10.2,5.91A7.94,7.94,0,0,0,143.25,89l9.4,24.75a8.06,8.06,0,0,1-2.5,9.11c-2.5,2-5,4.11-7.4,6.22a8,8,0,0,1-9.39.9L111,116.14a8,8,0,0,0-10.5,1.51l-7.49,9a8,8,0,0,0,.3,10.62l17.29,19.94a8,8,0,0,1,.7,9.52q-2.55,4-4.8,8.41a8.11,8.11,0,0,1-8.59,4.11l-25.89-5a8,8,0,0,0-9.4,5l-4,11a8.05,8.05,0,0,0,3.9,9.92L85.58,213a7.94,7.94,0,0,1,3.9,8.62c-.6,3.2-1.2,6.31-1.7,9.51a8.08,8.08,0,0,1-6.6,6.82l-26.08,4.2a8.09,8.09,0,0,0-7.1,7.92v11.72a7.86,7.86,0,0,0,7.1,7.92l26.08,4.2a8,8,0,0,1,6.6,6.82c.5,3.2,1,6.41,1.7,9.51a8.08,8.08,0,0,1-3.9,8.62L62.49,311.7a8.05,8.05,0,0,0-3.9,9.92l4,11a7.94,7.94,0,0,0,9.4,5l25.89-5a8,8,0,0,1,8.59,4.11q2.25,4.2,4.8,8.41a8.16,8.16,0,0,1-.7,9.52L93.28,374.62a8,8,0,0,0-.3,10.62l7.49,9a7.88,7.88,0,0,0,10.5,1.51l22.69-13.63a8,8,0,0,1,9.39.9c2.4,2.11,4.9,4.21,7.4,6.22a8,8,0,0,1,2.5,9.11l-9.4,24.75a8,8,0,0,0,3.3,10.12l10.2,5.91a8,8,0,0,0,10.39-2.21l16.79-20.64c2.1-2.6,5.5-3.7,8.2-2.6,3.4,1.4,5.7,2.2,9.9,3.61a8,8,0,0,1,5.49,7.71l-.4,26.45a8.07,8.07,0,0,0,6.6,8.42l11.59,2a8.07,8.07,0,0,0,9.1-5.61l8.6-25a8,8,0,0,1,7.79-5.41h9.8a8.07,8.07,0,0,1,7.79,5.41l8.6,25a8.07,8.07,0,0,0,9.1,5.61l11.59-2a8.07,8.07,0,0,0,6.6-8.42l-.4-26.45a8,8,0,0,1,5.49-7.71c4.2-1.41,7-2.51,9.6-3.51s5.8-1,8.3,2.1l17,20.94A8,8,0,0,0,355,439l10.2-5.91a7.93,7.93,0,0,0,3.3-10.12l-9.4-24.75a8.08,8.08,0,0,1,2.5-9.12c2.5-2,5-4.1,7.4-6.21a8,8,0,0,1,9.39-.9L401,395.66a8,8,0,0,0,10.5-1.51l7.49-9a8,8,0,0,0-.3-10.62l-17.29-19.94a8,8,0,0,1-.7-9.52q2.55-4.05,4.8-8.41a8.11,8.11,0,0,1,8.59-4.11l25.89,5a8,8,0,0,0,9.4-5l4-11a8.05,8.05,0,0,0-3.9-9.92l-23.09-12.82a7.94,7.94,0,0,1-3.9-8.62c.6-3.2,1.2-6.31,1.7-9.51a8.08,8.08,0,0,1,6.6-6.82l26.08-4.2a8.09,8.09,0,0,0,7.1-7.92V250A8.25,8.25,0,0,0,456.7,242.27ZM256,112A143.82,143.82,0,0,1,395.38,220.12,16,16,0,0,1,379.85,240l-105.24,0a16,16,0,0,1-13.91-8.09l-52.1-91.71a16,16,0,0,1,9.85-23.39A146.94,146.94,0,0,1,256,112ZM112,256a144,144,0,0,1,43.65-103.41,16,16,0,0,1,25.17,3.47L233.06,248a16,16,0,0,1,0,15.87l-52.67,91.7a16,16,0,0,1-25.18,3.36A143.94,143.94,0,0,1,112,256ZM256,400a146.9,146.9,0,0,1-38.19-4.95,16,16,0,0,1-9.76-23.44l52.58-91.55a16,16,0,0,1,13.88-8H379.9a16,16,0,0,1,15.52,19.88A143.84,143.84,0,0,1,256,400Z' />
        </svg>
      )
    case 'close':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill={color}
        >
          <title>close</title>
          <path d='M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z' />
        </svg>
      )
    case 'skull':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 512 512'
          fill='#aa6464'
        >
          <title>ionicons-v5-l</title>
          <path d='M402,76.94C362.61,37.63,310.78,16,256,16h-.37A208,208,0,0,0,48,224V324.67A79.62,79.62,0,0,0,98.29,399L122,408.42a15.92,15.92,0,0,1,9.75,11.72l10,50.13A32.09,32.09,0,0,0,173.12,496H184a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,224,448v40a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,272,448v40a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8V448.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,320,448v40a8,8,0,0,0,8,8h10.88a32.09,32.09,0,0,0,31.38-25.72l10-50.14A16,16,0,0,1,390,408.42L413.71,399A79.62,79.62,0,0,0,464,324.67v-99C464,169.67,442,116.86,402,76.94ZM171.66,335.88a56,56,0,1,1,52.22-52.22A56,56,0,0,1,171.66,335.88ZM281,397.25A16.37,16.37,0,0,1,271.7,400H240.3a16.37,16.37,0,0,1-9.28-2.75,16,16,0,0,1-6.6-16.9l15.91-47.6C243,326,247.25,321,254,320.13c8.26-1,14,2.87,17.61,12.22l16,48A16,16,0,0,1,281,397.25Zm66.68-61.37a56,56,0,1,1,52.22-52.22A56,56,0,0,1,347.66,335.88Z' />
        </svg>
      )
    case 'trophy':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>ionicons-v5-q</title>
          <line
            x1='176'
            y1='464'
            x2='336'
            y2='464'
            fill='none'
            stroke='#6aaa64'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='256'
            y1='464'
            x2='256'
            y2='336'
            fill='none'
            stroke='#6aaa64'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M384,224c0-50.64-.08-134.63-.12-160a16,16,0,0,0-16-16l-223.79.26a16,16,0,0,0-16,15.95c0,30.58-.13,129.17-.13,159.79,0,64.28,83,112,128,112S384,288.28,384,224Z'
            fill='none'
            stroke='#6aaa64'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M128,96H48v16c0,55.22,33.55,112,80,112'
            fill='none'
            stroke='#6aaa64'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M384,96h80v16c0,55.22-33.55,112-80,112'
            fill='none'
            stroke='#6aaa64'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'flag':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill='#6475aa'
        >
          <title>ionicons-v5-m</title>
          <path
            d='M80,464V68.14a8,8,0,0,1,4-6.9C91.81,56.66,112.92,48,160,48c64,0,145,48,192,48a199.53,199.53,0,0,0,77.23-15.77A2,2,0,0,1,432,82.08V301.44a4,4,0,0,1-2.39,3.65C421.37,308.7,392.33,320,352,320c-48,0-128-32-192-32s-80,16-80,16'
            fill='none'
            stroke='#6475aa'
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'key-enter':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 512 512'
        >
          <title>ionicons-v5-j</title>
          <path
            d='M176,176V136a40,40,0,0,1,40-40H424a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H216a40,40,0,0,1-40-40V336'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <polyline
            points='272 336 352 256 272 176'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='48'
            y1='256'
            x2='336'
            y2='256'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'key-backspace':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 512 512'
        >
          <title>ionicons-v5-d</title>
          <path
            d='M135.19,390.14A28.79,28.79,0,0,0,156.87,400H403.13A29,29,0,0,0,432,371.13V140.87A29,29,0,0,0,403.13,112H156.87a28.84,28.84,0,0,0-21.67,9.84v0L46.33,256l88.86,134.11Z'
            fill='none'
            stroke={color}
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='336.67'
            y1='192.33'
            x2='206.66'
            y2='322.34'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='336.67'
            y1='322.34'
            x2='206.66'
            y2='192.33'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='336.67'
            y1='192.33'
            x2='206.66'
            y2='322.34'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='336.67'
            y1='322.34'
            x2='206.66'
            y2='192.33'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'trash':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>ionicons-v5-e</title>
          <path
            d='M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='80'
            y1='112'
            x2='432'
            y2='112'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <path
            d='M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='256'
            y1='176'
            x2='256'
            y2='400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='184'
            y1='176'
            x2='192'
            y2='400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='328'
            y1='176'
            x2='320'
            y2='400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'person':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>ionicons-v5-j</title>
          <path
            d='M344,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S348,90,344,144Z'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M256,304c-87,0-175.3,48-191.64,138.6C62.39,453.52,68.57,464,80,464H432c11.44,0,17.62-10.48,15.65-21.4C431.3,352,343,304,256,304Z'
            fill='none'
            stroke={color}
            strokeWidth='32px'
            strokeMiterlimit='10'
          />
        </svg>
      )
    case 'person-add':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>Учетная запись</title>
          <path
            d='M376,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S380,90,376,144Z'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M288,304c-87,0-175.3,48-191.64,138.6-2,10.92,4.21,21.4,15.65,21.4H464c11.44,0,17.62-10.48,15.65-21.4C463.3,352,375,304,288,304Z'
            fill='none'
            stroke={color}
            strokeWidth='32px'
            strokeMiterlimit='10'
          />
          <line
            x1='88'
            y1='176'
            x2='88'
            y2='288'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='144'
            y1='232'
            x2='32'
            y2='232'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'notify-success':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>notify-success</title>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke='#32c682'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <polyline
            points='352 176 217.6 336 160 272'
            fill='none'
            stroke='#32c682'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'notify-failure':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>notify-failure</title>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke='#ff5549'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <line
            x1='320'
            y1='320'
            x2='192'
            y2='192'
            fill='none'
            stroke='#ff5549'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='192'
            y1='320'
            x2='320'
            y2='192'
            fill='none'
            stroke='#ff5549'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'notify-warning':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>notify-warning</title>
          <path
            d='M85.57,446.25H426.43a32,32,0,0,0,28.17-47.17L284.18,82.58c-12.09-22.44-44.27-22.44-56.36,0L57.4,399.08A32,32,0,0,0,85.57,446.25Z'
            fill='none'
            stroke='#eebf31'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M250.26,195.39l5.74,122,5.73-121.95a5.74,5.74,0,0,0-5.79-6h0A5.74,5.74,0,0,0,250.26,195.39Z'
            fill='none'
            stroke='#eebf31'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M256,397.25a20,20,0,1,1,20-20A20,20,0,0,1,256,397.25Z'
            fill='#eebf31'
          />
        </svg>
      )
    case 'notify-info':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>notify-info</title>
          <path
            d='M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z'
            fill='none'
            stroke='#26c0d3'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <polyline
            points='220 220 252 220 252 336'
            fill='none'
            stroke='#26c0d3'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='208'
            y1='340'
            x2='296'
            y2='340'
            fill='none'
            stroke='#26c0d3'
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <path
            d='M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z'
            fill='#26c0d3'
          />
        </svg>
      )
    case 'edit-profile':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <title>edit-profile</title>
          <path
            d='M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z'
            fill={color}
          />
          <path
            d='M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z'
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
