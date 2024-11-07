import { CalendarIcon, ClockIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge, badgeVariants } from '../../src/components/UI/shadcn/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../src/components/UI/shadcn/Card';
import { articles } from '../../src/data/articles';

export const metadata = {
  title: 'Conseils',
  description:
    'La clinique vétérinaire de Baillargues vous propose des conseils pour la santé et le bien-être de vos animaux'
};

export default function Conseils() {
  return (
    <div className="container mx-auto min-h-screen p-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Articles Récents</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="mb-2 text-xl">{article.title}</CardTitle>
                <Badge>{article.category}</Badge>
              </div>
              <CardDescription>{article.introduction}</CardDescription>
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
                className={badgeVariants({ variant: 'outline' })}
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
