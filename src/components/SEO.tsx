import { useEffect } from "react";

type SEOProps = {
   pageTitle: string;
};

const SEO = ({ pageTitle }: SEOProps) => {
   useEffect(() => {
      document.title = pageTitle;
   }, [pageTitle]);

   return null;
};

export default SEO;