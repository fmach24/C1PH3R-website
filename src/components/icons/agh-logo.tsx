import Image, { ImageProps } from 'next/image';
import aghLogoImage from './logos/agh-logo.jpg';

type AghLogoProps = Omit<ImageProps, 'src' | 'alt'>;

export function AghLogo(props: AghLogoProps) {
  return (
    <Image
      src={aghLogoImage}
      alt="AGH Logo"
      {...props}
    />
  );
}
