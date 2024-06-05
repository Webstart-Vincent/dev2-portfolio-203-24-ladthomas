import { WorkModel } from '@/app/models/Project';
import { CldImage } from 'next-cloudinary';
import dbConnect from '@/app/lib/mongoose';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';


export async function generateStaticParams() {
  await dbConnect();
  const works = await WorkModel.find({});
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const work = await fetchWork(slug);

  if (!work) {
      return notFound();
  }

  return {
      title: work.title_seo,
      description: work.description_seo,
      openGraph: {
          title: work.title_seo,
          description: work.description_seo,
          type: 'website'
      }
  };
}  
const Page = async ({ params }) => {
  await dbConnect();
  const { slug } = params;
  const work = await WorkModel.findOne({ slug });

  if (!work) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Work not found</h1>
      </div>
    );

    
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <h2 className="text-xl mb-2 text-gray-700">{work.slug}</h2>
      <p className="mb-4 text-gray-600">{work.texte}</p>
      <p className="mb-2 text-gray-500">{work.description_seo}</p>
      <h3 className="text-lg font-semibold mb-4">{work.title_seo}</h3>
      <div className="mb-8">
        <Image
          src={work.imgId}
          alt={work.title}
          width={599}
          height={431}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Page;
