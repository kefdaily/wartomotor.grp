import {
  ArrowUpRight,
  Building2,
  Clock,
  MapPin,
  MessageCircle,
  Wrench,
} from "lucide-react";

const locations = [
  {
    name: "Dealer Warto Motor",
    category: "Dealer & Penjualan",
    description:
  "Menyediakan pilihan sepeda motor bekas untuk berbagai kebutuhan, dengan layanan informasi dan konsultasi kendaraan secara langsung.",
      hours: "08:00 – 16:00",
    type: "dealer",
    whatsapp: "https://wa.me/6281234477445",
    maps: "https://maps.app.goo.gl/SqLwgPUsW62bMGke8?g_st=ic",
  },
  {
    name: "Bengkel Warto Motor I",
    category: "Sparepart & Servis",
    description:
      "Menyediakan berbagai kebutuhan sparepart sepeda motor untuk perawatan dan perbaikan, tersedia untuk pembelian ecer maupun grosir.",
    hours: "08:00 – 16:00",
    type: "workshop",
    whatsapp: "https://wa.me/6282231372454",
    maps: "https://maps.app.goo.gl/b8uESJz81QE3za8E7?g_st=ic",
  },
  {
    name: "Bengkel Warto Motor II",
    category: "Servis & Perawatan",
    description:
      "Menyediakan layanan servis, perawatan, dan perbaikan kendaraan untuk membantu menjaga performa serta kenyamanan berkendara.",
    hours: "08:00 – 16:00",
    type: "workshop",
    whatsapp: "https://wa.me/6282231372454",
    maps: "https://maps.app.goo.gl/54sYTDgEFfS9nu8X8?g_st=ic",
  },
  {
    name: "KWM Auto powered by Warto Motor",
    category: "Jual Beli Mobil Bekas",
    description:
      "Menyediakan pilihan mobil bekas untuk berbagai kebutuhan, dengan layanan informasi dan konsultasi kendaraan secara langsung.",
    hours: "08:00 – 21:00",
    type: "workshop",
    note: "Layanan setelah pukul 16:00 memerlukan konfirmasi terlebih dahulu melalui WhatsApp.",
    whatsapp: "https://wa.me/628157033339",
    maps: "https://maps.app.goo.gl/RMAaT8zL2PeEAVNG7?g_st=ic",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-12">
        <header className="border-b border-slate-800 pb-10 text-center sm:pb-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-400 shadow-lg shadow-sky-950/20">
            <Building2 size={28} strokeWidth={1.8} />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-sky-400 sm:text-sm">
            Warto Motor Group
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Solusi Otomotif untuk
            <span className="block text-sky-400">Kebutuhan Anda</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Temukan lokasi dealer dan bengkel Warto Motor Group. Dapatkan
            informasi layanan, jam operasional, serta akses langsung ke
            WhatsApp dan Google Maps.
          </p>
        </header>

        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {locations.map((location) => {
            const isDealer = location.type === "dealer";

            return (
              <article
                key={location.name}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    {isDealer ? (
                      <Building2 size={23} strokeWidth={1.8} />
                    ) : (
                      <Wrench size={23} strokeWidth={1.8} />
                    )}
                  </div>

                  <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-300">
                    {location.category}
                  </span>
                </div>

                <div className="mt-6">
                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    {location.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {location.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-sky-400">
                      <Clock size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Jam Operasional
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-slate-200">
                        {location.hours}
                      </p>
                    </div>
                  </div>

                  {location.note && (
                    <div className="mt-4 rounded-xl border border-sky-400/10 bg-sky-400/5 px-4 py-3">
                      <p className="text-xs leading-5 text-slate-400">
                        <span className="font-semibold text-sky-400">
                          Informasi:
                        </span>{" "}
                        {location.note}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href={location.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-500 active:scale-[0.98]"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href={location.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-700 active:scale-[0.98]"
                  >
                    <MapPin size={18} />
                    Maps
                    <ArrowUpRight size={15} className="text-slate-400" />
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        <footer className="mt-14 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm font-semibold text-slate-300">
            Warto Motor Group
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            Dealer dan layanan otomotif untuk kebutuhan kendaraan Anda.
          </p>

          <p className="mt-5 text-xs text-slate-600">
            © {new Date().getFullYear()} Warto Motor Group. All rights
            reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}