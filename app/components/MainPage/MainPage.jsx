import MainPageBlogPosts from './MainPageBlogPosts';
import image from '../../../public/bannerAvif.avif';
import './mainPage.css';
import MainPageProductFragment from './MainPageProductFragment';
import MainPageHero from './MainPageHero';

const MainPage = ({recommendedProducts, blogs, bestSellers}) => {
  const articles = blogs?.articles;

  return (
    <div className="main-page">
      <MainPageHero image={image} />
      {recommendedProducts && (
        <MainPageProductFragment
          title="Best deals"
          subtitle="Get started with our kits"
          products={recommendedProducts}
        />
      )}
      {bestSellers && (
        <MainPageProductFragment
          title="Our bestsellers"
          products={bestSellers}
        />
      )}
      {articles && <MainPageBlogPosts articles={articles} />}
    </div>
  );
};

export default MainPage;
