import React from 'react';

interface ISeoProps {
   title: string;
}

const Seo = ({ title }: ISeoProps) => {
   return <title>{title} | DevStickers!</title>;
};

export default Seo;
