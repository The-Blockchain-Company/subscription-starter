const Logo = ({ className = '', ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect width="100%" height="100%" rx="16" fill="transparent" />
    <path 
    fillRule="evenodd"
    clipRule="evenodd"
    d="M3874 8125 c-126 -72 -521 -300 -879 -506 -357 -206 -1052 -607
-1542 -890 l-893 -514 0 -2045 0 -2045 902 -520 c496 -286 1293 -745 1771
-1021 l869 -501 332 192 c182 105 707 409 1166 674 459 266 840 488 845 494 6
7 17 13 25 15 8 2 18 8 21 14 3 5 10 10 15 11 5 1 8 5 6 10 -1 4 3 6 10 5 9
-2 12 40 13 164 0 93 -3 168 -7 168 -5 0 -8 -4 -8 -8 0 -5 -16 -14 -35 -22
-19 -7 -31 -18 -28 -23 3 -6 1 -7 -4 -4 -8 5 -2125 -1204 -2320 -1325 l-33
-20 -2 658 -3 658 -880 508 c-484 280 -955 552 -1047 604 l-168 96 0 1217 -1
1216 -565 325 c-499 287 -562 326 -547 338 10 7 331 193 713 414 382 220 1100
635 1594 921 495 286 904 520 910 520 6 0 178 -97 381 -215 617 -357 1919
-1106 1966 -1130 24 -13 46 -26 49 -30 3 -3 12 -8 20 -10 12 -2 14 24 15 165
0 122 -3 167 -12 167 -6 0 -13 4 -15 9 -1 5 -9 11 -17 13 -8 2 -23 9 -32 17
-10 8 -375 221 -811 473 -436 253 -962 557 -1169 677 l-376 218 -229 -132z"/>
<path d="M3230 6092 c-476 -274 -941 -543 -1035 -597 -93 -54 -174 -101 -178
-105 -5 -4 54 -44 130 -88 452 -263 905 -522 913 -522 5 0 240 133 522 296
282 162 519 293 528 291 8 -2 182 -100 385 -217 204 -117 434 -250 512 -294
l143 -81 0 -605 0 -605 -143 -81 c-287 -163 -882 -506 -890 -513 -4 -4 -6
-280 -5 -613 l3 -605 357 206 c196 113 665 384 1042 601 l685 395 0 1215 0
1215 -152 86 c-84 48 -395 227 -692 399 -1107 641 -1244 720 -1252 720 -5 0
-398 -224 -873 -498z"/>
<path d="M3062 4168 l3 -602 425 -243 c234 -134 430 -243 435 -243 10 0 15
1174 5 1183 -3 2 -196 116 -430 252 -234 136 -428 249 -433 252 -4 2 -6 -267
-5 -599z"
fill="blue"
/>
    
  </svg>
);

export default Logo;
