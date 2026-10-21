export type PartnerLogo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

export const partnerLogos: PartnerLogo[] = [
  // {
  //   name: "TAC Africa",
  //   href: "https://tacafrica.org/",
  //   src: "/assets/partners/tac-africa.png",
  //   width: 72,
  //   height: 72
  // },
  // {
  //   name: "Platview Technologies",
  //   href: "https://platview.com/",
  //   src: "/assets/partners/platview-provided.svg",
  //   width: 149,
  //   height: 45
  // },
  // {
  //   name: "BlazeTech",
  //   href: "https://blazetch.com/",
  //   src: "/assets/partners/blazetech.png",
  //   width: 72,
  //   height: 72
  // },
  {
    name: "NEM Health",
    href: "https://nemhealth.com/",
    src: "/assets/partners/nem-health.png",
    width: 599,
    height: 135
  },
  {
    name: "Redcare HMO",
    href: "https://redcarehmo.com/",
    src: "/assets/partners/redcare-hmo.png",
    width: 125,
    height: 50
  },
  {
    name: "Lagoon Hospitals",
    href: "https://www.lagoonhospitals.com/",
    src: "/assets/partners/lagoon-hospitals.png",
    width: 251,
    height: 107,
    className: "h-9 sm:h-10"
  },
  {
    name: "NVIDIA Inception Program member",
    href: "https://www.nvidia.com/en-us/startups/",
    src: "/assets/partners/nvidia-inception.svg",
    width: 500,
    height: 216,
    className: "h-10 sm:h-12"
  }
];
