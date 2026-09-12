import Image from "next/image";
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDE7E0] text-[#0C1C29]">
      {/* HEADER */}
      <header className="border-b border-[#0C1C29]/10 bg-[#EDE7E0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="relative block h-20 w-56 sm:h-22 sm:w-60 lg:h-24 lg:w-64 focus:outline-none">
            <Image
              src="/images/logo-azul-header.png"
              alt="OLIVICE - Siempre contigo"
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 224px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <Link href="/" className="transition-opacity hover:opacity-60">Inicio</Link>
            <Link href="/coleccion-peru" className="transition-opacity hover:opacity-60">Colección Perú</Link>
            <Link href="/botellas-grabadas" className="transition-opacity hover:opacity-60">Botellas</Link>
            <Link href="/sobre-olivice" className="transition-opacity hover:opacity-60">Sobre OLIVICE</Link>
            <Link href="/contacto" className="transition-opacity hover:opacity-60">Contacto</Link>
          </nav>

          <button
            className="rounded-full border border-[#0C1C29]/20 px-5 py-2 text-xs md:hidden"
            aria-label="Abrir menú"
          >
            MENÚ
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-105px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
          <div className="max-w-xl">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.45em] text-[#725842]">
              Una colección para llevar contigo
            </p>
            <h1 className="text-6xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Perú<br />en tus<br /><span className="font-normal text-[#725842]">manos.</span>
            </h1>
            <p className="mt-10 max-w-md text-base leading-7 text-[#0C1C29]/70">
              Descubre, pega y colecciona los paisajes del Perú.
              Una colección creada para acompañarte en cada lugar,
              cada viaje y cada historia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#productos"
                className="rounded-full bg-[#0C1C29] px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1"
              >
                Conoce OLIVICE
              </Link>
              <Link
                href="/coleccion-peru"
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

      {/* INTRO */}
      <section className="bg-[#0C1C29] px-6 py-24 text-[#EDE7E0] lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#EDE7E0]/50">El concepto</p>
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

      {/* PRODUCTOS */}
      <section id="productos" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">La experiencia OLIVICE</p>
            <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
              Más que un producto.<br />Una forma de llevar el Perú contigo.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* BOTELLAS */}
            <article className="flex min-h-[430px] flex-col justify-between rounded-[2rem] bg-white p-8 shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#725842]">01 · Botellas</span>
                <h3 className="mt-6 text-3xl font-light">Botellas grabadas</h3>
                <p className="mt-5 leading-7 text-[#0C1C29]/65">
                  Botellas reutilizables con la identidad de OLIVICE, pensadas
                  para acompañarte y convertirse en piezas que puedes conservar.
                </p>
              </div>
              <div className="mt-10 rounded-2xl border border-dashed border-[#725842]/30 bg-[#EDE7E0] px-6 py-10 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#725842]">Próximamente</p>
                <p className="mt-3 text-sm text-[#0C1C29]/55">
                  Aquí mostraremos las fotografías reales de las botellas.
                </p>
              </div>
              <Link href="/botellas-grabadas" className="mt-8 inline-block text-sm underline underline-offset-8">
                Ver botellas
              </Link>
            </article>

            {/* CARTILLA STICKERS */}
            <article className="flex min-h-[640px] flex-col rounded-[2rem] bg-[#725842] text-white shadow-sm overflow-visible">
              <div className="p-8 pb-5">
                <span className="text-xs uppercase tracking-[0.35em] text-white/60">02 · Colección</span>
                <h3 className="mt-6 text-3xl font-light">Cartilla de stickers</h3>
                <p className="mt-5 leading-7 text-white/70">
                  Una colección de 24 diseños para descubrir y coleccionar,
                  uno por cada departamento del Perú.
                </p>
              </div>
              <div className="relative mx-6 mt-5 mb-6 flex items-start justify-center overflow-visible rounded-[1.5rem] bg-[#EDE7E0] px-4 pt-5 pb-8">
                <Image
                  src="/images/cartilla-sticker.png"
                  alt="Vista de la cartilla de stickers OLIVICE"
                  width={1133}
                  height={1587}
                  className="block h-auto w-[245px] max-w-full object-contain object-center"
                />
              </div>
            </article>

            {/* CARTILLA INFORMATIVA */}
            <article className="flex min-h-[430px] flex-col justify-between rounded-[2rem] bg-[#0C1C29] p-8 text-[#EDE7E0] shadow-sm">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#EDE7E0]/50">03 · Para descubrir</span>
                <h3 className="mt-6 text-3xl font-light">Cartilla informativa</h3>
                <p className="mt-5 leading-7 text-[#EDE7E0]/65">
                  Un espacio para conocer mejor las historias, lugares y
                  curiosidades que acompañan nuestra colección.
                </p>
              </div>
              <div className="mt-10 flex min-h-44 items-center justify-center rounded-2xl border border-dashed border-[#EDE7E0]/20 bg-white/5 px-6 text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#725842]">Próximamente</p>
                  <p className="mt-3 text-sm text-[#EDE7E0]/45">
                    Incorporaremos aquí la cartilla informativa cuando esté lista.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COLECCIÓN */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">Colección Perú</p>
              <h2 className="mt-4 text-4xl font-light sm:text-5xl">24 departamentos. 24 historias.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#0C1C29]/60">
                Cada diseño representa un lugar que forma parte de la riqueza
                natural, cultural e histórica del Perú.
              </p>
            </div>
            <Link href="/coleccion-peru" className="text-sm underline underline-offset-8">
              Ver colección completa
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {departamentos.map((departamento, index) => (
              <Link
                key={departamento}
                href={`/peru/${departamento.toLowerCase().replaceAll(" ", "-")}`}
                className="group aspect-square overflow-hidden rounded-2xl bg-[#EDE7E0] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="text-[10px] tracking-widest text-[#725842]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex min-h-0 flex-1 items-center justify-center py-2">
                    <Image
                      src={`/images/stickers/${stickers[index]}.png`}
                      alt={`Sticker de ${departamento}`}
                      width={512}
                      height={653}
                      sizes="(min-width: 1024px) 12vw, (min-width: 768px) 20vw, 40vw"
                      className="h-auto w-[62%] max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="mb-3 h-px w-8 bg-[#725842]/40 transition-all group-hover:w-14" />
                    <h3 className="text-sm font-medium">{departamento}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE OLIVICE */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.7fr_1.3fr]">
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
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#725842]">Sobre OLIVICE</p>
            <h2 className="mt-5 text-4xl font-light sm:text-5xl">Siempre contigo.</h2>
            <p className="mt-8 leading-7 text-[#0C1C29]/65">
              OLIVICE nace con la idea de transformar un objeto cotidiano en
              una forma de recordar, descubrir y conectar con el Perú.
              Cada elemento de la marca busca contar una historia y acompañar
              a quien lo lleva.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#725842] px-6 py-20 text-center text-white lg:px-10">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">Perú en tus manos</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight sm:text-5xl">
          Descubre, pega y colecciona los paisajes del Perú.
        </h2>
        <Link href="/coleccion-peru" className="mt-10 inline-block rounded-full bg-[#EDE7E0] px-8 py-4 text-sm font-medium text-[#0C1C29]">
          Explorar colección
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0C1C29] px-6 py-10 text-[#EDE7E0] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Link href="/" className="relative block h-28 w-64 focus:outline-none">
            <Image
              src="/images/logo-beige.png"
              alt="OLIVICE - Siempre contigo"
              fill
              className="object-contain object-left"
            />
          </Link>
          <div className="text-sm text-white/50">© {new Date().getFullYear()} OLIVICE</div>
        </div>
      </footer>
    </main>
  );
}
