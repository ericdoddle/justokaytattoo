/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'export',
  basePath: '/justokaytattoo-camryn',
  images: { unoptimized: true }
};

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [rehypePrism],
//   },
// });
module.exports = nextConfig;
