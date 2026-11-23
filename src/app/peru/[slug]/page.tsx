import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { departments } from "../departments";

type DepartmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return departments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);

  if (!department) {
    return {};
  }

  return {
    title: `${department.name}: ${department.attraction}`,
    description: department.description,
    openGraph: {
      title: `${department.name} | Perú en tus manos`,
      description: department.description,
      images: [`/images/stickers/${department.slug}.png`],
    },
  };
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-[#0C1C29]/10 pt-5">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#725842]">
        {label}
      </h2>
      <p className="mt-3 leading-7 text-[#0C1C29]/75">{children}</p>
    </div>
  );
}

export default async function DepartmentPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const index = departments.findIndex((item) => item.slug === slug);

  if (index === -1) {
    notFound();
  }

  const department = departments[index];
  const previous = departments[(index - 1 + departments.length) % departments.length];
  const next = departments[(index + 1) % departments.length];

  return (
    <main className="min-h-screen bg-[#EDE7E0] text-[#0C1C29]">
      <header className="border-b border-[#0C1C29]/10 bg-[#EDE7E0]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="relative block h-20 w-56 shrink-0 focus:outline-none sm:h-22 sm:w-60 lg:h-24 lg:w-64"
            aria-label="OLIVICE, ir al inicio"
          >
            <Image
              src="/images/logo-azul-header.png"
              alt="OLIVICE - Siempre contigo"
              fill
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 240px, 224px"
              className="object-contain object-left"
            />
          </Link>
          <nav aria-label="Navegación principal" className="flex items-center gap-4 text-sm sm:gap-7">
            <Link href="/" className="transition-colors hover:text-[#725842]">
              Inicio
            </Link>
            <Link href="/#coleccion-peru" className="transition-colors hover:text-[#725842]">
              Colección Perú
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        <nav aria-label="Ruta de navegación" className="text-sm text-[#0C1C29]/60">
          <Link href="/" className="hover:text-[#725842]">
            Inicio
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href="/#coleccion-peru" className="hover:text-[#725842]">
            Colección Perú
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page" className="text-[#0C1C29]">{department.name}</span>
        </nav>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="rounded-[2rem] bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#725842]">
              <span>Sticker de la colección</span>
              <span>{String(index + 1).padStart(2, "0")} / 24</span>
            </div>
            <div className="relative mx-auto aspect-[512/653] w-full max-w-[460px]">
              <Image
                src={`/images/stickers/${department.slug}.png`}
                alt={`Sticker de ${department.name}`}
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
              />
            </div>
          </div>

          <article className="flex flex-col justify-center py-2 lg:py-8">
            <p className="text-xs uppercase tracking-[0.38em] text-[#725842]">
              Perú en tus manos · {String(index + 1).padStart(2, "0")}
            </p>
            <h1 className="mt-4 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
              {department.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-[#725842] sm:text-2xl">
              {department.attraction}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#0C1C29]/75 sm:text-lg">
              {department.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <DetailBlock label="Dónde queda">{department.location}</DetailBlock>
              <DetailBlock label="Cómo llegar">{department.howToGetThere}</DetailBlock>
            </div>

            <aside className="mt-7 rounded-2xl bg-[#725842] p-6 text-white sm:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">Un dato curioso</p>
              <p className="mt-3 leading-7 text-white/90">{department.funFact}</p>
            </aside>
          </article>
        </section>

        <section className="mt-14 flex flex-col gap-4 border-y border-[#0C1C29]/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/peru/${previous.slug}`}
            className="group rounded-xl px-4 py-3 transition-colors hover:bg-white"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-[#0C1C29]/50">← Anterior</span>
            <span className="mt-1 block font-medium group-hover:text-[#725842]">{previous.name}</span>
          </Link>
          <Link
            href="/#coleccion-peru"
            className="order-first rounded-full border border-[#725842]/40 px-5 py-3 text-center text-sm font-medium transition-colors hover:bg-[#725842] hover:text-white sm:order-none"
          >
            Volver a la colección
          </Link>
          <Link
            href={`/peru/${next.slug}`}
            className="group rounded-xl px-4 py-3 text-right transition-colors hover:bg-white"
          >
            <span className="block text-xs uppercase tracking-[0.2em] text-[#0C1C29]/50">Siguiente →</span>
            <span className="mt-1 block font-medium group-hover:text-[#725842]">{next.name}</span>
          </Link>
        </section>

        <section className="pt-12" aria-labelledby="all-departments-title">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#725842]">Sigue descubriendo</p>
              <h2 id="all-departments-title" className="mt-3 text-3xl font-light sm:text-4xl">
                Explora los 24 departamentos
              </h2>
            </div>
            <Link href="/#coleccion-peru" className="text-sm underline underline-offset-4 hover:text-[#725842]">
              Ir a la colección en Inicio
            </Link>
          </div>

          <nav aria-label="Seleccionar otro departamento" className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {departments.map((item, itemIndex) => {
              const isCurrent = item.slug === department.slug;

              return (
                <Link
                  key={item.slug}
                  href={`/peru/${item.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`rounded-xl border px-3 py-3 text-sm transition-colors ${
                    isCurrent
                      ? "border-[#725842] bg-[#725842] text-white"
                      : "border-[#0C1C29]/10 bg-white/70 hover:border-[#725842]/50 hover:bg-white"
                  }`}
                >
                  <span className={`mr-2 text-[10px] tracking-widest ${isCurrent ? "text-white/65" : "text-[#725842]"}`}>
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </section>

        <footer className="mt-14 flex flex-col gap-3 border-t border-[#0C1C29]/10 pt-6 text-sm text-[#0C1C29]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>OLIVICE · Perú en tus manos</p>
          <Link href="/" className="font-medium text-[#725842] hover:underline">
            ← Regresar a la página principal
          </Link>
        </footer>
      </div>
    </main>
  );
}
