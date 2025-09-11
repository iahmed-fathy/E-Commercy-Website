type SocialLinks = {
  twitter: string;
  instagram: string;
  linkedin: string;
};

type TeamMember = {
  name: string;
  position: string;
  image: string;
  social: SocialLinks;
};

const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Fathy",
    position: "Founder & CEO",
    image: "/team/ahmed_fathy.png",
    social: {
      twitter: "https://www.linkedin.com/in/iahmedfathy/",
      instagram: "https://www.linkedin.com/in/iahmedfathy/",
      linkedin: "https://www.linkedin.com/in/iahmedfathy/",
    },
  },
  {
    name: "Omar Khaled",
    position: "Chief Operating Officer",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/omarkhaled",
      instagram: "https://instagram.com/omarkhaled",
      linkedin: "https://linkedin.com/in/omarkhaled",
    },
  },
  {
    name: "Youssef Adel",
    position: "Chief Technology Officer",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/youssefadel",
      instagram: "https://instagram.com/youssefadel",
      linkedin: "https://linkedin.com/in/youssefadel",
    },
  },
  {
    name: "Tariq Jamal",
    position: "Head of Marketing",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/tariqjamal",
      instagram: "https://instagram.com/tariqjamal",
      linkedin: "https://linkedin.com/in/tariqjamal",
    },
  },
  {
    name: "Mansour Saeed",
    position: "Product Manager",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/mansoursaeed",
      instagram: "https://instagram.com/mansoursaeed",
      linkedin: "https://linkedin.com/in/mansoursaeed",
    },
  },
  {
    name: "Faris Nabil",
    position: "Customer Experience Lead",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/farisnabil",
      instagram: "https://instagram.com/farisnabil",
      linkedin: "https://linkedin.com/in/farisnabil",
    },
  },
  {
    name: "Khalid Abdullah",
    position: "Logistics Manager",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/khalidabdullah",
      instagram: "https://instagram.com/khalidabdullah",
      linkedin: "https://linkedin.com/in/khalidabdullah",
    },
  },
  {
    name: "Nader Hassan",
    position: "Finance Director",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/naderhassan",
      instagram: "https://instagram.com/naderhassan",
      linkedin: "https://linkedin.com/in/naderhassan",
    },
  },
  {
    name: "Samir Fadi",
    position: "Software Engineering Manager",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/samirfadi",
      instagram: "https://instagram.com/samirfadi",
      linkedin: "https://linkedin.com/in/samirfadi",
    },
  },
  {
    name: "Hassan Ibrahim",
    position: "Head of Content",
    image: "/team/youssef_adel.png",
    social: {
      twitter: "https://twitter.com/hassanimbrahim",
      instagram: "https://instagram.com/hassanimbrahim",
      linkedin: "https://linkedin.com/in/hassanimbrahim",
    },
  },
];

export default teamMembers;
