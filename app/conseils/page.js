'use client';

import { CalendarIcon, ClockIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Badge, badgeVariants } from '../../src/components/UI/shadcn/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../src/components/UI/shadcn/Card';
import DotPattern from '../../src/components/UI/shadcn/DotPattern';
import { articles } from '../../src/data/articles';
import { cn } from '../../src/lib/utils';

export default function Conseils() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div className="container mx-auto  min-h-screen flex-col gap-4 p-4 py-28">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          ' z-0 [mask-image:linear-gradient(to_top_right,transparent,transparent,white)] '
        )}
      />

      <span className="mb-6 inline-block border-b-2 border-accent bg-gradient-to-r from-primary to-accent bg-clip-text pb-4 text-4xl font-bold tracking-tight text-transparent lg:text-6xl">
        Articles Récents
      </span>
      <p className="mb-6 text-xl">
        Découvrez nos articles pour vous aider à prendre soin de votre animal de
        compagnie.
      </p>

      <div className="mb-6">
        <label htmlFor="category-select" className="mr-2">
          Choisir une catégorie:
        </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="rounded border p-2"
        >
          <option value="">Toutes les catégories</option>
          {[...new Set(articles.map((article) => article.category))].map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Card
            key={article.id}
            className="z-20 flex flex-col border-none bg-primary shadow-lg transition-all duration-300 hover:shadow-accent/70"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="mb-2 text-textColor">
                  {article.title}
                </CardTitle>
                <Badge
                  variant="fade"
                  className="bg-white/30 px-4 py-1 dark:bg-black/60"
                >
                  {article.categoryImg}
                </Badge>
              </div>
              <CardDescription className="font-semibold text-black dark:text-textColor">
                {article.introduction}
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              {/* Espace pour du contenu supplémentaire si nécessaire */}
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-muted-foreground flex items-center text-sm">
                <CalendarIcon className="mr-1 size-4" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="text-muted-foreground flex items-center text-sm">
                <ClockIcon className="mr-1 size-4" />
                {article.readTime}
              </div>
            </CardFooter>
            <CardFooter>
              <Link
                href={`/conseils/${article.id}`}
                className={cn(
                  badgeVariants({ variant: 'outline' }),
                  'dark:bg-black/60 bg-white/30'
                )}
              >
                Lire l&apos;article
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
