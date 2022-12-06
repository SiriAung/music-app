import React from 'react';

const DownloadAds = () => {
  const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className="download">
      <div className="download_images flex">
        <img src={require("../components/img/App Store.png")} alt="" 
          className={downloadImgStyle + ` mr-[2rem] `} />
        <img src={require("../components/img/Google Play.png")} alt="" 
          className={downloadImgStyle} />
      </div>
    </div>
  );
};

export default DownloadAds;