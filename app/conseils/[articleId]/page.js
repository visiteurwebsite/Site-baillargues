import { ArrowLeftIcon } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../../../src/components/UI/shadcn/Badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../../src/components/UI/shadcn/Card';
import { articles } from '../../../src/data/articles';

export default function ArticlePage({ params }) {
  const article = articles.find((article) => article.id === params.articleId);
  return (
    <>
      <Head>
        <title>{article.title} - Clinique Vétérinaire de Baillargues</title>
        <meta name="description" content={article.introduction} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.introduction} />
        <meta property="og:image" content={article.image} />
        <meta
          property="og:url"
          content={`https://votresite.com/conseils/${params.articleId}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container relative mx-auto max-w-4xl p-4">
        <Link
          href="/conseils"
          className="mb-4 flex items-center text-primary hover:underline"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Retour aux articles
        </Link>
        <Card>
          <CardHeader className="relative">
            <div className="relative">
              <div className="absolute top-10 z-10 mb-4 flex w-full items-start justify-around">
                <CardTitle className="text-3xl font-bold ">
                  {article.title}
                </CardTitle>
                <Badge>{article.category}</Badge>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="h-64 w-full object-cover"
                  priority
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none space-y-4">
              {article.sections.map((section, index) => (
                <div className="space-y-2" key={index}>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <p className="text-lg">{section.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/conseils" className="text-primary hover:underline">
              Retour aux articles de conseils
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}