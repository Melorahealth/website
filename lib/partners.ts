export type PartnerLogo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
  /**
   * Rendered height in px on desktop. Logos have different shapes, so each one
   * gets its own height to look the same visual size as its neighbours: wide
   * wordmarks sit shorter, stacked marks sit taller.
   */
  displayHeight: number;
};

export const partnerLogos: PartnerLogo[] = [
  // {
  //   name: "TAC Africa",
  //   href: "https://tacafrica.org/",
  //   src: "/assets/partners/tac-africa.png",
  //   width: 72,
  //   height: 72,
  //   displayHeight: 44
  // },
  // {
  //   name: "Platview Technologies",
  //   href: "https://platview.com/",
  //   src: "/assets/partners/platview-provided.svg",
  //   width: 149,
  //   height: 45,
  //   displayHeight: 34
  // },
  // {
  //   name: "BlazeTech",
  //   href: "https://blazetch.com/",
  //   src: "/assets/partners/blazetech.png",
  //   width: 72,
  //   height: 72,
  //   displayHeight: 44
  // },
  {
    name: "NEM Health",
    href: "https://nemhealth.com/",
    src: "/assets/partners/nem-health.png",
    width: 599,
    height: 135,
    displayHeight: 32
  },
  {
    name: "Redcare HMO",
    href: "https://redcarehmo.com/",
    src: "/assets/partners/redcare-hmo.png",
    width: 125,
    height: 50,
    displayHeight: 44
  },
  {
    name: "Lagoon Hospitals",
    href: "https://www.lagoonhospitals.com/",
    src: "/assets/partners/lagoon-hospitals.png",
    width: 251,
    height: 107,
    displayHeight: 46
  },
  {
    name: "Pan-Atlantic University",
    href: "https://pau.edu.ng/",
    src: "/assets/partners/pan-atlantic-university-logo.png",
    width: 213,
    height: 88,
    displayHeight: 46
  },
  {
    name: "NVIDIA Inception Program member",
    href: "https://www.nvidia.com/en-us/startups/",
    src: "/assets/partners/nvidia-inception.svg",
    width: 500,
    height: 216,
    displayHeight: 54
  }
];
