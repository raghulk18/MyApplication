import './home-banner.scss';
import ImageGallery from 'react-image-gallery';
const origin = window.location.origin;
const images = [
    {
      original: '/images/home-banner/1.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: '/images/home-banner/2.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: '/images/home-banner/3.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  export default function HomeBanner(){
      return (
        <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} />
      );
  }