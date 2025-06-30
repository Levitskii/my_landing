export const AcmeLogo = () => (
   <svg
      className=""
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
   >
      <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
     
     <!-- ядро -->
     <circle cx="18" cy="18" r="5" fill="currentColor" />
   
     <!-- орбитальная «оболочка» -->
     <circle cx="18" cy="18" r="13" stroke="currentColor" stroke-width="2" />
   
     <!-- диагональная орбита для ощущения объёма -->
     <ellipse
       cx="18"
       cy="18"
       rx="13"
       ry="4.5"
       transform="rotate(-40 18 18)"
       stroke="currentColor"
       stroke-width="2"
       fill="none"
     />

   </svg>
);
