
import Image from 'next/image';

 const Logo = ({ className = '', ...props }) => (

<Image
                                        className={className}
										{...props}
                                        src="https://quantumone.b-cdn.net/bcc-logo.svg"
                                        alt="bcc-logo"
                                        width={32}
                                        height={32}
                                      />




 );
 
 export default Logo;