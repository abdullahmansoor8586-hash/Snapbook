import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-[#183B6B] text-5xl shadow-lg">
          📷
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Capture moments.
          <br />
          <span className="text-brand-600">Book the right photographer.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          SnapBook helps you discover and book verified photographers
          for weddings, portraits, events, and special moments.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/photographers"
            className="rounded-xl bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Browse Photographers
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-gray-300 px-7 py-3.5 font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Log In
          </Link>
        </div>

        <Link
          href="/signup"
          className="mt-5 text-sm font-medium text-brand-600 hover:underline"
        >
          Join SnapBook as a photographer →
        </Link>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">✓</div>
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              Verified Photographers
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Find photographers whose profiles and verification status
              are available through SnapBook.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">📅</div>
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              Simple Booking
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Browse photographers, check availability, and manage your
              booking requests in one place.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="text-2xl">⭐</div>
            <h2 className="mt-3 text-lg font-semibold text-gray-900">
              Reviews & Tips
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Share your experience with reviews and show appreciation
              through tips after completed bookings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
