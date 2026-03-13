export default function EndingSection() {
  return (
    <div className="bg-background px-4 sm:px-6 lg:px-8  mt-14 py-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <img src="/assets/logo.png" alt="Logo" /> */}
          <p className="font-semibold text-dark text-xl lg:text-3xl">
            Glow
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="text-secondary text-2xl font-medium">
            Subcribe our Newsletter
          </div>
          <p className="text-sm text-neutral-400">
            Pellentesque eu nibh eget mauris congue mattis matti.
          </p>
        </div>

        <div className="flex border bg-white border-neutral-200 rounded-full gap-10 md:gap-40 items-center pl-2 h-9">
          <div className="font-normal text-sm text-neutral-400 pl-2">
            Your Email Address
          </div>

          <button className="bg-primary hover:bg-dark text-neutral-100 rounded-r-full text-sm py-2 px-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
