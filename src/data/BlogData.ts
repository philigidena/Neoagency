
interface DataType {
   id: number;
   page: string;
   thumb: string;
   title: string;
   tag: string;
   date: string;
   name?: string;
}

const blog_data: DataType[] = [
   // home_4 - Homepage Blog Posts
   {
      id: 1,
      page: "home_4",
      thumb: "/assets/img/blog/blog-4/thumb-2.jpg",
      title: "Psychology-Driven Marketing: The Science Behind Emotional Connections",
      tag: "Strategy",
      date: "January 15, 2025",
   },
   {
      id: 2,
      page: "home_4",
      thumb: "/assets/img/blog/blog-4/thumb.jpg",
      title: "From Dopamine Studios to Neo: Our Journey in Redefining Brand Storytelling",
      tag: "Insights",
      date: "January 10, 2025",
   },

   // blog_1 - Blog Page Posts
   {
      id: 1,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb.jpg",
      title: "Where Storytelling Meets Science: The Neo Approach to Brand Building",
      tag: "Branding",
      date: "February 1, 2025",
   },
   {
      id: 2,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb-2.jpg",
      title: "The Art of Visual Storytelling: Creating Content That Converts",
      tag: "Content Strategy",
      date: "January 28, 2025",
   },
   {
      id: 3,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb-3.jpg",
      title: "Data-Driven Creativity: How Analytics Shape Modern Marketing Campaigns",
      tag: "Marketing",
      date: "January 25, 2025",
   },
   {
      id: 4,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb-4.jpg",
      title: "Building Brand Identity in the Digital Age: A Comprehensive Guide",
      tag: "Branding",
      date: "January 20, 2025",
   },
   {
      id: 5,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb-5.jpg",
      title: "The Power of Authentic Storytelling in Modern Marketing",
      tag: "Strategy",
      date: "January 15, 2025",
   },
   {
      id: 6,
      page: "blog_1",
      thumb: "/assets/img/blog/thumb-6.jpg",
      title: "Social Media Strategy: Crafting Campaigns That Resonate and Convert",
      tag: "Digital Marketing",
      date: "January 10, 2025",
   },
];

export default blog_data;