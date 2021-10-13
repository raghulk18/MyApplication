import React, { useState } from 'react';
import './home-banner.scss';
import ImageGallery from 'react-image-gallery';
const origin = window.location.origin;
const images = [
    {
      original: '/images/home-banner/1.jpg',
      title: 'Coffee made <br> with militaRy <br> precision',
      desc:'We pride ourselves on serving delicious, ethically sourced coffee. We have two amazing coffee blends - Light Horse and Armoured Blend.',
      linkText:'Shop online',
      linkURL:'/online'
    },
    {
        original: '/images/home-banner/2.jpg',
        title: 'smashed<br> aVocado + <br>coffee $12',
        desc:`C'mon, nothing beats smashed avo and coffee for brekky. Drop in for a bite and avo'good day!`,
        linkText:'Shop online',
        linkURL:'/online'
    }
  ];

  const _handleImageError = e => {
    if (this.props.defaultImage &&
        e.target.src.indexOf(this.props.defaultImage) === -1) {
      e.target.src = this.props.defaultImage;
    }
  }
  let customBannerRenderer = (item) => {
      const onImageError = _handleImageError;
      return (
            <div className="home-conatiner">
                <div className="banner-wrapper" style={{backgroundImage:`url("${item.original}")`}}>
                    <div className="banner-overlay">
                        <div className="banner-title">
                            <h1 dangerouslySetInnerHTML={{__html: item.title}}></h1>
                        </div>
                        <p className="banner-desc">{item.desc}</p>
                        <a className="banner-link" href={item.linkText}>{item.linkText}</a>
                    </div>
                
                </div>
            </div>
      );
  }
  export default function HomeBanner(){
      return (
        <>
          {/* <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} /> */}
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            renderItem={customBannerRenderer}
          />
        </>
      );
  }