export function globalSvgSelector(icon: string, dark: boolean) {
  const color = dark ? '#abaaa9' : '#49474E'

  switch (icon) {
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
    case 'settings':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          fill={color}
        >
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
          <path d='M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z' />
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
          <title>delete</title>
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
    case 'notify-success':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
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
    case 'search':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z'
            fill='none'
            stroke={color}
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <line
            x1='338.29'
            y1='338.29'
            x2='448'
            y2='448'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'arrow-forward':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <polyline
            points='268 112 412 256 268 400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='48px'
          />
          <line
            x1='392'
            y1='256'
            x2='100'
            y2='256'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='48px'
          />
        </svg>
      )
    case 'hammer':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M277.42,247a24.68,24.68,0,0,0-4.08-5.47L255,223.44a21.63,21.63,0,0,0-6.56-4.57,20.93,20.93,0,0,0-23.28,4.27c-6.36,6.26-18,17.68-39,38.43C146,301.3,71.43,367.89,37.71,396.29a16,16,0,0,0-1.09,23.54l39,39.43a16.13,16.13,0,0,0,23.67-.89c29.24-34.37,96.3-109,136-148.23,20.39-20.06,31.82-31.58,38.29-37.94A21.76,21.76,0,0,0,277.42,247Z'
            fill='none'
            stroke='#EF4444'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <path
            d='M478.43,201l-34.31-34a5.44,5.44,0,0,0-4-1.59,5.59,5.59,0,0,0-4,1.59h0a11.41,11.41,0,0,1-9.55,3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86,1.09-20.36-5.07-29a242.88,242.88,0,0,0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79,123.79,0,0,0-47-9.24c-26.35,0-46.61,11.76-54,18.51-5.88,5.32-12,13.77-12,13.77A91.29,91.29,0,0,1,202.35,77a79.53,79.53,0,0,1,23.28-1.49C241.19,76.8,259.94,84.1,270,92c16.21,13,23.18,30.39,24.27,52.83.8,16.69-15.23,37.76-30.44,54.94a7.85,7.85,0,0,0,.4,10.83l21.24,21.23a8,8,0,0,0,11.14.1c13.93-13.51,31.09-28.47,40.82-34.46s17.58-7.68,21.35-8.09A35.71,35.71,0,0,1,380.08,194a13.65,13.65,0,0,1,3.08,2.38c6.46,6.56,6.07,17.28-.5,23.74l-2,1.89a5.5,5.5,0,0,0,0,7.84l34.31,34a5.5,5.5,0,0,0,4,1.58,5.65,5.65,0,0,0,4-1.58L478.43,209A5.82,5.82,0,0,0,478.43,201Z'
            fill='none'
            stroke='#EF4444'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'remove-circle':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke='#EF4444'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <line
            x1='336'
            y1='256'
            x2='176'
            y2='256'
            fill='none'
            stroke='#EF4444'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'stats-chart':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z'
            fill={color}
          />
          <path
            d='M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z'
            fill={color}
          />
          <path
            d='M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z'
            fill={color}
          />
          <path
            d='M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z'
            fill={color}
          />
        </svg>
      )
    case 'chevron-forward':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <polyline
            points='184 112 328 256 184 400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='48px'
          />
        </svg>
      )
    case 'list':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <line
            x1='160'
            y1='144'
            x2='448'
            y2='144'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='160'
            y1='256'
            x2='448'
            y2='256'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='160'
            y1='368'
            x2='448'
            y2='368'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <circle
            cx='80'
            cy='144'
            r='16'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <circle
            cx='80'
            cy='256'
            r='16'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <circle
            cx='80'
            cy='368'
            r='16'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'add':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <line
            x1='256'
            y1='112'
            x2='256'
            y2='400'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
          <line
            x1='400'
            y1='256'
            x2='112'
            y2='256'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'remove':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <line
            x1='400'
            y1='256'
            x2='112'
            y2='256'
            fill='none'
            stroke='#EF4444'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='32px'
          />
        </svg>
      )
    case 'people':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z'
            fill={color}
          />
          <path
            d='M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z'
            fill={color}
          />
          <path
            d='M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z'
            fill={color}
          />
          <path
            d='M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z'
            fill={color}
          />
        </svg>
      )
    case 'checkmark-circle':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke='#32c682'
            strokeMiterlimit='10'
            strokeWidth='20px'
          />
          <polyline
            points='352 176 217.6 336 160 272'
            fill='none'
            stroke='#32c682'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='20px'
          />
        </svg>
      )
    case 'close-circle':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke='#ff5549'
            strokeMiterlimit='10'
            strokeWidth='20px'
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
            strokeWidth='20px'
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
            strokeWidth='20px'
          />
        </svg>
      )
    case 'eye':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <circle cx='256' cy='256' r='64' fill={color} />

          <path
            d='M490.84,238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.66,96c-42.52,0-84.33,12.15-124.27,36.11C90.66,156.54,53.76,192.23,21.71,238.18a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.4,76.14,98.28,100.65C162,402,207.9,416,255.66,416c46.71,0,93.81-14.43,136.2-41.72,38.46-24.77,72.72-59.66,99.08-100.92A32.2,32.2,0,0,0,490.84,238.6ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z'
            fill={color}
          />
        </svg>
      )
    case 'eye-off':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z'
            fill={color}
          />
          <path
            d='M248,315.85l-51.79-51.79a2,2,0,0,0-3.39,1.69,64.11,64.11,0,0,0,53.49,53.49A2,2,0,0,0,248,315.85Z'
            fill={color}
          />
          <path
            d='M264,196.15,315.87,248a2,2,0,0,0,3.4-1.69,64.13,64.13,0,0,0-53.55-53.55A2,2,0,0,0,264,196.15Z'
            fill={color}
          />
          <path
            d='M491,273.36a32.2,32.2,0,0,0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349,110.55,302,96,255.68,96a226.54,226.54,0,0,0-71.82,11.79,4,4,0,0,0-1.56,6.63l47.24,47.24a4,4,0,0,0,3.82,1.05,96,96,0,0,1,116,116,4,4,0,0,0,1.05,3.81l67.95,68a4,4,0,0,0,5.4.24A343.81,343.81,0,0,0,491,273.36Z'
            fill={color}
          />
          <path
            d='M256,352a96,96,0,0,1-93.3-118.63,4,4,0,0,0-1.05-3.81L94.81,162.69a4,4,0,0,0-5.41-.23c-24.39,20.81-47,46.13-67.67,75.72a31.92,31.92,0,0,0-.64,35.54c26.41,41.33,60.39,76.14,98.28,100.65C162.06,402,207.92,416,255.68,416a238.22,238.22,0,0,0,72.64-11.55,4,4,0,0,0,1.61-6.64l-47.47-47.46a4,4,0,0,0-3.81-1.05A96,96,0,0,1,256,352Z'
            fill={color}
          />
        </svg>
      )
    case 'reload':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
            fill='none'
            stroke={color}
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <path
            d='M341.54,197.85l-11.37-13.23a103.37,103.37,0,1,0,22.71,105.84'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='32px'
          />
          <path
            d='M367.32,162a8.44,8.44,0,0,0-6,2.54l-59.54,59.54a8.61,8.61,0,0,0,6.09,14.71h59.54a8.62,8.62,0,0,0,8.62-8.62V170.61a8.61,8.61,0,0,0-8.68-8.63Z'
            fill={color}
          />
        </svg>
      )
    case 'tooltip':
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path
            d='M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z'
            fill='none'
            stroke={color}
            strokeMiterlimit='10'
            strokeWidth='28px'
          />
          <path
            d='M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296'
            fill='none'
            stroke={color}
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='24px'
          />
          <circle cx='250' cy='348' r='18' fill={color} />
        </svg>
      )
    default:
      return null
  }
}
