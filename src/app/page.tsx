
import Image from "next/image";
import Link from "next/link";
import CartillaViewer from "./components/CartillaViewer";

const departamentos = [
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
];

const stickers = [
  "amazonas",
  "ancash",
  "apurimac",
  "arequipa",
  "ayacucho",
  "cajamarca",
  "cusco",
  "huancavelica",
  "huanuco",
  "ica",
  "junin",
  "la-libertad",
  "lambayeque",
  "lima",
  "loreto",
  "madre-de-dios",
  "moquegua",
  "pasco",
  "piura",
  "puno",
  "san-martin",
  "tacna",
  "tumbes",
  "ucayali",
];

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre OLIVICE", href: "#sobre-olivice" },
  { label: "Botellas", href: "#experiencia" },
  { label: "Colección Perú", href: "#coleccion-peru" },
  { label: "Contacto", href: "#contacto" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDE7E0] text-[#0C1C29]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#0C1C29]/10 bg-[#EDE7E0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link
            href="#inicio"
            className="relative block h-20 w-56 focus:outline-none sm:h-22 sm:w-60 lg:h-24 lg:w-64"
            aria-label="OLIVICE, ir al inicio"
          >
            <Image
              src="/images/logo-azul-header.png"
              alt="OLIVICE - Siempre contigo"
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 224px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Navegación principal">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-[#0C1C29]/20 px-5 py-2 text-xs">
              MENÚ
            </summary>
            <nav
              className="absolute right-0 top-full mt-3 flex min-w-52 flex-col gap-1 rounded-2xl border border-[#0C1C29]/10 bg-[#EDE7E0] p-3 shadow-lg"
              aria-label="Navegación móvil"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm transition-colors hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      {/* INICIO */}
      <section id="inicio" className="scroll-mt-28">
        <div className="mx-auto grid min-h-[calc(100vh-105px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.45em] text-[#725842]">
              Una colección para llevar contigo
            </p>

            <h1 className="text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Perú
              <br />
              en tus
              <br />
              <span className="font-normal text-[#725842]">manos.</span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-7 text-[#0C1C29]/70">
              Descubre, pega y colecciona los paisajes del Perú. Una colección
              creada para acompañarte en cada lugar, cada viaje y cada historia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#experiencia"
                className="rounded-full bg-[#0C1C29] px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                Conoce OLIVICE
              </Link>

              <Link
                href="#coleccion-peru"
                className="rounded-full border border-[#0C1C29]/25 px-7 py-4 text-sm font-medium transition-colors hover:bg-[#0C1C29] hover:text-white"
              >
                Explorar colección
              </Link>
            </div>
          </div>

          {/* CARTILLA REAL */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-full bg-[#725842]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl sm:p-5">
              <Image
                src="/images/cartilla-sticker.png"
                alt="Cartilla de stickers OLIVICE con los 24 departamentos del Perú"
                width={1120}
                height={1493}
                priority
                className="h-auto w-full rounded-[1.4rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPTO */}
      <section className="bg-[#0C1C29] px-6 py-24 text-[#EDE7E0]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#EDE7E0]/50">
            El concepto
          </p>
          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Perú en tus manos.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#EDE7E0]/65">
            OLIVICE busca conectar a las personas con el Perú a través de
            objetos que acompañan el día a día y recuerdos que merecen ser
            conservados.
          </p>
        </div>
      </section>

      
      {/* SOBRE OLIVICE */}
      <section
        id="sobre-olivice"
        className="scroll-mt-28 border-b border-[#0C1C29]/10 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LOGO */}
          <div className="flex justify-center">
            <div className="relative h-64 w-64 rounded-full bg-[#0C1C29] p-8 shadow-xl">
              <Image
                src="/images/logo-beige.png"
                alt="OLIVICE"
                fill
                className="object-contain p-10"
              />
            </div>
          </div>

          {/* TEXTO SOBRE OLIVICE */}
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">
              Sobre OLIVICE
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
              Siempre contigo.
            </h2>

            <div className="mt-8 space-y-10">
              <div>
                <p className="text-justify leading-7 text-[#0C1C29]/75">
                  OLIVICE nace de una preocupación: la contaminación por
                  plásticos y sus efectos en el medio ambiente, especialmente
                  en nuestros océanos y en las especies marinas que los habitan.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Una de ellas es la tortuga olivácea, una especie que puede
                  verse afectada por los residuos plásticos que llegan al mar.
                  Su nombre inspiró el de nuestra marca y representa el
                  compromiso que queremos transmitir: cuidar el planeta también
                  empieza con las decisiones cotidianas.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Por eso, apostamos por las botellas de acero como una
                  alternativa reutilizable que ayude a reducir el consumo de
                  botellas plásticas de un solo uso.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light sm:text-3xl">
                  Una botella que cuenta historias
                </h3>

                <p className="mt-4 text-justify leading-7 text-[#0C1C29]/75">
                  Pero queríamos que OLIVICE fuera más que una botella. Nos
                  inspiramos en las colecciones de otros países que reúnen
                  lugares emblemáticos y decidimos crear una propia, dedicada a
                  la riqueza del Perú.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Así nació nuestra primera colección:{" "}
                  <strong>24 departamentos, 24 historias.</strong> Cada diseño
                  representa un lugar especial de nuestro país. Elegir solo uno
                  por departamento no fue sencillo: el Perú tiene una riqueza
                  natural, cultural e histórica inmensa, y muchísimos destinos
                  que merecen ser conocidos.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Esta colección es una invitación a descubrirlos, recordarlos
                  y compartirlos.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light sm:text-3xl">
                  Para llevar contigo
                </h3>

                <p className="mt-4 text-justify leading-7 text-[#0C1C29]/75">
                  Queremos que una botella OLIVICE te acompañe en tus viajes, en
                  el trabajo, en el gimnasio, durante un paseo por la ciudad o
                  en casa. Que puedas colocar en ella los stickers de los
                  departamentos que has conocido y, poco a poco, completar tu
                  colección.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Cada sticker puede convertirse en un recuerdo de un lugar
                  visitado o en una inspiración para tu próximo destino. Y para
                  quienes vienen de otros países, es una forma de llevarse un
                  pedacito del Perú.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-light sm:text-3xl">
                  Nuestra esencia
                </h3>

                <p className="mt-4 text-justify leading-7 text-[#0C1C29]/75">
                  Con OLIVICE buscamos incentivar el turismo, dar a conocer los
                  hermosos lugares de nuestro país y promover hábitos de
                  consumo más responsables, reduciendo el uso de botellas
                  plásticas descartables.
                </p>

                <p className="mt-5 text-justify leading-7 text-[#0C1C29]/75">
                  Queremos que, al llevar tu botella, sientas que llevas contigo
                  parte del Perú y que cada nuevo sticker te recuerde todo lo
                  que aún queda por descubrir.
                </p>
              </div>
            </div>

            {/* CIERRE */}
            <p className="mt-10 border-l-2 border-[#725842] pl-5 text-lg font-medium">
              Perú en tus manos. Un compromiso que va más allá de una botella.
            </p>
          </div>
        </div>
      </section>

      {/* LA EXPERIENCIA OLIVICE */}
      <section
        id="experiencia"
        className="scroll-mt-28 border-b border-[#0C1C29]/10 px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">
              La experiencia OLIVICE
            </p>
            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
              Más que un producto.
              <br />
              Una forma de llevar el Perú contigo.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* BOTELLAS */}
            <article className="flex min-h-[430px] flex-col justify-between rounded-[2rem] bg-white p-8 shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#725842]">
                  01 · Botellas
                </span>
                <h3 className="mt-6 text-3xl font-light">Botellas grabadas</h3>
                <p className="mt-5 leading-7 text-[#0C1C29]/65">
                  Botellas reutilizables con la identidad de OLIVICE, pensadas
                  para acompañarte y convertirse en piezas que puedes conservar.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-dashed border-[#725842]/30 bg-[#EDE7E0] px-6 py-10 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#725842]">
                  Próximamente
                </p>
                <p className="mt-3 text-sm text-[#0C1C29]/55">
                  Aquí mostraremos las fotografías reales de las botellas.
                </p>
              </div>

              <Link
                href="#contacto"
                className="mt-8 inline-block text-sm underline underline-offset-8"
              >
                Consultar por botellas
              </Link>
            </article>

            {/* CARTILLA STICKERS */}
            <article className="flex min-h-[640px] flex-col overflow-visible rounded-[2rem] bg-[#725842] text-white shadow-sm">
              <div className="p-8 pb-5">
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">
                  02 · Colección
                </span>
                <h3 className="mt-6 text-3xl font-light">
                  Cartilla de stickers
                </h3>
                <p className="mt-5 leading-7 text-white/70">
                  Una colección de 24 diseños para descubrir y coleccionar,
                  uno por cada departamento del Perú.
                </p>
              </div>

              <div className="relative mx-6 mb-6 mt-5 flex items-start justify-center overflow-visible rounded-[1.5rem] bg-[#EDE7E0] px-4 pb-8 pt-5">
                <CartillaViewer />
              </div>
            </article>

            {/* CARTILLA INFORMATIVA */}
            <article className="flex min-h-[430px] flex-col justify-between rounded-[2rem] bg-[#0C1C29] p-8 text-[#EDE7E0] shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#EDE7E0]/50">
                  03 · Para descubrir
                </span>
                <h3 className="mt-6 text-3xl font-light">
                  Cartilla informativa
                </h3>
                <p className="mt-5 leading-7 text-[#EDE7E0]/65">
                  Un espacio para conocer mejor las historias, lugares y
                  curiosidades que acompañan nuestra colección.
                </p>
              </div>

              <div className="mt-10 flex min-h-44 items-center justify-center rounded-2xl border border-dashed border-[#EDE7E0]/20 bg-white/5 px-6 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#725842]">
                    Próximamente
                  </p>
                  <p className="mt-3 text-sm text-[#EDE7E0]/45">
                    Incorporaremos aquí la cartilla informativa cuando esté
                    lista.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COLECCIÓN PERÚ */}
      <section
        id="coleccion-peru"
        className="scroll-mt-28 border-b border-[#0C1C29]/10 bg-white px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">
                Colección Perú
              </p>
              <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                24 departamentos. 24 historias.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#0C1C29]/60">
                Cada diseño representa un lugar que forma parte de la riqueza
                natural, cultural e histórica del Perú.
              </p>
            </div>

            <p className="text-sm text-[#0C1C29]/55">
              Descubre los diseños de cada departamento
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {departamentos.map((departamento, index) => (
              <Link
                key={departamento}
                href={`/peru/${stickers[index]}`}
                className="group aspect-square overflow-hidden rounded-2xl bg-[#EDE7E0] p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-[10px] leading-none tracking-widest text-[#725842]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex min-h-0 flex-1 items-center justify-center py-0">
                    <Image
                      src={`/images/stickers/${stickers[index]}.png`}
                      alt={`Sticker de ${departamento}`}
                      width={stickers[index] === "amazonas" ? 510 : 512}
                      height={stickers[index] === "amazonas" ? 652 : 653}
                      sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 40vw"
                      className="h-auto w-[92%] max-h-full scale-[1.03] object-contain"
                    />
                  </div>

                  <div>
                    <div className="mb-1 h-px w-8 bg-[#725842]/40 transition-all group-hover:w-14" />
                    <h3 className="text-sm font-bold">{departamento}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FRANJA FINAL: SE CONSERVA LA DIVISIÓN MARRÓN */}
      <section className="bg-[#725842] px-6 py-20 text-center text-white lg:px-10">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Perú en tus manos
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
          Descubre, pega y colecciona los paisajes del Perú.
        </h2>
        <Link
          href="#coleccion-peru"
          className="mt-10 inline-block rounded-full bg-[#EDE7E0] px-8 py-4 text-sm font-medium text-[#0C1C29] transition-transform hover:-translate-y-1"
        >
          Explorar colección
        </Link>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-28 border-b border-[#EDE7E0]/15 bg-[#0C1C29] px-6 py-20 text-[#EDE7E0] lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#EDE7E0]/50">
            Contacto
          </p>
          <h2 className="mt-5 text-4xl font-light sm:text-5xl">
            Hablemos de OLIVICE.
          </h2>
          <p className="mt-6 max-w-2xl leading-7 text-[#EDE7E0]/65">
            ¿Quieres conocer más sobre nuestras botellas y la colección?
            Pronto encontrarás aquí nuestros canales de contacto.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0C1C29] px-6 py-10 text-[#EDE7E0] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link
            href="#inicio"
            className="relative block h-28 w-64 focus:outline-none"
            aria-label="OLIVICE, volver al inicio"
          >
            <Image
              src="/images/logo-beige.png"
              alt="OLIVICE - Siempre contigo"
              fill
              className="object-contain object-left"
            />
          </Link>

          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} OLIVICE
          </div>
        </div>
      </footer>
    </main>
  );
}
