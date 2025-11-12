
interface DataType {
   id: number;
   page: string;
   img: string;
   title: string;
   tag: string;
   category: string;
   videoUrl?: string; // Vimeo, YouTube, or direct video URL
   videoType?: 'vimeo' | 'youtube' | 'direct'; // Type of video
   description?: string;
   client?: string;
}

const portfolio_data: DataType[] = [
   {
      id: 1,
      page: "portfolio_1",
      img: "/assets/img/portfolio/two-columns/thumb.jpg",
      title: "Sara bedroom solution",
      tag: "MARKETING",
      category: "commercial product",
      description: "Elegant bedroom solutions brought to life through video",
      client: "Sara bedroom solution",
      videoUrl: "1135995566",
      videoType: "vimeo"
   },
   {
      id: 2,
      page: "portfolio_1",
      img: "/assets/img/portfolio/two-columns/thumb-2.jpg",
      title: "Bagel Dine & Co",
      tag: "MARKETING",
      category: "commercial lifestyle",
      description: "Delicious dining experience captured on film",
      client: "Bagel Dine & Co",
      videoUrl: "1135995773",
      videoType: "vimeo"
   },
   {
      id: 3,
      page: "portfolio_1",
      img: "/assets/img/portfolio/two-columns/thumb-3.jpg",
      title: "Ye-Almaz Dental",
      tag: "DIGITAL",
      category: "commercial explainer",
      description: "Professional dental services presented with clarity and style",
      client: "Ye-Almaz Dental",
      videoUrl: "1135995548",
      videoType: "vimeo"
   },
   {
      id: 4,
      page: "portfolio_1",
      img: "/wow.jpg",
      title: "Brundo",
      tag: "DIGITAL",
      category: "commercial branding",
      description: "Dynamic brand launch video that makes an impact",
      client: "Brundo",
      videoUrl: "1135995394",
      videoType: "vimeo"
   },
   {
      id: 5,
      page: "portfolio_1",
      img: "/assets/img/portfolio/two-columns/thumb-5.jpg",
      title: "WOW Furniture",
      tag: "BRANDING",
      category: "branding product",
      description: "Modern furniture design meets creative storytelling",
      client: "WOW Furniture",
      videoUrl: "1135995799",
      videoType: "vimeo"
   },
   {
      id: 6,
      page: "portfolio_1",
      img: "/assets/img/portfolio/two-columns/thumb-6.jpg",
      title: "Dachi Fruit Cordial",
      tag: "BRANDING",
      category: "branding commercial",
      description: "A compelling brand story showcasing Dachi Fruit Cordial's unique identity",
      client: "Dachi Fruit Cordial",
      videoUrl: "1135995419",
      videoType: "vimeo"
   },

   // portfolio_2

   {
      id: 1,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb.jpg",
      title: "Dacht",
      tag: "BRANDING",
      category: "prof prof1"
   },
   {
      id: 2,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-2.jpg",
      title: "SARA",
      tag: "MARKETING",
      category: "prof2 prof4"
   },
   {
      id: 3,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-3.jpg",
      title: "Ye-Almaz",
      tag: "DIGITAL",
      category: "prof1 prof3"
   },
   {
      id: 4,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-4.jpg",
      title: "Brundo",
      tag: "BRANDING",
      category: "prof3 prof1"
   },
   {
      id: 5,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-5.jpg",
      title: "Store 251",
      tag: "MARKETING",
      category: "prof2 prof4"
   },
   {
      id: 6,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-6.jpg",
      title: "KAL Makeup School",
      tag: "BRANDING",
      category: "prof prof1"
   },
   {
      id: 7,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-7.jpg",
      title: "Rungo Trackers",
      tag: "DIGITAL",
      category: "prof3 prof1"
   },
   {
      id: 8,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-8.jpg",
      title: "Idea",
      tag: "MARKETING",
      category: "prof2 prof4"
   },
   {
      id: 9,
      page: "portfolio_2",
      img: "/assets/img/portfolio/three-columns/thumb-9.jpg",
      title: "AddisFly",
      tag: "BRANDING",
      category: "prof prof1"
   },

   // portfolio_3

   {
      id: 1,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb.jpg",
      title: "Dacht",
      tag: "BRANDING",
      category: "prof prof1"
   },
   {
      id: 2,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-2.jpg",
      title: "SARA",
      tag: "MARKETING",
      category: "prof2 prof4"
   },
   {
      id: 3,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-3.jpg",
      title: "Ye-Almaz",
      tag: "DIGITAL",
      category: "prof1 prof3"
   },
   {
      id: 4,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-4.jpg",
      title: "La Maison",
      tag: "BRANDING",
      category: "prof3 prof1"
   },
   {
      id: 5,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-5.jpg",
      title: "Brundo",
      tag: "DIGITAL",
      category: "prof2 prof4"
   },
   {
      id: 6,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-6.jpg",
      title: "NAK Trading",
      tag: "MARKETING",
      category: "prof prof1"
   },
   {
      id: 7,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-7.jpg",
      title: "KAL",
      tag: "BRANDING",
      category: "prof3 prof1"
   },
   {
      id: 8,
      page: "portfolio_3",
      img: "/assets/img/portfolio/four-columns/thumb-8.jpg",
      title: "Store 251",
      tag: "MARKETING",
      category: "prof2 prof4"
   },
];

export default portfolio_data;