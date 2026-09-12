import BannerImg from "./assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="border border-slate-200 text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex-1 max-w-md md:max-w-lg">
        <img
          src={BannerImg}
          alt="Development Stack Illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;