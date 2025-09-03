import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage';
import { payloadAiPlugin } from '@ai-stack/payloadcms';
import { getClientSideURL } from '@/lib/get-url';
import Coupons from '@/payload/collections/Coupons';
import Customers from '@/payload/collections/Customers';
import Media from '@/payload/collections/Media';
import Orders from '@/payload/collections/Orders';
import Pages from '@/payload/collections/Pages';
import PostCategories from '@/payload/collections/PostCategories';
import Posts from '@/payload/collections/Posts';
import PostTags from '@/payload/collections/PostTags';
import ProductCategories from '@/payload/collections/ProductCategories';
import Products from '@/payload/collections/Products';
import ProductTags from '@/payload/collections/ProductTags';
import ShippingClasses from '@/payload/collections/ShippingClasses';
import Users from '@/payload/collections/Users';
import cloudStorageConfig from '@/payload/config/cloudinary.config';
import seoPluginConfig from '@/payload/config/seo.config';
import { siteName } from '@/constants/site-info';
import aiPluginConfig from '@/payload/config/ai.config';
import { ECOMMERCE_ENABLED } from '@/payload.constants';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      // Uncomment and adjust the following lines if you have custom graphics
      // beforeNavLinks: ['@/payload/graphics/NavLogo'],
      // graphics: {
      //   Icon: '@/payload/graphics/Icon',
      //   Logo: '@/payload/graphics/Logo',
      // },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          height: 667,
          label: 'Mobile',
          name: 'mobile',
          width: 375,
        },
        {
          height: 1024,
          label: 'Tablet',
          name: 'tablet',
          width: 768,
        },
        {
          height: 900,
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
        },
      ],
    },
    meta: {
      icons: '/favicon.ico',
      titleSuffix: `| ${siteName}`,
    },
    user: Users.slug,
  },
  collections: [
    // Blog
    Posts,
    PostCategories,
    PostTags,
    ...(ECOMMERCE_ENABLED
      ? // E-commerce
        [Products, ProductCategories, ProductTags, Customers, Orders, Coupons, ShippingClasses]
      : []),
    // Other
    Pages,
    // Media
    Media,
    // Settings
    Users,
  ],
  cors: [getClientSideURL()].filter(Boolean),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  editor: lexicalEditor(),
  plugins: [
    payloadCloudPlugin(),
    cloudStoragePlugin(cloudStorageConfig()),
    payloadAiPlugin(aiPluginConfig()),
    seoPlugin(seoPluginConfig()),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
