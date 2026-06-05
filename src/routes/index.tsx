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
} from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryCompartment from "@/assets/gallery-compartment.jpg";
import galleryRear from "@/assets/gallery-rear.jpg";
import gallerySide from "@/assets/gallery-side.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Електролабораторія на базі Nissan e-NV200 — REFORM" },
      {
        name: "description",
        content:
          "Мобільна електролабораторія на базі Nissan e-NV200 з нульовим рівнем викидів. Виїзний відбір проб повітря, води та ґрунту. Готове рішення під ключ від REFORM.",
      },
      { property: "og:title", content: "Електролабораторія Nissan e-NV200 — REFORM" },
      {
        property: "og:description",
        content:
          "Zero-emission мобільна лабораторія для виїзних досліджень. Розробка REFORM.",
      },
      { property: "og:image", content: heroVan },
    ],
  }),
  component: Page,
});

const NAV = [
  "Головна",
  "Каталог",
  "Рішення для бізнесу",
  "Новини",
  "Про компанію",
  "Контакти",
];

const STATS = [
  { label: "Запас ходу", value: "200", unit: "км" },
  { label: "Навантаження", value: "770", unit: "кг" },
  { label: "Робочі місця", value: "2", unit: "особи" },
  { label: "Час виїзду", value: "30", unit: "хв" },
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
  { icon: Zap, label: "Автономне живлення 220 В" },
  { icon: Droplets, label: "Пробовідбірники води та ґрунту" },
  { icon: Leaf, label: "Газоаналізатори повітря" },
  { icon: Wrench, label: "Робоча станція з нержавіючої сталі" },
  { icon: MapPin, label: "GPS-фіксація точок відбору" },
  { icon: Building2, label: "Холодильна шафа для проб" },
];

const SPECS: Array<{ group: string; rows: Array<[string, string]> }> = [
  {
    group: "Шасі",
    rows: [
      ["Базовий автомобіль", "Nissan e-NV200"],
      ["Тип силової установки", "Електродвигун, 80 кВт"],
      ["Запас ходу (WLTP)", "до 200 км"],
      ["Час зарядки (швидка)", "40 хв до 80%"],
      ["Повна маса", "2 220 кг"],
    ],
  },
  {
    group: "Надбудова",
    rows: [
      ["Робочі місця оператора", "2"],
      ["Корисне навантаження", "770 кг"],
      ["Тип меблювання", "Алюміній / нержавіюча сталь"],
      ["Автономне живлення", "220 В, інвертор + АКБ"],
      ["Освітлення робочої зони", "LED 24 В"],
    ],
  },
];

const GALLERY_TABS = ["Екстер'єр", "Салон", "Робоча зона", "Обладнання"] as const;
type GalleryTab = (typeof GALLERY_TABS)[number];

const GALLERY: Record<GalleryTab, Array<{ src: string; caption: string }>> = {
  "Екстер'єр": [
    { src: heroVan, caption: "Eco Mobile Lab — вид 3/4" },
    { src: gallerySide, caption: "Бічний профіль з брендуванням" },
    { src: galleryRear, caption: "Задні двері відкриті" },
  ],
  Салон: [
    { src: galleryInterior, caption: "Робоча станція всередині" },
    { src: galleryRear, caption: "Огляд від задніх дверей" },
    { src: gallerySide, caption: "Кабіна водія" },
  ],
  "Робоча зона": [
    { src: galleryInterior, caption: "Стіл з нержавіючої сталі" },
    { src: galleryCompartment, caption: "Відсік приладів" },
    { src: galleryRear, caption: "Зона завантаження" },
  ],
  Обладнання: [
    { src: galleryCompartment, caption: "Шухляди та аналізатори" },
    { src: galleryInterior, caption: "Монітори та сенсори" },
    { src: galleryRear, caption: "Холодильна шафа для проб" },
  ],
};

const PROCESS = [
  { step: "01", title: "Брифінг", text: "Узгоджуємо задачі, маршрути та склад обладнання." },
  { step: "02", title: "ТЗ і КП", text: "Готуємо технічне завдання і комерційну пропозицію." },
  { step: "03", title: "Виробництво", text: "Переобладнання шасі та інсталяція обладнання." },
  { step: "04", title: "Передача", text: "Тест-драйв, навчання операторів і гарантійний сервіс." },
];

function Page() {
  const [tab, setTab] = useState<GalleryTab>("Екстер'єр");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <Header />
      <Breadcrumbs />
      <Hero />
      <Scenarios />
      <Description />
      <Equipment />
      <Specs />
      <Gallery tab={tab} setTab={setTab} />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-neutral-950/5 bg-neutral-50/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-brand font-semibold text-xl tracking-tight uppercase">
            Reform
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((item, i) => (
              <a
                key={item}
                href="#"
                className={
                  i === 2
                    ? "text-sm font-medium text-neutral-900"
                    : "text-sm font-medium text-neutral-600 hover:text-brand transition-colors"
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <a
          href="#cta"
          className="text-sm font-medium text-brand border border-brand/20 rounded-md px-4 py-1.5 hover:bg-brand/5 transition-colors"
        >
          Контакти
        </a>
      </div>
    </header>
  );
}

function Breadcrumbs() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-4">
      <ol className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
        <li>Головна</li>
        <li className="opacity-20">/</li>
        <li>Мобільні рішення</li>
        <li className="opacity-20">/</li>
        <li className="text-brand">Електролабораторія Nissan</li>
      </ol>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[32px] overflow-hidden">
          <img
            src={heroVan}
            alt="Електролабораторія на базі Nissan e-NV200"
            width={1920}
            height={1080}
            className="w-full aspect-[21/9] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                <div className="size-2 rounded-full bg-eco" />
                <span className="text-[10px] font-semibold text-white uppercase tracking-widest">
                  IFC / Eco Mobile Lab Partner
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight text-balance mb-6">
                Електролабораторія на базі Nissan e-NV200
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-[52ch] text-pretty mb-8">
                Повністю автономна мобільна лабораторія з нульовим рівнем викидів
                для оперативного відбору та аналізу проб повітря, води та ґрунту
                безпосередньо на місці.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="bg-accent text-brand ring-1 ring-accent font-semibold py-2.5 pr-4 pl-3 flex items-center gap-2 rounded-md hover:brightness-95 transition"
                >
                  <ArrowRight className="size-4" />
                  <span className="text-sm">Отримати пропозицію</span>
                </a>
                <button
                  type="button"
                  className="bg-white/10 text-white border border-white/20 font-semibold py-2.5 px-6 rounded-md hover:bg-white/20 transition-colors text-sm flex items-center gap-2"
                >
                  <Download className="size-4" />
                  Завантажити специфікацію
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mt-12 mx-4 md:mx-12 bg-white rounded-2xl ring-1 ring-black/5 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 md:divide-x divide-neutral-950/5 shadow-lg">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 md:px-6 py-3 md:py-0">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                {s.label}
              </div>
              <div className="text-2xl font-mono text-brand">
                {s.value}{" "}
                <span className="text-sm font-sans text-neutral-500">
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
    <section className="py-24">
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
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={galleryInterior}
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
    <section className="py-24 bg-white border-y border-black/5">
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
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
            Технічні характеристики
          </h2>
          <div className="h-1 w-12 bg-accent" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {SPECS.map((block) => (
            <div
              key={block.group}
              className="bg-white rounded-[24px] ring-1 ring-black/5 overflow-hidden"
            >
              <div className="px-6 py-4 bg-brand text-white text-xs font-bold uppercase tracking-widest font-mono">
                {block.group}
              </div>
              <dl className="divide-y divide-black/5">
                {block.rows.map(([k, v]) => (
                  <div
                    key={k}
                    className="px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <dt className="text-sm text-neutral-500">{k}</dt>
                    <dd className="text-sm font-medium text-neutral-900 text-right">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
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
    <section className="py-24 bg-neutral-100">
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
          <div className="flex flex-wrap gap-1 p-1 bg-neutral-200/50 rounded-lg self-start">
            {GALLERY_TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={
                  t === tab
                    ? "px-4 py-1.5 bg-white text-brand text-sm font-medium rounded-md ring-1 ring-black/5 shadow-sm"
                    : "px-4 py-1.5 text-neutral-600 text-sm font-medium rounded-md hover:bg-neutral-200 transition-colors"
                }
              >
                {t}
              </button>
            ))}
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
    <section id="cta" className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand rounded-[32px] p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center text-white">
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
            className="bg-white/5 rounded-2xl p-6 ring-1 ring-white/10 backdrop-blur"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <Field label="Ім'я" placeholder="Іван Петренко" />
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
    <footer className="bg-brand py-12 text-white/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="text-sm font-mono">
          © 2026 REFORM — Електролабораторія Nissan
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-xs tracking-widest uppercase hover:text-white">
            Специфікації
          </a>
          <a href="#" className="text-xs tracking-widest uppercase hover:text-white">
            Гарантія
          </a>
          <a href="#" className="text-xs tracking-widest uppercase hover:text-white">
            Сервіс
          </a>
        </div>
      </div>
    </footer>
  );
}
