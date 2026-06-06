import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  Droplets,
  Building2,
  Download,
  ArrowRight,
  Phone,
  Mail,
  Check,
  Zap,
  MapPin,
  Wrench,
  Clock,
} from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import footerLogo from "@/assets/LogoReform-footer.svg";
import heroVan from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-39-978.jpg";
import exteriorRear from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-43-874.jpg";
import workTable from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-44-565.jpg";
import powerPanel from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-45-210.jpg";
import labCabinets from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-46-618.jpg";
import rearCompartment from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-48-123.jpg";
import cabinPartition from "@/assets/OriginalImages/zobrazhennya_viber_2021-09-17_10-19-50-049.jpg";

const SEO_TITLE = "Електролабораторія на базі Nissan e-NV200 — REFORM";
const SEO_DESCRIPTION =
  "Мобільна електролабораторія на базі Nissan e-NV200 з нульовим рівнем викидів. Виїзний відбір проб повітря, води та ґрунту. Готове рішення під ключ від REFORM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "uk_UA" },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:image", content: heroVan },
      { property: "og:image:alt", content: "Електролабораторія Nissan e-NV200" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESCRIPTION },
      { name: "twitter:image", content: heroVan },
    ],
  }),
  component: Page,
});

const NAV = [
  { label: "Головна", href: "/" },
  { label: "Каталог", href: "#gallery" },
  { label: "Рішення для бізнесу", href: "#specs" },
  { label: "Оснащення", href: "#equipment" },
  { label: "Про рішення", href: "#about" },
  { label: "Контакти", href: "#cta" },
];

const STATS = [
  { label: "Запас ходу", value: "200", unit: "км" },
  { label: "Навантаження", value: "770", unit: "кг" },
  { label: "Розетки 220В", value: "4", unit: "шт." },
  { label: "Розетки 12В", value: "2", unit: "шт." },
];

const SCENARIOS = [
  {
    icon: Leaf,
    title: "Екологічний моніторинг",
    text: "Постійне спостереження за станом навколишнього середовища в промислових і рекреаційних зонах без шуму і викидів.",
  },
  {
    icon: Droplets,
    title: "Відбір проб",
    text: "Спеціалізоване обладнання для забору повітря, води та ґрунту з дотриманням стерильності та умов зберігання.",
  },
  {
    icon: Building2,
    title: "Державні випробування",
    text: "Сертифіковані виїзні дослідження для держустанов, інспекцій та акредитованих приватних лабораторій.",
  },
];

const EQUIPMENT = [
  { icon: Leaf, label: "Відбір проб забрудненості повітря, води та землі" },
  { icon: Zap, label: "Підключення 220В від зовнішньої мережі або перетворювача 12/220" },
  { icon: Wrench, label: "Меблі та шухляди з нержавіючої сталі" },
  { icon: Droplets, label: "Висувний рукомийник зовні автомобіля" },
  { icon: Building2, label: "Антивібраційний стіл для аналітичних ваг" },
  { icon: MapPin, label: "Контур заземлення автомобіля" },
];

const SPECS: Array<{ group: string; rows: Array<[string, string]> }> = [
  {
    group: "Функціонал",
    rows: [
      ["База", "Електролабораторія на базі Nissan"],
      [
        "Призначення",
        "Устаткування для зняття проб забрудненості повітря, води та землі.",
      ],
      [
        "Перевага електромобіля",
        "Відсутній двигун внутрішнього згоряння, тому немає вихлопних газів, які забруднюють середовище та заважають тестуванню.",
      ],
    ],
  },
  {
    group: "Технічні характеристики",
    rows: [
      ["1. Тип кузова", "Автолабораторія"],
      [
        "2. Тумба",
        "Нержавіюча сталь, відкидні бокові дверцята для електроаспіраторів ЕАЗ-20 та ASA, установки пневматичної ЕА 154/10МТ, газоаналізаторів Delta 2000 CD-IV та Testo 350. Розмір 1200х600х700. Відкидна дверка з жорсткою фіксацією може використовуватись як стіл.",
      ],
      ["3. Шухляди", "2 шт. з нержавіючої сталі, 600х600х200 мм"],
      ["4. Верхні тумби", "2 шт. з нержавіючої сталі, 600х600х200 мм"],
      ["5. Антивібраційний стіл", "Для аналітичних ваг, 400х300х400 мм"],
      [
        "6. Ящик для ваг",
        "Нержавіюча сталь для аналітичних ваг Radwag AS 220.R2, 400х350х400 мм",
      ],
      ["7. Верхня підвісна тумба", "Нержавіюча сталь, 400х400х400 мм"],
      ["8. Місце у підлозі", "Для напірних труб довжиною до 2000 мм"],
      [
        "9. Внутрішнє оздоблення",
        "Перегородка пластик, підлога фанера покрита автоліном або еквівалентом, алюмінієвий профіль.",
      ],
      [
        "10. Освітлення та живлення",
        "LED світильники внутрішні та зовнішні, розетки 220В - 4 шт., розетки 12В - 2 шт.",
      ],
      [
        "11. Силовий ввід",
        "Підключення від зовнішньої мережі 220В та від перетворювача 12/220.",
      ],
      ["12. Рукомийник", "Висувний механізм зовні автомобіля"],
      ["13. Безпека", "Контур заземлення автомобіля"],
      [
        "14. Комплектація",
        "Дверцята ящиків алюмінієві з доводчиком та магнітним фіксатором, ящики обшиті зсередини автоліном, паски для фіксації обладнання у ящиках.",
      ],
    ],
  },
];

const GALLERY_TABS = ["Екстер'єр", "Салон", "Робоча зона", "Обладнання"] as const;
type GalleryTab = (typeof GALLERY_TABS)[number];

const GALLERY: Record<GalleryTab, Array<{ src: string; caption: string }>> = {
  "Екстер'єр": [
    { src: heroVan, caption: "Eco Mobile Lab - передній ракурс" },
    { src: exteriorRear, caption: "Задній та боковий профіль автомобіля" },
    { src: rearCompartment, caption: "Відкритий багажний відсік лабораторії" },
  ],
  Салон: [
    { src: cabinPartition, caption: "Кабіна з перегородкою лабораторного відсіку" },
    { src: labCabinets, caption: "Внутрішні тумби та шухляди" },
    { src: powerPanel, caption: "Розетки та перетворювач живлення" },
  ],
  "Робоча зона": [
    { src: workTable, caption: "Антивібраційний стіл та нержавіючі модулі" },
    { src: rearCompartment, caption: "Відкидна робоча поверхня" },
    { src: labCabinets, caption: "Система зберігання у задній частині" },
  ],
  Обладнання: [
    { src: powerPanel, caption: "Силовий ввід, інвертор та розетки" },
    { src: workTable, caption: "Місце для аналітичних ваг" },
    { src: labCabinets, caption: "Тумби й шухляди для фіксації обладнання" },
  ],
};

const PROCESS = [
  { step: "01", title: "Брифінг", text: "Узгоджуємо задачі, маршрути та склад обладнання." },
  { step: "02", title: "ТЗ і КП", text: "Готуємо технічне завдання і комерційну пропозицію." },
  { step: "03", title: "Виробництво", text: "Переобладнання шасі та інсталяція обладнання." },
  { step: "04", title: "Передача", text: "Тест-драйв, навчання операторів і гарантійний сервіс." },
];

function Page() {
  const [tab, setTab] = useState<GalleryTab>(GALLERY_TABS[0]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Електролабораторія на базі Nissan e-NV200",
    description: SEO_DESCRIPTION,
    image: heroVan,
    brand: {
      "@type": "Brand",
      name: "REFORM",
    },
    manufacturer: {
      "@type": "Organization",
      name: "REFORM",
      url: "https://reform.ua/",
      telephone: "+380443740464",
      email: "sales@reform.ua",
    },
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Header />
      <main>
        <Breadcrumbs />
        <Hero />
        <Scenarios />
        <Description />
        <Equipment />
        <Specs />
        <Gallery tab={tab} setTab={setTab} />
        <CTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden lg:block bg-accent text-brand">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between text-[11px] font-bold">
          <div className="flex items-center gap-6">
            <a href="mailto:sales@reform.ua" className="inline-flex items-center gap-2">
              <Mail className="size-3.5" />
              sales@reform.ua
            </a>
            <a href="tel:+380443740464" className="inline-flex items-center gap-2">
              <Phone className="size-3.5" />
              +380 (44) 374-04-64
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5" />
              Пн-Пт: 8:00 - 17:00
            </span>
          </div>
          <div className="flex items-center gap-2 uppercase tracking-wider">
            <span>UK</span>
            <span className="text-brand/50">EN</span>
            <span className="text-brand/50">DE</span>
            <span className="text-brand/50">FR</span>
          </div>
        </div>
      </div>
      <div className="bg-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-3 lg:gap-8">
          <a href="/" className="shrink-0" aria-label="REFORM">
            <img src={footerLogo} alt="REFORM" className="h-8 sm:h-10 lg:h-14 w-auto" />
          </a>
          <nav className="hidden xl:flex items-center gap-7" aria-label="Основна навігація">
            {NAV.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  i === 2
                    ? "text-sm font-semibold text-accent"
                    : "text-sm font-semibold text-white/80 hover:text-accent transition-colors"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              type="button"
              aria-label="Пошук"
              className="size-9 lg:size-10 rounded-md border border-white/15 text-white/90 flex items-center justify-center hover:bg-white/10 hover:text-accent transition"
            >
              <FiSearch className="size-4 lg:size-5" />
            </button>
            <a
              href="#cta"
              className="hidden lg:inline-flex text-sm font-semibold text-brand bg-accent rounded-md px-4 py-2 hover:brightness-95 transition"
            >
              Отримати пропозицію
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Breadcrumbs() {
  return (
    <nav className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 pt-6 lg:pt-8 pb-4 overflow-x-auto" aria-label="Хлібні крихти">
      <ol className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-neutral-500 uppercase tracking-wider whitespace-nowrap">
        <li>
          <a href="/" className="hover:text-brand transition-colors">
            Головна
          </a>
        </li>
        <li className="opacity-20">/</li>
        <li>Мобільні рішення</li>
        <li className="opacity-20">/</li>
        <li className="text-brand" aria-current="page">
          Електролабораторія Nissan
        </li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-4 sm:px-6 pt-4 md:pt-0 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl md:rounded-[32px] overflow-hidden">
          <img
            src={heroVan}
            alt="Електролабораторія на базі Nissan e-NV200"
            width={1920}
            height={1080}
            className="w-full min-h-[560px] sm:min-h-[520px] md:min-h-0 md:aspect-[21/9] object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-5 pt-6 pb-28 sm:px-8 sm:pb-20 md:px-12 md:pt-12 md:pb-20 bg-gradient-to-t from-neutral-900/90 via-neutral-900/45 to-transparent">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-3 md:mb-6">
                <div className="size-2 rounded-full bg-eco" />
                <span className="text-[10px] font-semibold text-white uppercase tracking-widest">
                  IFC / Eco Mobile Lab Partner
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight text-balance mb-3 md:mb-6">
                Електролабораторія на базі Nissan e-NV200
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[52ch] text-pretty mb-5 md:mb-8">
                Повністю автономна мобільна лабораторія з нульовим рівнем викидів
                для оперативного відбору та аналізу проб повітря, води та ґрунту
                безпосередньо на місці.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 md:gap-4">
                <a
                  href="#cta"
                  className="bg-accent text-brand ring-1 ring-accent font-semibold py-2.5 pr-4 pl-3 flex items-center justify-center gap-2 rounded-md hover:brightness-95 transition sm:w-auto"
                >
                  <ArrowRight className="size-4" />
                  <span className="text-sm">Отримати пропозицію</span>
                </a>
                <button
                  type="button"
                  className="hidden sm:flex bg-white/10 text-white border border-white/20 font-semibold py-2.5 px-4 sm:px-6 rounded-md hover:bg-white/20 transition-colors text-sm items-center justify-center gap-2"
                >
                  <Download className="size-4" />
                  Завантажити специфікацію
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-4 md:-mt-8 mx-4 sm:mx-6 md:mx-12 bg-white rounded-2xl ring-1 ring-black/5 p-4 sm:p-5 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-0 md:divide-x divide-neutral-950/5 shadow-lg">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-0">
              <div className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                {s.label}
              </div>
              <div className="text-lg sm:text-2xl font-mono text-brand">
                {s.value}{" "}
                <span className="text-xs sm:text-sm font-sans text-neutral-500">
                  {s.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
            Призначення та сценарії
          </h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SCENARIOS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-8 bg-white ring-1 ring-black/5 rounded-[24px] hover:ring-brand/20 transition"
            >
              <div className="size-12 rounded-xl bg-brand/5 flex items-center justify-center mb-6 group-hover:bg-brand transition-colors">
                <Icon className="size-5 text-brand group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed text-pretty">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Description() {
  return (
    <section id="about" className="pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={rearCompartment}
          alt="Інтер'єр електролабораторії"
          width={1200}
          height={800}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-[24px] ring-1 ring-black/5"
        />
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Чому саме електромобіль
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            База електромобіля вибрана не випадково. При виїзді на місце
            випробувань тестувальники отримують найбільш точний результат — у
            електромобіля відсутній двигун внутрішнього згоряння, і саме тому
            немає вихлопних газів, які забруднюють навколишнє середовище та
            заважають тестуванню.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Тиха робота дозволяє проводити заміри у житлових зонах, заповідниках
            і чутливому до шуму середовищі. Автономне живлення 220 В забезпечує
            роботу обладнання до 8 годин без зовнішнього джерела.
          </p>
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
            Обладнання та комплектація
          </h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EQUIPMENT.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-5 rounded-xl bg-neutral-50 ring-1 ring-black/5"
            >
              <div className="size-10 rounded-lg bg-brand/5 flex items-center justify-center shrink-0">
                <Icon className="size-5 text-brand" />
              </div>
              <span className="text-sm font-medium text-neutral-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const introRows = SPECS[0]?.rows ?? [];
  const technicalRows = SPECS[1]?.rows ?? [];
  const highlights = [
    ["Кузов", "Автолабораторія"],
    ["Живлення", "220В / 12В"],
    ["Матеріали", "Нержавіюча сталь"],
    ["Безпека", "Контур заземлення"],
  ];

  return (
    <section id="specs" className="py-20 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
              Комплектація лабораторії
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 mb-5">
              Технічне оснащення лабораторії
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 max-w-xl">
              {introRows
                .slice(1)
                .map(([, value]) => value)
                .join(" ")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {highlights.map(([label, value]) => (
              <div
                key={label}
                className="bg-neutral-50 ring-1 ring-black/5 px-4 py-4 rounded-xl"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  {label}
                </div>
                <div className="text-sm font-semibold text-neutral-950">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-950 text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="px-5 py-4 border-b border-white/10">
            <div>
              <h3 className="text-base font-semibold">
                {introRows[0]?.[1]}
              </h3>
              <p className="text-xs text-white/50 mt-1">
                Повна специфікація переобладнання
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[0, 1].map((column) => (
              <div key={column} className="divide-y divide-white/10">
                {technicalRows
                  .filter((_, index) => index % 2 === column)
                  .map(([label, value]) => (
                    <div key={label} className="px-5 py-3.5">
                      <div className="text-xs font-semibold text-accent mb-1">
                        {label}
                      </div>
                      <div className="text-xs leading-relaxed text-white/75">
                        {value}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({
  tab,
  setTab,
}: {
  tab: GalleryTab;
  setTab: (t: GalleryTab) => void;
}) {
  const items = GALLERY[tab];
  return (
    <section id="gallery" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-2">
              Галерея рішень
            </h2>
            <p className="text-sm text-neutral-500">
              Детальний огляд конструкції та внутрішнього оснащення
            </p>
          </div>
          <div
            className="-mx-1 w-[calc(100%+0.5rem)] overflow-x-auto pb-1 md:mx-0 md:w-auto md:overflow-visible md:pb-0"
            role="tablist"
            aria-label="Фільтр галереї"
          >
            <div className="inline-flex min-w-max gap-2 px-1 md:min-w-0 md:gap-1 md:p-1 md:bg-neutral-200/50 md:rounded-lg">
            {GALLERY_TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                role="tab"
                aria-selected={t === tab}
                className={
                  t === tab
                    ? "shrink-0 px-4 py-2 md:py-1.5 bg-white text-brand text-sm font-medium rounded-md ring-1 ring-black/5 shadow-sm"
                    : "shrink-0 px-4 py-2 md:py-1.5 bg-white/70 md:bg-transparent text-neutral-600 text-sm font-medium rounded-md ring-1 ring-black/5 md:ring-0 hover:bg-white md:hover:bg-neutral-200 transition-colors"
                }
              >
                {t}
              </button>
            ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <figure className="col-span-12 md:col-span-8 relative group rounded-[16px] overflow-hidden ring-1 ring-black/5">
            <img
              src={items[0].src}
              alt={items[0].caption}
              loading="lazy"
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-medium">
              {items[0].caption}
            </figcaption>
          </figure>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
            {items.slice(1, 3).map((it) => (
              <figure
                key={it.caption}
                className="relative group flex-1 rounded-[16px] overflow-hidden ring-1 ring-black/5"
              >
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="w-full h-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-xs font-medium">
                  {it.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
            Як ми працюємо
          </h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-[24px] overflow-hidden ring-1 ring-black/5">
          {PROCESS.map((p) => (
            <div key={p.step} className="bg-white p-8">
              <div className="text-xs font-mono text-accent font-bold mb-4">
                {p.step}
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="pt-16 md:pt-20 md:pb-24">
      <div className="md:max-w-7xl md:mx-auto md:px-6">
        <div className="bg-brand px-4 py-12 sm:px-6 md:rounded-[32px] md:p-16 grid md:grid-cols-2 gap-10 md:gap-12 items-center text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-balance">
              Отримати пропозицію за 1 робочий день
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Залиште контакти — інженер REFORM зв'яжеться з вами, уточнить
              задачі та надішле орієнтовну специфікацію і вартість.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+380443740464"
                className="flex items-center gap-3 text-white/90 hover:text-accent transition"
              >
                <Phone className="size-4" />
                +380 (44) 374-04-64
              </a>
              <a
                href="mailto:sales@reform.ua"
                className="flex items-center gap-3 text-white/90 hover:text-accent transition"
              >
                <Mail className="size-4" />
                sales@reform.ua
              </a>
            </div>
          </div>
          <form
            className="bg-white/5 rounded-2xl p-5 sm:p-6 ring-1 ring-white/10 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <Field label="Ім'я" placeholder="Олександр Коваленко" />
              <Field label="Телефон" placeholder="+380 ..." type="tel" />
              <Field
                label="Тип задачі"
                placeholder="Напр.: моніторинг повітря"
              />
              <button
                type="submit"
                className="w-full bg-accent text-brand font-semibold py-3 rounded-md hover:brightness-95 transition flex items-center justify-center gap-2"
              >
                <Check className="size-4" />
                Надіслати запит
              </button>
              <p className="text-xs text-white/50 text-center">
                Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1.5 block">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/10 border border-white/15 rounded-md px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-transparent"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <a href="/" aria-label="REFORM" className="inline-block mb-6">
              <img src={footerLogo} alt="REFORM" className="h-24 w-auto" />
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              REFORM проєктує та переобладнує спеціалізовані автомобілі для
              бізнесу, сервісних служб і виїзних лабораторій.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5">Контакти</h2>
            <div className="space-y-4 text-sm text-white/80">
              <a href="tel:+380443740464" className="flex items-center gap-3 hover:text-accent transition">
                <Phone className="size-4 text-accent" />
                +380 (44) 374-04-64
              </a>
              <a href="tel:+380445619800" className="flex items-center gap-3 hover:text-accent transition">
                <Phone className="size-4 text-accent" />
                +380 (44) 561-98-00
              </a>
              <a href="mailto:sales@reform.ua" className="flex items-center gap-3 hover:text-accent transition">
                <Mail className="size-4 text-accent" />
                sales@reform.ua
              </a>
              <div className="flex items-start gap-3">
                <Clock className="size-4 text-accent mt-0.5" />
                <span>Пн-Пт: 8:00 - 17:00</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5">Каталог</h2>
            <div className="grid gap-3 text-sm text-white/75">
              <a href="#gallery" className="hover:text-accent transition">
                Фото електролабораторії
              </a>
              <a href="#equipment" className="hover:text-accent transition">
                Обладнання та комплектація
              </a>
              <a href="#specs" className="hover:text-accent transition">
                Технічні характеристики
              </a>
              <a href="#cta" className="hover:text-accent transition">
                Отримати консультацію
              </a>
            </div>
            <a
              href="#cta"
              className="mt-7 inline-flex bg-accent text-brand font-semibold rounded-md px-5 py-3 hover:brightness-95 transition"
            >
              Отримати пропозицію
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/50">
          <p>Copyright © 2026 REFORM. All Rights Reserved</p>
          <div className="flex gap-3">
            {[
              { label: "Facebook", icon: FaFacebookF },
              { label: "Instagram", icon: FaInstagram },
              { label: "YouTube", icon: FaYoutube },
              { label: "TikTok", icon: FaTiktok },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="size-8 rounded-md bg-accent text-brand font-bold flex items-center justify-center uppercase"
                aria-label={label}
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
