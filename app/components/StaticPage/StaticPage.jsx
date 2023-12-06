import './StaticPage.css';
import './ContactUsPage.jsx';

const StaticPage = ({page}) => {
  if (page.handle === 'contact') {
    return <ContactUsPage page={page} />;
  } else {
    return (
      <div className="page">
        <header>
          <h1 className="page-title">{page.title}</h1>
        </header>
        <main dangerouslySetInnerHTML={{__html: page.body}} />
      </div>
    );
  }
};

export default StaticPage;
