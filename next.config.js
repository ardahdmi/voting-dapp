// next.config.js
module.exports = {
  images: {
    domains: ["avatars.dicebear.com"],
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};
