import { MapPin, MessageCircle } from "lucide-react";

const locations = [
  {
    name: "Dealer Warto Motor",
    whatsapp: "https://wa.me/6281234477445",
    maps: "https://maps.app.goo.gl/SqLwgPUsW62bMGke8?g_st=ic",
  },
  {
    name: "Bengkel Warto Motor I",
    whatsapp: "https://wa.me/6282231372454",
    maps: "https://maps.app.goo.gl/b8uESJz81QE3za8E7?g_st=ic",
  },
  {
    name: "Bengkel Warto Motor II",
    whatsapp: "https://wa.me/6282231372454",
    maps: "https://maps.app.goo.gl/54sYTDgEFfS9nu8X8?g_st=ic",
  },
  {
    name: "KWM Auto powered by Warto Motor",
    whatsapp: "https://wa.me/628157033339",
    maps: "https://maps.app.goo.gl/RMAaT8zL2PeEAVNG7?g_st=ic",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-10 sm:px-8 sm:py-14">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Warto Motor Group
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Solusi Otomotif Anda
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Dealer dan layanan bengkel Warto Motor Group. Temukan lokasi kami
            dan hubungi tim kami dengan mudah.
          </p>
        </header>

        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-sky-500/50"
            >
              <div className="mb-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                  <MapPin size={24} strokeWidth={2} />
                </div>

                <h2 className="text-xl font-semibold">
                  {location.name}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={location.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-500 active:scale-95"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href={location.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 active:scale-95"
                >
                  <MapPin size={18} />
                  Google Maps
                </a>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-auto pt-12 text-center text-sm text-slate-400">
          <p className="font-medium text-slate-300">Warto Motor Group</p>

          <p className="mt-2">
            Dealer dan layanan otomotif untuk kebutuhan Anda.
          </p>

          <p className="mt-4">
            © {new Date().getFullYear()} Warto Motor Group. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}