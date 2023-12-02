import MainPageBlogPosts from './MainPageBlogPosts';
import image from '../../../public/bannersketch4.png';
import './mainPage.css';
import MainPageProductFragment from './MainPageProductFragment';

const MainPage = ({recommendedProducts, blogs, bestSellers}) => {
  const articles = blogs?.articles;

  return (
    <div className="main-page">
      <img src={image} className="mainPage-image" alt="Header" />
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
