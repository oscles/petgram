import { Link } from '@reach/router'
import { Svg } from './styles'

export const Logo = (props) => {
  return (
    <Link to='/'>
      <Svg
        width={590.35}
        height={122.021}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-45.175 13.989 590.35 122.021'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <linearGradient
            id='prefix__editing-shiny-gradient'
            x1={0.043}
            x2={0.957}
            y1={0.297}
            y2={0.703}
            gradientUnits='objectBoundingBox'
          >
            <stop offset={0} stopColor='#ffb200' />
            <stop offset={0.5} stopColor='#e10057' />
            <stop offset={1} stopColor='#5A1A80' />
          </linearGradient>
          <linearGradient
            id='prefix__editing-shiny-gradient2'
            x1={0}
            x2={0}
            y1={0}
            y2={1}
          >
            <stop offset={0.2} stopColor='#fff' stopOpacity={0.8} />
            <stop offset={0.8} stopColor='#fff' stopOpacity={0} />
          </linearGradient>
          <filter
            id='prefix__editing-shiny2'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
          >
            <feMorphology radius={2} />
          </filter>
          <filter
            id='prefix__editing-shiny'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
          >
            <feFlood floodColor='#fff' result='flood' />
            <feConvolveMatrix
              in='SourceGraphic'
              result='conv'
              order='8,8'
              divisor={1}
              kernelMatrix='0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0'
            />
            <feOffset dy={4} in='conv' result='offset' />
            <feComposite operator='in' in='flood' in2='offset' result='comp' />
            <feGaussianBlur in='offset' stdDeviation={3} result='shadow' />
            <feColorMatrix
              in='shadow'
              values='0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0'
              result='dark-shadow'
            />
            <feOffset dy={4} in='dark-shadow' result='offset-shadow' />
            <feOffset dy={2} in='conv' result='offset-2' />
            <feComposite
              operator='out'
              in='offset'
              in2='offset-2'
              result='edge-diff'
            />
            <feGaussianBlur
              in='edge-diff'
              stdDeviation={1}
              result='edge-blur'
            />
            <feColorMatrix
              in='edge-blur'
              result='edge-shadow'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
            />
            <feComposite
              operator='in'
              in='edge-shadow'
              in2='offset'
              result='edge-shadow-in'
            />
            <feOffset dy={1} in='edge-shadow-in' result='edge-shadow-final' />
            <feMerge result='out'>
              <feMergeNode in='offset-shadow' />
              <feMergeNode in='comp' />
              <feMergeNode in='edge-shadow-final' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g filter='url(#prefix__editing-shiny)'>
          <path
            d='M2.05-15.62q0-12.09 6.27-19.71 6.66-8.25 18.24-8.25 8.38 0 12.61 4.06 4.22 4.06 4.22 12.64 0 13.06-6.65 20.67-6.6 7.49-17.67 7.49-8.64 0-12.83-4.32-4.19-4.32-4.19-12.58zm16.83-13.24Q16-17.34 16-8.26q0 2.18.74 3.59.73 1.41 2.68 1.41 1.96 0 3.17-.93 1.22-.93 2.18-3.04 1.53-3.46 2.97-10.79 1.44-7.32 1.57-10.36.13-3.04.13-5.35 0-2.3-.7-3.77-.71-1.48-2.6-1.48-1.88 0-3.16 1.16-2.37 2.17-4.1 8.96zm46.78 6.4q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm43.4-4.16q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.54 0-2.43-.45.7-1.66.92-3.74.23-2.08.23-2.66 0-2.68-1.86-2.68-1.28 0-2.72 1.6-1.44 1.6-2.65 4.09-2.69 5.76-2.69 11.59 0 3.2 1.21 4.64 1.22 1.44 3.91 1.44 3.71 0 6.65-3.08.84-.96 1.28-2.04 2.44 1.28 2.44 4.8 0 3.58-3.97 5.95-4.1 2.43-10.63 2.43-12.99 0-12.99-13.76 0-10.05 5.7-15.81 5.5-5.63 15.61-5.63 10.12 0 10.12 7.3zm17.02 23.1q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.21 32.38q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm19.39 4.8q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62zm42.75 23.87q-3.07 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.28-3.4.58-1.08.84-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88zm40-31.23q2.3 0 4.09.51.07-.25.2-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q243.01-.38 239.1.9q-1.34.38-3.23.38t-3.61-.99q-1.73-.99-2.24-2.66-1.03 1.67-3.08 2.66-2.04.99-5.02.99-2.98 0-5.44-.77-2.46-.77-4-2.43-2.82-3.26-2.82-10.69 0-9.6 5.64-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15zm24.83 3.33q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.51-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L299.78 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76zm16.09 16.06q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zM337.7-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.44-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L391.68 0 379.2 1.28l3.46-17.41q.57-2.88 1.08-6.14.52-3.27.52-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L372.61 0 360 1.28l6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.55 1.34 1.79 1.35 2.36 3.52 1.09-2.24 3.88-3.55 2.78-1.31 6.2-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z'
            fill='url(#prefix__editing-shiny-gradient)'
            transform='translate(41.165 104.432)'
          />
        </g>
        <g filter='url(#prefix__editing-shiny2)'>
          <path
            d='M2.05-15.62q0-12.09 6.27-19.71 6.66-8.25 18.24-8.25 8.38 0 12.61 4.06 4.22 4.06 4.22 12.64 0 13.06-6.65 20.67-6.6 7.49-17.67 7.49-8.64 0-12.83-4.32-4.19-4.32-4.19-12.58zm16.83-13.24Q16-17.34 16-8.26q0 2.18.74 3.59.73 1.41 2.68 1.41 1.96 0 3.17-.93 1.22-.93 2.18-3.04 1.53-3.46 2.97-10.79 1.44-7.32 1.57-10.36.13-3.04.13-5.35 0-2.3-.7-3.77-.71-1.48-2.6-1.48-1.88 0-3.16 1.16-2.37 2.17-4.1 8.96zm46.78 6.4q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm43.4-4.16q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.54 0-2.43-.45.7-1.66.92-3.74.23-2.08.23-2.66 0-2.68-1.86-2.68-1.28 0-2.72 1.6-1.44 1.6-2.65 4.09-2.69 5.76-2.69 11.59 0 3.2 1.21 4.64 1.22 1.44 3.91 1.44 3.71 0 6.65-3.08.84-.96 1.28-2.04 2.44 1.28 2.44 4.8 0 3.58-3.97 5.95-4.1 2.43-10.63 2.43-12.99 0-12.99-13.76 0-10.05 5.7-15.81 5.5-5.63 15.61-5.63 10.12 0 10.12 7.3zm17.02 23.1q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.21 32.38q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm19.39 4.8q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62zm42.75 23.87q-3.07 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.28-3.4.58-1.08.84-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88zm40-31.23q2.3 0 4.09.51.07-.25.2-.96l.32-1.98q.25-1.28.64-3.39l1.02-5.06 12.74-1.28-7.11 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.71 1.06 1.86 1.06Q243.01-.38 239.1.9q-1.34.38-3.23.38t-3.61-.99q-1.73-.99-2.24-2.66-1.03 1.67-3.08 2.66-2.04.99-5.02.99-2.98 0-5.44-.77-2.46-.77-4-2.43-2.82-3.26-2.82-10.69 0-9.6 5.64-15.42 5.63-5.89 14.59-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.02-5.44l3.45-18.75q-1.34-1.15-3.71-1.15zm24.83 3.33q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13zm45.51-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L299.78 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76zm16.09 16.06q-1.5-1.66-2.17-4.29-.68-2.62-.68-6.91t1.48-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.09 1.02-2.91 0-5.28-.77-2.36-.77-3.87-2.43zM337.7-27.9q-.74 1.15-1.38 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.56-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.35-1.15-2.91-1.15-1.57 0-2.5.51-.93.51-1.66 1.67zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.44-3.26-1.6 0-3.13 2.21-1.54 2.2-2.24 6.62L391.68 0 379.2 1.28l3.46-17.41q.57-2.88 1.08-6.14.52-3.27.52-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L372.61 0 360 1.28l6.72-33.92 10.43-1.28-1.09 6.46q1.67-3.45 4.74-4.96 3.07-1.5 7.87-1.5 2.75 0 4.55 1.34 1.79 1.35 2.36 3.52 1.09-2.24 3.88-3.55 2.78-1.31 6.2-1.31 3.43 0 5.12.74 1.7.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.89 4.1-.89 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z'
            fill='url(#prefix__editing-shiny-gradient2)'
            transform='translate(41.165 104.44)'
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}
