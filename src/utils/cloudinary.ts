import { Cloudinary } from '@cloudinary/url-gen';

interface CloudinaryConfig {
  cloudName: string;
  publicId: string;
}

const cloudinary = new Cloudinary({
  cloud: { cloudName: 'dn7a1djp1' },
});

export function getOptimizedImageUrl({ publicId }: Partial<CloudinaryConfig>): string {
  return cloudinary
    .image(publicId)
    .quality('auto')
    .format('auto')
    .delivery('q_auto')
    .toURL();
}