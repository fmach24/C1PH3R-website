import Image, { ImageProps } from 'next/image';
import aghLogoImage from './logos/wiet-logo.jpg';

type WietLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export function WietLogo(props: WietLogoProps) {
  return (
    <Image
      src={aghLogoImage}
      alt="WIET Logo"
      {...props}
    />
  );
}