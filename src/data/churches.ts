import citykirkenImg from "@/assets/citykirken.jpg";
import domkirkeImg from "@/assets/domkirke.jpg";

export type Church = {
  slug: string;
  badge: "Frikirke" | "Folkekirke";
  name: string;
  addr: string;
  city: string;
  postal: string;
  time: string;
  desc: string;
  tags: string[];
  img: string;
  url: string;
};

export const churches: Church[] = [
  {
    slug: "citykirken-aarhus",
    badge: "Frikirke",
    name: "CityKirken Aarhus",
    addr: "Store Torv 1, 8000 Aarhus C",
    city: "Aarhus",
    postal: "8000",
    time: "Søndag kl. 10:00",
    desc: "En frikirke i hjertet af Aarhus med fokus på moderne lovsang, ungdomsarbejde og nære fællesskaber på tværs af generationer.",
    tags: ["Lovsang", "Ungdomsarbejde", "Fællesskab"],
    img: citykirkenImg,
    url: "https://www.ckirken.dk/da/",
  },
  {
    slug: "aarhus-domkirke",
    badge: "Folkekirke",
    name: "Aarhus Domkirke",
    addr: "Store Torv, 8000 Aarhus C",
    city: "Aarhus",
    postal: "8000",
    time: "Søndag kl. 10:00 og 17:00",
    desc: "Danmarks længste kirke og et historisk vartegn for byen. Domkirken byder på højtidelige gudstjenester, smuk orgelmusik og et aktivt menighedsliv.",
    tags: ["Orgel", "Kor", "Familiefokus"],
    img: domkirkeImg,
    url: "https://aarhusdomkirke.dk",
  },
];
