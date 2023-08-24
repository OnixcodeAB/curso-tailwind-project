const path = require("path");
module.exports = {
  webpack: (config) => {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/data/products/**",
      },
    ],
  },
};
