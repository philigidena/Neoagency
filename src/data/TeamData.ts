interface DataType {
   id: number;
   page: string;
   thumb: string;
   name: string;
   designation: string;
   description?: string;
   class?: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_4",
      thumb: "/assets/Jimmy.jpg",
      name: "JAMAL ABDU",
      designation: "General Manager | Head of Operations & Production Technology",
      description: "With years of experience producing, editing, and directing TV shows, Jamal oversees operations and production with precision. His leadership ensures smooth execution from concept to delivery."
   },
   {
      id: 2,
      page: "home_4",
      thumb: "/assets/Fila.jpg",
      name: "PHILIMON MENGESHA",
      designation: "Lead, Business Development, Strategy & Client Management",
      description: "An Executive Producer of major TV shows, Philimon brings experience from top local and international channels. He leads business development and client relations with vision and creative strength."
   },

   // home_5
   {
      id: 1,
      page: "home_5",
      thumb: "/assets/img/team/team-5/team.jpg",
      name: "BOB MERLY",
      designation: "Developer",
      class: "mt-60",
   },
   {
      id: 2,
      page: "home_5",
      thumb: "/assets/img/team/team-5/team-2.jpg",
      name: "Richar handyamn",
      designation: "Designer",
   },
   {
      id: 3,
      page: "home_5",
      thumb: "/assets/img/team/team-5/team-3.jpg",
      name: "LIZA OLIVARES",
      designation: "Engineer",
      class: "mt-60",
   },
   {
      id: 4,
      page: "home_5",
      thumb: "/assets/img/team/team-5/team-4.jpg",
      name: "laura leipina",
      designation: "Designer",
   },

   // home_6

   {
      id: 1,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb.jpg",
      name: "Liza Olivarez",
      designation: "Engineer",
   },
   {
      id: 2,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-2.jpg",
      name: "Laura Leipina",
      designation: "Designer",
   },
   {
      id: 3,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-3.jpg",
      name: "Laura Leipina",
      designation: "Designer",
   },
   {
      id: 4,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-4.jpg",
      name: "Laura Leipina",
      designation: "Designer",
   },
   {
      id: 5,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-5.jpg",
      name: "Liza Olivarez",
      designation: "Engineer",
   },
   {
      id: 6,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-6.jpg",
      name: "Richar Handyamn",
      designation: "Designer",
   },
   {
      id: 7,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-3.jpg",
      name: "Laura Leipina",
      designation: "Designer",
   },
   {
      id: 8,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-4.jpg",
      name: "Laura Leipina",
      designation: "Designer",
   },
   {
      id: 9,
      page: "home_6",
      thumb: "/assets/img/team/thumb-6/thumb-5.jpg",
      name: "Liza Olivarez",
      designation: "Engineer",
   },

   // inner_team
   {
      id: 1,
      page: "inner_team",
      thumb: "/assets/img/team/team-5/team.jpg",
      name: "PITTERSON",
      designation: "Developer"
   },
   {
      id: 2,
      page: "inner_team",
      thumb: "/assets/img/team/team-5/team-2.jpg",
      name: "JOTIN",
      designation: "Developer"
   },
   {
      id: 3,
      page: "inner_team",
      thumb: "/assets/img/team/team-5/team-3.jpg",
      name: "DANDU",
      designation: "Developer"
   },
   {
      id: 4,
      page: "inner_team",
      thumb: "/assets/img/team/team-5/team-4.jpg",
      name: "SAMIR",
      designation: "Developer"
   },
   {
      id: 5,
      page: "inner_team",
      thumb: "/assets/img/team/thumb-5.jpg",
      name: "PITTERSON",
      designation: "Developer"
   },
   {
      id: 6,
      page: "inner_team",
      thumb: "/assets/img/team/thumb-6.jpg",
      name: "JOTIN",
      designation: "Developer"
   },
   {
      id: 7,
      page: "inner_team",
      thumb: "/assets/img/team/thumb-7.jpg",
      name: "DANDU",
      designation: "Developer"
   },
   {
      id: 8,
      page: "inner_team",
      thumb: "/assets/img/team/thumb-8.jpg",
      name: "SAMIR",
      designation: "Developer"
   },
];

export default team_data;