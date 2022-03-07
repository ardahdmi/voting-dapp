declare const window: { ethereum: any };

const IndexPage = () => {
  return (
    <section className="wrapper flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1 className="drop-shadow-glow max-w-sm text-6xl font-semibold text-white/90">
        Straightforward <span className="gradient-text">voting</span> dApp.
      </h1>
      <button className="mt-8 rounded-md bg-yellow-50 px-2 py-1">
        Add user
      </button>
    </section>
  );
};

export default IndexPage;
