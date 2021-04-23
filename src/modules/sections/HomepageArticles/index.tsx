import { SectionHeader } from 'modules/blocks/sectionHeader';
import mockData from 'mock/data/articles.json';
import GeneralArticle from 'modules/blocks/cards/Articles/GeneralArticle';

export const HomepageArticles = () => (
  <section>
    <SectionHeader
      heading=" Top Articles this month"
      lineColor="text-ui-purple"
      headingColor="text-ui-purple"
    />
    <div className="grid grid-cols-3 gap-4">
      {mockData.map(mock => (
        <GeneralArticle data={mock} />
      ))}
    </div>
  </section>
);
