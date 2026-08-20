/**
 * Full EN + NL string dictionary for the marketing site.
 *
 * Brand terms stay literal in Dutch (Journey, Essence, My Essence,
 * Companion, Gidsly) -- confirmed against the app's own nl/common.json,
 * which keeps "Your Personal Career Companion" entirely in English.
 * The Home page's hero tagline ("The career companion you wish you'd
 * had") follows the same precedent and stays English in both locales;
 * everything else is translated.
 *
 * Pipeline stage labels in the mockups (Researching, Interviewing,
 * Offer Received, ...) also stay English in both locales -- the app
 * itself never translates these (checked nl/calendar.json: "Screening"
 * stays "Screening" even in the Dutch locale).
 *
 * Privacy / Terms / Subprocessors are NOT in here -- their source is
 * Markdown in the separate gidsly-content repo (English only), fetched
 * at build time by LegalLayout.astro. No Dutch version exists yet.
 */

export type Locale = 'en' | 'nl';

export const copy = {
  en: {
    nav: {
      howItWorks: 'How it works',
      pricing: 'Pricing',
      about: 'About',
      login: 'Log in',
      signup: 'Sign up',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      status: 'Status',
      subprocessors: 'Subprocessors',
      note: 'Being built in the Netherlands · EU-first by design.',
    },
    contact: {
      title: 'Get in touch.',
      body: "Questions, feedback, or want to partner with us? Drop us a line and we'll come back to you personally.",
      honeypotLabel: "Don't fill this out if you're human:",
      nameLabel: 'Name',
      nameOptional: '(optional)',
      namePlaceholder: 'Jane Smith',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: "Tell us what's on your mind…",
      submit: 'Send message',
      sending: 'Sending…',
      successTitle: "Thanks, we've got it.",
      successBody: "We'll reply to you personally, usually within a day or two.",
    },
    closeCta: {
      sub: "Free to start. Premium at €9.95 per month or €99.50 per year when you're ready for more.",
      cta: 'Create your account',
      note: 'No credit card required. Cancel anytime.',
    },
    home: {
      title: "Gidsly: the career companion you wish you'd had.",
      description: 'Gidsly is the career companion that gets better at helping you every time, because what it learns about you persists.',
      heroSubExtra: "Honest coaching for the moments that aren't on a spreadsheet.",
      ctaPrimary: 'Start free',
      ctaSecondary: 'See pricing →',
      mockup: {
        heading: 'Journeys',
        active: '3 active',
      },
      featuresEyebrow: 'What Gidsly does',
      featuresTitle: 'Built for the whole Journey.',
      features: [
        { title: "A pipeline that doesn't forget.", desc: 'Every Journey, conversation, and next step in one view. Every stage change is an event you can look back on, not just a number on a dashboard.' },
        { title: 'Documents that land.', desc: 'CVs, cover letters, and pitches, tailored for every role you pursue. Gidsly reads the job description and draws on your real experience, always in your voice.' },
        { title: 'A companion for the harder days.', desc: "Interview rehearsal when you're nervous, reflection when you're stuck, and a voice to lean on when the rejection comes, because it will, and that's normal." },
        { title: 'A network that remembers.', desc: 'Contacts and stakeholders linked to the roles they actually touch. Recruiters, hiring managers, warm intros, all surfaced when the right moment comes.' },
      ],
      whyEyebrow: 'Why Gidsly exists',
      whyText: "A career decision isn't just a process. It's one of the most human things you'll ever do.",
      whyStrong: 'We built Gidsly with that in mind.',
      closeTitle: 'Ready to try Gidsly?',
    },
    pricing: {
      title: 'Pricing: Gidsly',
      description: 'Basic is free: up to 2 active Journeys and light Companion access. Premium is €9.95 a month or €99.50 a year for unlimited Journeys and the full Companion.',
      heroTitle: 'Simple pricing, no surprises.',
      heroSub: 'Start free. Upgrade whenever the 2-Journey cap starts to feel like a wall, not before.',
      basic: {
        name: 'Basic',
        note: "The free starter tier. Access to Gidsly's core functionality.",
        features: ['Up to 2 active Journeys', 'Light Companion access', 'Up to 10 saved documents'],
        cta: 'Start free',
      },
      premium: {
        name: 'Premium',
        note: '€99.50 / year, about 2 months free',
        badge: 'Full access',
        features: ['Unlimited active Journeys', 'Full Companion with deep actions', 'Unlimited documents', 'Calendar and email integration'],
        cta: 'Start Premium',
      },
      faqEyebrow: 'Questions',
      faqTitle: 'Before you decide.',
      faqs: [
        { q: 'Can I cancel anytime?', a: "Yes. Cancel whenever you like and you'll keep Premium until the end of your current billing period. No cancellation fee, no retention maze." },
        { q: "What happens if I'm already past 2 active Journeys on Basic?", a: "You'll still see every Journey you have. Basic just pauses the extras beyond 2 active ones until you either free up a slot or upgrade to Premium." },
        { q: 'How much do I save paying yearly?', a: 'The annual plan is €99.50 a year, which works out to about 2 months free compared to paying €9.95 every month.' },
        { q: 'Is there a free trial on Premium?', a: 'Basic itself is free and has no time limit, so you can try Gidsly for as long as you like before deciding whether Premium is worth it for you.' },
        { q: 'What happens to my data?', a: "Your Essence, what Gidsly learns about you over time, is never sold and never shared with anyone. It's yours whether you're on Basic or Premium." },
        { q: 'Can I switch between plans later?', a: 'Yes, upgrade or downgrade from Account Settings whenever your situation changes. Downgrading from Premium keeps your data intact.' },
      ],
    },
    howItWorks: {
      title: 'How Gidsly works: Journeys, Companion, and My Essence',
      description: 'Track every application as a Journey, lean on the Companion for the harder days, and let My Essence, what Gidsly knows about you, get sharper every time you use it.',
      heroTitle: 'One loop, the whole way through.',
      heroSub: "Gidsly isn't a stack of separate tools. It's one loop: track the moment, lean on the Companion when it gets hard, and let what Gidsly knows about you get sharper every time.",
      step1: {
        title: 'Every application, tracked as a Journey.',
        body: "Gidsly calls a career moment a Journey and tracks it end to end: stage, status history, and the follow-up that's about to go cold. Today that's your job applications. Nothing lives in a spreadsheet you forget to open.",
        mockupTitle: 'Head of Design · Orbit Studios',
        mockupSub: 'Status history',
        now: 'Now',
        upcoming: 'Interview #2 scheduled',
      },
      step2: {
        title: 'A companion for the parts no dashboard covers.',
        body: "Interview rehearsal when you're nervous. Reflection when you're stuck. A voice to lean on when the rejection comes, because it will, and that's normal. The Companion is the long-running conversation, not a one-off chatbot.",
        youLabel: 'You · Wednesday 14:32',
        userMsg: 'Got a rejection from Orbit. Feels bad.',
        gidslyLabel: 'Gidsly · just now',
        gidslyMsg: "That's hard, especially after reaching the final round. Want to talk through what happened, or would a two-minute reset help first? Either is a good choice.",
        voiceAvailable: 'Voice reply available',
      },
      step3: {
        title: 'My Essence gets sharper every time.',
        body: "What you've done and what you actually want, kept in one place that outlives any single Journey. Every document Gidsly tailors, every question the Companion asks, feeds back into My Essence, so the next conversation starts smarter than the last.",
        mockupName: 'Sanne de Vries',
        mockupRole: 'Product leader · Amsterdam',
        skillsLabel: 'Skills',
        skills: ['Product strategy', '0→1', 'B2B SaaS'],
        mattersLabel: 'What matters',
        mattersText: 'Ownership, a small team that ships, and a mission worth the hours.',
      },
      closeTitle: 'See it for yourself.',
    },
    about: {
      title: 'About Gidsly',
      description: "Gidsly is built by one person who got tired of watching career decisions get made off a spreadsheet and a gut feeling. Here's why.",
      heading: 'Why Gidsly exists.',
      paragraphs: [
        "Gidsly exists because I kept watching people, myself included, make some of the biggest decisions of their working life off a spreadsheet, a gut feeling, and whatever advice happened to be in front of them. Yes, you talk to friends and family to collect advice or spar about an upcoming change or opportunity, but in the end it all comes down to you and you alone. And that is tough. A career decision is not just a process to get through. It's one of the most human things you'll do, and it deserves better tools and support.",
        "There are great tools out there, but they're either very expensive or only available if you actually have a job and your employer sponsors it. And there are a lot of tools that don't really feel like they're focused on me and what's best for me and my career. Gidsly is built to fix this.",
        "By interacting with Gidsly like a true companion, it will deeply understand who you are and remember what you've done, understand what you actually want, and what you don't. It isn't only about your CV but more so about who you are as a human. What makes you tick or what switches you off. Gidsly helps you to understand this and be honest about it. Gidsly is there, including on the days that are harder. It's not a job board, not a recruiter, not a persona. Gidsly is a companion that sticks with you throughout the whole Journey, built in the Netherlands for all of us and getting better by the day.",
      ],
      signoff: 'Willem, founder',
      closeTitle: 'Come try it.',
    },
  },

  nl: {
    nav: {
      howItWorks: 'Hoe het werkt',
      pricing: 'Prijzen',
      about: 'Over ons',
      login: 'Inloggen',
      signup: 'Aanmelden',
    },
    footer: {
      privacy: 'Privacy',
      terms: 'Voorwaarden',
      status: 'Status',
      subprocessors: 'Subverwerkers',
      note: 'Wordt gebouwd in Nederland · EU-first vanaf het begin.',
    },
    contact: {
      title: 'Neem contact op.',
      body: 'Vragen, feedback, of wil je samenwerken? Stuur ons een bericht en we reageren persoonlijk terug.',
      honeypotLabel: 'Vul dit niet in als je een mens bent:',
      nameLabel: 'Naam',
      nameOptional: '(optioneel)',
      namePlaceholder: 'Anne Jansen',
      emailLabel: 'E-mail',
      emailPlaceholder: 'jij@voorbeeld.nl',
      messageLabel: 'Bericht',
      messagePlaceholder: 'Vertel ons waar je aan denkt…',
      submit: 'Verstuur bericht',
      sending: 'Versturen…',
      successTitle: 'Bedankt, we hebben het ontvangen.',
      successBody: 'We reageren persoonlijk terug, meestal binnen een dag of twee.',
    },
    closeCta: {
      sub: 'Gratis om te starten. Premium voor €9,95 per maand of €99,50 per jaar wanneer je klaar bent voor meer.',
      cta: 'Maak je account aan',
      note: 'Geen creditcard nodig. Altijd op te zeggen.',
    },
    home: {
      title: "Gidsly: the career companion you wish you'd had.",
      description: 'Gidsly is de career companion die je elke keer beter kan helpen, omdat wat het over je leert blijft bestaan.',
      heroSubExtra: 'Eerlijke coaching voor de momenten die niet in een spreadsheet passen.',
      ctaPrimary: 'Start gratis',
      ctaSecondary: 'Bekijk prijzen →',
      mockup: {
        heading: 'Journeys',
        active: '3 actief',
      },
      featuresEyebrow: 'Wat Gidsly doet',
      featuresTitle: 'Gebouwd voor de hele Journey.',
      features: [
        { title: 'Een pipeline die niets vergeet.', desc: 'Elke Journey, elk gesprek en elke volgende stap in één overzicht. Elke statuswijziging is een moment waar je op kunt terugkijken, niet zomaar een getal op een dashboard.' },
        { title: 'Documenten die raak zijn.', desc: "cv's, motivatiebrieven en pitches, toegespitst op elke rol die je nastreeft. Gidsly leest de vacaturetekst en put uit je echte ervaring, altijd in jouw stem." },
        { title: 'Een companion voor de moeilijkere dagen.', desc: 'Oefen je sollicitatiegesprek als je zenuwachtig bent, reflecteer als je vastzit, en leun op een stem wanneer de afwijzing komt, want die komt er, en dat is normaal.' },
        { title: 'Een netwerk dat onthoudt.', desc: 'Contacten en stakeholders gekoppeld aan de rollen waar ze daadwerkelijk bij betrokken zijn. Recruiters, hiring managers, warme introducties, allemaal naar boven gehaald op het juiste moment.' },
      ],
      whyEyebrow: 'Waarom Gidsly bestaat',
      whyText: 'Een carrièrebeslissing is niet zomaar een proces. Het is een van de meest menselijke dingen die je ooit zult doen.',
      whyStrong: 'Met dat besef hebben we Gidsly gebouwd.',
      closeTitle: 'Klaar om Gidsly te proberen?',
    },
    pricing: {
      title: 'Prijzen: Gidsly',
      description: 'Basic is gratis: tot 2 actieve Journeys en beperkte toegang tot de Companion. Premium is €9,95 per maand of €99,50 per jaar voor onbeperkte Journeys en de volledige Companion.',
      heroTitle: 'Eenvoudige prijzen, geen verrassingen.',
      heroSub: 'Start gratis. Upgrade zodra de grens van 2 Journeys als een muur begint te voelen, niet eerder.',
      basic: {
        name: 'Basic',
        note: 'De gratis startlaag. Toegang tot de kernfunctionaliteit van Gidsly.',
        features: ['Tot 2 actieve Journeys', 'Beperkte toegang tot de Companion', 'Tot 10 opgeslagen documenten'],
        cta: 'Start gratis',
      },
      premium: {
        name: 'Premium',
        note: '€99,50 / jaar, ongeveer 2 maanden gratis',
        badge: 'Volledige toegang',
        features: ['Onbeperkt actieve Journeys', 'Volledige Companion met deep actions', 'Onbeperkt documenten', 'Agenda- en e-mailintegratie'],
        cta: 'Start Premium',
      },
      faqEyebrow: 'Vragen',
      faqTitle: 'Voordat je beslist.',
      faqs: [
        { q: 'Kan ik op elk moment opzeggen?', a: 'Ja. Zeg op wanneer je wilt en je behoudt Premium tot het einde van je huidige factureringsperiode. Geen opzegkosten, geen ingewikkeld opzegproces.' },
        { q: 'Wat gebeurt er als ik al meer dan 2 actieve Journeys heb op Basic?', a: 'Je blijft elke Journey zien die je hebt. Basic pauzeert alleen de extra Journeys boven de 2 actieve, totdat je een plek vrijmaakt of upgradet naar Premium.' },
        { q: 'Hoeveel bespaar ik als ik jaarlijks betaal?', a: 'Het jaarabonnement kost €99,50 per jaar, wat neerkomt op ongeveer 2 maanden gratis vergeleken met elke maand €9,95 betalen.' },
        { q: 'Is er een gratis proefperiode voor Premium?', a: 'Basic zelf is gratis en heeft geen tijdslimiet, dus je kunt Gidsly zo lang proberen als je wilt voordat je beslist of Premium de moeite waard is voor jou.' },
        { q: 'Wat gebeurt er met mijn gegevens?', a: 'Jouw Essence, wat Gidsly na verloop van tijd over je leert, wordt nooit verkocht en nooit met iemand gedeeld. Het is van jou, of je nu Basic of Premium gebruikt.' },
        { q: 'Kan ik later wisselen tussen abonnementen?', a: 'Ja, upgrade of downgrade via je Accountinstellingen zodra je situatie verandert. Downgraden vanaf Premium laat je gegevens intact.' },
      ],
    },
    howItWorks: {
      title: 'Hoe Gidsly werkt: Journeys, Companion en My Essence',
      description: 'Volg elke sollicitatie als een Journey, leun op de Companion op de moeilijkere dagen, en laat My Essence, wat Gidsly over je weet, elke keer scherper worden.',
      heroTitle: 'Eén cyclus, van begin tot eind.',
      heroSub: 'Gidsly is geen stapel losse tools. Het is één cyclus: volg het moment, leun op de Companion als het moeilijk wordt, en laat wat Gidsly over je weet elke keer scherper worden.',
      step1: {
        title: 'Elke sollicitatie, bijgehouden als een Journey.',
        body: 'Gidsly noemt een carrièremoment een Journey en volgt het van begin tot eind: fase, statusgeschiedenis, en de opvolging die dreigt af te koelen. Vandaag zijn dat je sollicitaties. Niets leeft in een spreadsheet die je vergeet te openen.',
        mockupTitle: 'Head of Design · Orbit Studios',
        mockupSub: 'Statusgeschiedenis',
        now: 'Nu',
        upcoming: 'Gesprek #2 gepland',
      },
      step2: {
        title: 'Een companion voor de dingen die geen dashboard dekt.',
        body: 'Oefen je sollicitatiegesprek als je zenuwachtig bent. Reflecteer als je vastzit. Een stem om op te leunen wanneer de afwijzing komt, want die komt er, en dat is normaal. De Companion is het doorlopende gesprek, geen eenmalige chatbot.',
        youLabel: 'Jij · woensdag 14:32',
        userMsg: 'Afwijzing gekregen van Orbit. Voelt niet goed.',
        gidslyLabel: 'Gidsly · zojuist',
        gidslyMsg: 'Dat is lastig, zeker na het halen van de laatste ronde. Wil je bespreken wat er is gebeurd, of helpt een reset van twee minuten eerst? Beide zijn een goede keuze.',
        voiceAvailable: 'Spraakantwoord beschikbaar',
      },
      step3: {
        title: 'My Essence wordt elke keer scherper.',
        body: 'Wat je hebt gedaan en wat je echt wilt, bewaard op één plek die verder gaat dan één enkele Journey. Elk document dat Gidsly aanpast, elke vraag die de Companion stelt, voedt terug in My Essence, zodat het volgende gesprek slimmer begint dan het vorige.',
        mockupName: 'Sanne de Vries',
        mockupRole: 'Product leader · Amsterdam',
        skillsLabel: 'Vaardigheden',
        skills: ['Productstrategie', '0→1', 'B2B SaaS'],
        mattersLabel: 'Wat telt',
        mattersText: 'Eigenaarschap, een klein team dat levert, en een missie die de uren waard is.',
      },
      closeTitle: 'Zie het zelf.',
    },
    about: {
      title: 'Over Gidsly',
      description: 'Gidsly is gebouwd door één persoon die het beu was om carrièrebeslissingen te zien nemen op basis van een spreadsheet en een onderbuikgevoel. Dit is waarom.',
      heading: 'Waarom Gidsly bestaat.',
      paragraphs: [
        'Gidsly bestaat omdat ik steeds weer zag hoe mensen, mezelf inbegrepen, enkele van de grootste beslissingen van hun werkende leven namen op basis van een spreadsheet, een onderbuikgevoel, en welk advies er toevallig voorhanden was. Ja, je praat met vrienden en familie om advies te verzamelen of te sparren over een aankomende verandering of kans, maar uiteindelijk komt het allemaal neer op jou, en jou alleen. En dat is zwaar. Een carrièrebeslissing is niet zomaar een proces om doorheen te komen. Het is een van de meest menselijke dingen die je zult doen, en het verdient betere tools en ondersteuning.',
        'Er zijn geweldige tools, maar die zijn óf erg duur, óf alleen beschikbaar als je al een baan hebt en je werkgever ervoor betaalt. En er zijn veel tools die niet echt aanvoelen alsof ze gericht zijn op mij en wat het beste is voor mij en mijn carrière. Gidsly is gebouwd om dit op te lossen.',
        'Door met Gidsly om te gaan als een echte companion, zal het diepgaand begrijpen wie je bent, onthouden wat je hebt gedaan, begrijpen wat je echt wilt, en wat niet. Het gaat niet alleen om je cv, maar veel meer om wie je bent als mens. Wat je drijft en wat je juist afremt. Gidsly helpt je dit te begrijpen en er eerlijk over te zijn. Gidsly is er, ook op de dagen die zwaarder zijn. Het is geen vacaturebank, geen recruiter, geen persona. Gidsly is een companion die met je meegaat door de hele Journey, gebouwd in Nederland voor ons allemaal, en wordt elke dag beter.',
      ],
      signoff: 'Willem, oprichter',
      closeTitle: 'Kom het proberen.',
    },
  },
} as const;

export type Copy = typeof copy['en'];
