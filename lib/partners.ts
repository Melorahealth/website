export type PartnerLogo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
};

export const partnerLogos: PartnerLogo[] = [
  {
    name: "TAC Africa",
    href: "https://tacafrica.org/",
    src: "/assets/partners/tac-africa.png",
    width: 72,
    height: 72
  },
  {
    name: "Platview Technologies",
    href: "https://platview.com/",
    src: "/assets/partners/platview-provided.svg",
    width: 149,
    height: 45
  },
  {
    name: "BlazeTech",
    href: "https://blazetch.com/",
    src: "/assets/partners/blazetech.png",
    width: 72,
    height: 72
  }
];
