import MainPageBlogPosts from './MainPageBlogPosts';
import MainPageRecommendedProducts from './MainPageRecommendedProducts';
import image from '../../../public/bannersketch3.png';
import './mainPage.css';

const MainPage = ({data}) => {
  const articles = data.nodes[0]?.articles;

  return (
    <div>
      <img src={image} className="mainPage-image" alt="Header" />
      <MainPageRecommendedProducts products={data.recommendedProducts} />
      {articles && <MainPageBlogPosts articles={articles} />}
    </div>
  );
};

export default MainPage;
