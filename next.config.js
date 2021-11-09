if (!process.env.NEXTAUTH_URL && process.env.URL) {
  process.env.NEXTAUTH_URL = process.env.URL;
}

module.exports = {
  target: "experimental-serverless-trace",
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
