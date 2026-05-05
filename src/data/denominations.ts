export type Category = "Protestantisk" | "Katolsk/Ortodoks" | "Evangelikale kirker" | "Kirkelige bevægelser";

export type Denomination = {
  slug: string;
  name: string;
  category: Category;
  subtitle: string;
  icon: string; // lucide icon name
  founded: string;
  founder: string;
  members: string;
  affiliation?: string;
  spread?: string;
  description: string;
  beliefs: string[];
  sacraments: string;
};

export const denominations: Denomination[] = [
  {
    slug: "folkekirken",
    name: "Folkekirken",
    category: "Protestantisk",
    subtitle: "Danmarks evangelisk-lutherske statskirke siden 1536",
    icon: "Church",
    founded: "1536 (Reformationen i Danmark)",
    founder: "Bygger på Martin Luthers reformation (1517)",
    members: "Ca. 4,2 millioner medlemmer i Danmark",
    description:
      "Folkekirken er Danmarks officielle statskirke og en evangelisk-luthersk kirke, der blev grundlagt med reformationen i 1536 under Christian 3. Omkring 70 % af danskere er medlemmer. Kirken bygger på Martin Luthers teologi, som understreger, at mennesket frelses alene ved tro på Guds nåde — ikke gennem gerninger. Bibelen er den centrale autoritet, og gudstjenesten følger en fast liturgi med salmesang, prædiken og nadver. Folkekirken er kendt for sit brede favnende udtryk, hvor både dybt troende og kulturelt tilknyttede danskere finder plads. Kirken finansieres via kirkeskat og ledes administrativt af Kirkeministeriet.",
    beliefs: [
      "Frelse alene ved tro (sola fide) og nåde (sola gratia)",
      "Bibelen som øverste autoritet (sola scriptura)",
      "Det almindelige præstedømme — alle troende er ligeværdige",
      "To sakramenter: dåb og nadver",
      "Tilknyttet den danske stat og monarken som overhoved",
    ],
    sacraments: "Dåb og nadver",
  },
  {
    slug: "katolske-kirke",
    name: "Den Katolske Kirke",
    category: "Katolsk/Ortodoks",
    subtitle: "Verdens største kristne kirkesamfund med pave i Rom",
    icon: "Cross",
    founded: "Ca. år 30-33 e.Kr.",
    founder: "Jesus Kristus; ledet siden af paven som efterfølger af apostlen Peter",
    members: "Ca. 1,3 milliarder medlemmer",
    description:
      "Den Katolske Kirke er det største kristne kirkesamfund i verden og fører sin oprindelse tilbage til Jesus og apostlen Peter, som ifølge katolsk tradition var den første pave. Kirken ledes globalt af paven i Vatikanet og har en hierarkisk struktur med biskopper og præster. Centralt står de syv sakramenter, eukaristien (nadveren) som det højeste, samt en stærk Maria- og helgenfromhed. Katolsk teologi vægter både Bibelen og kirkens overlevering (traditionen) som troskilder. Kirken er kendt for sin rige liturgi, latinske arv, klosterliv og omfattende sociale arbejde gennem skoler, hospitaler og hjælpeorganisationer over hele verden.",
    beliefs: [
      "Paven er Kristi stedfortræder og kirkens øverste leder",
      "Tradition og Bibel er ligeværdige troskilder",
      "Syv sakramenter formidler Guds nåde",
      "Maria og helgener har en særlig plads i fromheden",
      "Frelse sker gennem tro, sakramenter og gode gerninger",
    ],
    sacraments: "Syv: dåb, firmelse, nadver (eukaristi), skriftemål, ægteskab, præstevielse, sygesalvelse",
  },
  {
    slug: "ortodokse-kirke",
    name: "Den Ortodokse Kirke",
    category: "Katolsk/Ortodoks",
    subtitle: "Østens oldkristne kirke med ikoner og liturgi",
    icon: "Sun",
    founded: "Ca. år 30-33 e.Kr.; udskilt fra Rom i 1054 (Det Store Skisma)",
    founder: "Jesus Kristus og apostlene; udviklet i det østromerske rige",
    members: "Ca. 240 millioner medlemmer",
    description:
      "Den Ortodokse Kirke er en af de ældste grene af kristendommen og brød i 1054 endeligt med Rom under Det Store Skisma. Kirken består af selvstændige nationale kirker — bl.a. den russiske, græske og serbiske ortodokse kirke — som anerkender den økumeniske patriark i Konstantinopel som æresoverhoved. Gudstjenesterne er kendetegnet ved lange, sungne liturgier, røgelse og brug af ikoner som hjælpemiddel til bøn. Ortodoks teologi lægger vægt på troens mysterium, treenigheden og 'theosis' — tanken om, at mennesket kan blive forvandlet i lighed med Gud. Traditionen og kirkefædrenes lære spiller en central rolle.",
    beliefs: [
      "Trofasthed mod de syv første økumeniske kirkemøder",
      "Bibel og hellig overlevering er ligeværdige",
      "Ikoner er 'vinduer mod himlen' og bruges i tilbedelsen",
      "Theosis — mennesket kan vokse i lighed med Gud",
      "Patriarker leder selvstændige nationale kirker",
    ],
    sacraments: "Syv mysterier: dåb, myronsalvelse, eukaristi, skriftemål, ægteskab, præstevielse, sygesalvelse",
  },
  {
    slug: "anglikanske-kirke",
    name: "Den Anglikanske Kirke",
    category: "Protestantisk",
    subtitle: "Englands kirke — bro mellem katolsk og protestantisk",
    icon: "ShieldCheck",
    founded: "1534 (under kong Henrik 8.)",
    founder: "Henrik 8. brød med Rom; teologisk formet af Thomas Cranmer",
    members: "Ca. 90 millioner medlemmer",
    description:
      "Den Anglikanske Kirke opstod i 1534, da kong Henrik 8. brød med paven i Rom og gjorde sig selv til overhoved for kirken i England. Den udviklede sig under Edward 6. og Elizabeth 1. til en særlig 'middelvej' mellem katolsk og protestantisk tro — den bevarede biskopper, liturgi og sakramentalt fokus, men afviste pavens autoritet og indførte reformatoriske principper. Kirken bruger Book of Common Prayer som liturgisk grundlag og rummer et bredt spektrum fra højkirkeligt anglo-katolsk til evangelikalt lavkirkeligt. Den globale anglikanske fællesskab tæller selvstændige kirker i bl.a. England, USA (Episcopal Church), Afrika og Asien, ledet i fællesskab af ærkebispen af Canterbury.",
    beliefs: [
      "En 'middelvej' (via media) mellem katolicisme og protestantisme",
      "Bibelen, traditionen og fornuften som troens kilder",
      "Bønbogen (Book of Common Prayer) som liturgisk grundlag",
      "Biskopper i apostolsk succession",
      "Plads til både højkirkelig og lavkirkelig fromhed",
    ],
    sacraments: "To hovedsakramenter: dåb og nadver (anerkender også fem 'kirkelige handlinger')",
  },
  {
    slug: "reformerte-kirker",
    name: "Reformerte kirker",
    category: "Protestantisk",
    subtitle: "Calvinister og presbyterianere med vægt på Guds suverænitet",
    icon: "BookOpen",
    founded: "1500-tallet",
    founder: "Jean Calvin (1509-1564) og Huldrych Zwingli",
    members: "Ca. 75 millioner medlemmer",
    description:
      "De reformerte kirker udsprang af reformationen i Schweiz i 1500-tallet, særligt under Jean Calvin i Genève og Huldrych Zwingli i Zürich. Tradition har spredt sig til Holland, Skotland (presbyterianerne under John Knox), Sydafrika, USA og Korea. Reformert teologi understreger Guds suverænitet, prædestinationslæren og Bibelens enestående autoritet. Gudstjenesten er enkel og ordcentreret med fokus på prædikenen, mens billeder og udsmykning typisk fjernes fra kirkerummet. Mange reformerte kirker styres presbyterianisk — det vil sige af et råd af ældste fremfor af biskopper. Den reformerte arv har haft stor indflydelse på vestlig politisk tænkning, demokrati og arbejdsetik.",
    beliefs: [
      "Guds absolutte suverænitet over alt",
      "Prædestination — Gud har udvalgt sine til frelse",
      "Bibelen som den eneste autoritet (sola scriptura)",
      "Enkel, ordcentreret gudstjeneste uden billeder",
      "Presbyteriansk styre med ældste og synoder",
    ],
    sacraments: "Dåb og nadver (forstået som symbolske/åndelige tegn)",
  },
  {
    slug: "baptistkirken",
    name: "Baptistkirken",
    category: "Evangelikale kirker",
    subtitle: "Voksendåb og personlig trosbeslutning i centrum",
    icon: "Droplets",
    founded: "Tidlig 1600-tal",
    founder: "John Smyth og Thomas Helwys (engelske separatister)",
    members: "Ca. 100 millioner medlemmer",
    description:
      "Baptistkirken opstod i begyndelsen af 1600-tallet blandt engelske separatister, der mente, at dåben kun burde gives til voksne, der personligt bekender troen. Bevægelsen voksede sig stor, særligt i USA, hvor baptister i dag er en af de største protestantiske grupper. Kendetegnende er troendedåben ved fuld neddykning, der symboliserer død og opstandelse med Kristus. Hver menighed er selvstyrende (kongregationalisme), og baptister har historisk været stærke fortalere for religionsfrihed og adskillelse af kirke og stat. Gudstjenesterne er typisk enkle med fokus på prædiken, sang og bøn. Baptistsamfund spænder bredt — fra konservative sydstatsbaptister til mere liberale europæiske retninger.",
    beliefs: [
      "Kun voksne troende skal døbes (troendedåb)",
      "Dåb sker ved fuld neddykning",
      "Hver lokal menighed er selvstændig",
      "Adskillelse af kirke og stat",
      "Bibelen som eneste autoritet for tro og liv",
    ],
    sacraments: "To 'forordninger': dåb og nadver (forstået som symbolske handlinger)",
  },
  {
    slug: "metodistkirken",
    name: "Metodistkirken",
    category: "Evangelikale kirker",
    subtitle: "Hellighed, social retfærdighed og hjertets fromhed",
    icon: "Heart",
    founded: "1700-tallet",
    founder: "John Wesley (1703-1791) og hans bror Charles Wesley",
    members: "Ca. 80 millioner medlemmer",
    description:
      "Metodistkirken opstod i 1700-tallet i England som en bevægelse inden for Den Anglikanske Kirke, ledet af præsten John Wesley og hans bror Charles. Navnet 'metodist' refererer til deres metodiske tilgang til bøn, bibellæsning og kristen praksis. Wesley lagde stor vægt på personlig omvendelse, helliggørelse og det sociale ansvar — bevægelsen var tidligt i front i kampen mod slaveriet og for arbejderes rettigheder. Efter brud med Anglikanerne blev metodisterne en selvstændig kirke, særligt udbredt i USA og Storbritannien. Kirken kombinerer en varm, hjertelig fromhed (\"hjertet, der varmes\") med organiseret diakoni, salmesang (mange af Charles Wesleys salmer bruges stadig) og bispestyre.",
    beliefs: [
      "Personlig omvendelse og frelsesvished",
      "Helliggørelse — vækst i kristen kærlighed",
      "Frelse er tilbudt alle (afvisning af streng prædestination)",
      "Stærkt socialt engagement og diakoni",
      "Bibel, tradition, fornuft og erfaring som troens fire kilder",
    ],
    sacraments: "Dåb (også af børn) og nadver",
  },
  {
    slug: "pinsekirken",
    name: "Pinsekirken",
    category: "Evangelikale kirker",
    subtitle: "Helligåndens gaver, lovsang og nært fællesskab",
    icon: "Flame",
    founded: "1900-tallets begyndelse (Azusa Street-vækkelsen 1906)",
    founder: "Charles Parham og William J. Seymour i USA",
    members: "Ca. 280 millioner medlemmer (verdens hurtigst voksende kristne bevægelse)",
    description:
      "Pinsekirken opstod i begyndelsen af 1900-tallet, særligt med Azusa Street-bevægelsen i Los Angeles i 1906 under William J. Seymours ledelse. Bevægelsen henter navn fra pinsedagen i Apostlenes Gerninger 2, hvor Helligånden faldt på de første kristne. Kerneoverbevisningen er, at Helligåndens gaver — tungetale, helbredelse, profeti — fortsat er aktive i dag. Gudstjenesterne er præget af moderne lovsang, spontan bøn og forkyndelse, der opfordrer til personlig omvendelse. Pinsekirken er den hurtigst voksende kristne retning globalt, særligt i Latinamerika, Afrika og Asien. I Danmark findes Apostolsk Kirke, Pinsekirken og en række karismatiske frikirker, der trækker på samme arv.",
    beliefs: [
      "Åndsdåb med tungetale som tegn",
      "Helligåndens gaver er aktive i dag (helbredelse, profeti)",
      "Personlig omvendelse og troendedåb",
      "Bibelen som inspireret og ufejlbarlig",
      "Forventning om Jesu snarlige genkomst",
    ],
    sacraments: "Troendedåb og nadver (forstået som symbolske)",
  },
  {
    slug: "adventistkirken",
    name: "Adventistkirken",
    category: "Evangelikale kirker",
    subtitle: "Lørdagshvile og forventning om Jesu genkomst",
    icon: "Sunrise",
    founded: "1863 (officielt grundlagt)",
    founder: "Ellen G. White, Joseph Bates og James White",
    members: "Ca. 23,7 millioner medlemmer",
    description:
      "Syvende Dags Adventistkirken voksede frem i USA i midten af 1800-tallet ud af den såkaldte Miller-bevægelse, der forventede Jesu genkomst i 1844. Da denne forventning ikke blev indfriet, omformulerede en gruppe under inspiration fra Ellen G. White troen, og kirken blev officielt grundlagt i 1863. Adventisterne er kendt for at fejre sabbatten på lørdage (i stedet for søndage), for deres stærke fokus på Jesu snarlige genkomst og for en udpræget sundhedsbevidsthed — mange er vegetarer eller veganere. Kirken driver et omfattende globalt netværk af skoler, universiteter og hospitaler. Trosgrundlaget er bibelsk-protestantisk, men med særlige læresætninger om sabbatten og endetiden.",
    beliefs: [
      "Lørdagen (sabbatten) holdes hellig som hviledag",
      "Forventning om Jesu snarlige, synlige genkomst",
      "Hele Bibelen som troens grundlag",
      "Sundhedslære og vegetarisk kost anbefales",
      "Sjælen sover i døden indtil opstandelsen",
    ],
    sacraments: "Troendedåb ved neddykning og nadver (med fodvask som forberedelse)",
  },
  {
    slug: "hillsong",
    name: "Hillsong",
    category: "Kirkelige bevægelser",
    subtitle: "Globalt kirkenetværk kendt for moderne lovsang",
    icon: "Music",
    founded: "1983",
    founder: "Brian og Bobbie Houston i Sydney, Australien",
    members: "Anslået 150.000+ ugentlige deltagere på tværs af lokale kirker globalt",
    affiliation:
      "Kirkenetværk i den pinse-/karismatiske tradition. Historisk en del af Australian Christian Churches (Assemblies of God) — ikke et selvstændigt kirkesamfund.",
    spread: "Australien, USA, Storbritannien, Europa, Latinamerika, Afrika og Asien",
    description:
      "Hillsong er et globalt kirkenetværk grundlagt i 1983 af Brian og Bobbie Houston i Sydney, Australien. Bevægelsen står i den pinse-/karismatiske tradition og har historisk været tilknyttet Australian Christian Churches (Assemblies of God). Hillsong er især kendt for sin lovsangsmusik gennem grupperne Hillsong United og Hillsong Worship, hvis sange synges i kirker over hele verden. Gudstjenesterne er præget af moderne æstetik med band, lys og enkel forkyndelse, der særligt tiltaler unge voksne. Teologisk vægtes voksendåb og Helligåndens gaver. Netværket har i de senere år været ramt af flere skandaler, blandt andet om grundlæggeren Brian Houston, der trådte tilbage i 2022. Hillsong er ikke et selvstændigt kirkesamfund, men et netværk af lokale kirker.",
    beliefs: [
      "Klassisk pinse-/karismatisk teologi med betoning af Helligåndens gaver",
      "Troende voksendåb ved neddykning",
      "Personlig omvendelse og tro på Bibelen som Guds ord",
      "Forventning om Jesu genkomst",
      "Stærk vægt på lovsang som central del af gudstjenesten",
    ],
    sacraments: "Voksendåb og nadver (forstået som symbolske handlinger)",
  },
  {
    slug: "indre-mission",
    name: "Indre Mission",
    category: "Kirkelige bevægelser",
    subtitle: "Vækkelsesbevægelse inden for Folkekirken",
    icon: "Bookmark",
    founded: "1853 (fra 1861 ledet af Vilhelm Beck)",
    founder: "Stiftet af danske lægfolk; ledet fra 1861 af præsten Vilhelm Beck",
    members: "Ca. 10.000-15.000 aktive deltagere i Danmark",
    affiliation:
      "Bevægelse inden for Folkekirken — ikke en selvstændig kirke. Står i den evangelisk-lutherske tradition.",
    spread: "Hele Danmark; stærkest forankret i Vest- og Nordjylland",
    description:
      "Indre Mission (IM) er en dansk vækkelsesbevægelse stiftet i 1853 og fra 1861 ledet af præsten Vilhelm Beck. Bevægelsen er ikke en selvstændig kirke, men en bevægelse inden for Folkekirken, der bygger på klassisk evangelisk-luthersk teologi med en stærk betoning af personlig omvendelse, bibeltroskab og helliggørelse i hverdagen. Historisk var Indre Mission kendt for en streng livsstilsetik med vægt på afholdenhed og søndagshelligholdelse. I dag fremstår bevægelsen mere moderat, men fastholder en konservativ linje på blandt andet samlivsspørgsmål og bibelsyn. Indre Mission driver et omfattende netværk af missionshuse, bibelskoler samt børne- og ungdomsarbejde over hele landet og står stærkest i Vest- og Nordjylland.",
    beliefs: [
      "Klassisk evangelisk-luthersk teologi",
      "Personlig omvendelse og levende tro på Jesus",
      "Bibelen som Guds ord og højeste autoritet",
      "Helliggørelse og kristen livsstil i hverdagen",
      "Mission og forkyndelse som kerneopgave",
    ],
    sacraments:
      "Praksis: Bibelundervisning, andagter og fællesskab i missionshuse. Dåb og nadver finder sted i Folkekirkens regi.",
  },
  {
    slug: "luthersk-mission",
    name: "Luthersk Mission",
    category: "Kirkelige bevægelser",
    subtitle: "Lavkirkelig vækkelsesbevægelse med klassisk luthersk profil",
    icon: "Compass",
    founded: "1868",
    founder: "Christian Møller; udbrydergruppe fra Indre Mission",
    members: "Ca. 6.000-8.000 aktive deltagere i Danmark",
    affiliation:
      "Bevægelse inden for Folkekirken — ikke en selvstændig kirke. Står i den evangelisk-lutherske tradition, men med en markant lavkirkelig profil.",
    spread:
      "Hele Danmark; stærkest forankret i Vest- og Sønderjylland. Driver desuden ydre mission, særligt i Østafrika.",
    description:
      "Luthersk Mission (LM) er en dansk vækkelsesbevægelse stiftet i 1868 af Christian Møller som en udbrydergruppe fra Indre Mission. Bevægelsen står inden for Folkekirken, men har en mere markant lavkirkelig profil end Indre Mission, og flere LM'ere holder egne nadvergudstjenester ved siden af folkekirkens. Teologien er klassisk luthersk med en stærk vægt på Bibelens autoritet, syndserkendelse og frelse alene af nåde, og bevægelsen er generelt teologisk konservativ. Luthersk Mission driver missionshuse, efterskoler, en højskole (LMH) samt et omfattende ydre missionsarbejde, særligt i Østafrika. Bevægelsen står stærkest i Vest- og Sønderjylland. Som bevægelse er LM ikke et selvstændigt kirkesamfund, men virker inden for den evangelisk-lutherske tradition.",
    beliefs: [
      "Bibelens autoritet som Guds ord",
      "Frelse alene af nåde gennem tro på Jesus",
      "Syndserkendelse og personlig omvendelse",
      "Klassisk luthersk lære om retfærdiggørelse",
      "Forkyndelse, mission og kristen helliggørelse",
    ],
    sacraments:
      "Praksis: Forkyndelse, bibelundervisning og fællesskab i missionshuse. Mange LM'ere holder egne nadvergudstjenester ved siden af folkekirkelige handlinger; dåb sker typisk i Folkekirken.",
  },
];

export const categoryTags: Category[] = [
  "Protestantisk",
  "Katolsk/Ortodoks",
  "Evangelikale kirker",
  "Kirkelige bevægelser",
];