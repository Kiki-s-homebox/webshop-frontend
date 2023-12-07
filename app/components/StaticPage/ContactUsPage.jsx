import './ContactUsPage.css';
const ContactPage = ({page}) => {
  return (
    <div className="page">
      <header>
        <h1 className="page-title">{page.title}</h1>
      </header>
      <form>
        <div class="form-group">
          <input type="text" id="form-name" placeholder=" " />
          <label for="form-name">Name</label>
        </div>
        <div class="form-group">
          <input type="email" id="form-email" placeholder=" " />
          <label for="form-email">Email</label>
        </div>
        <div class="form-group">
          <input type="text" id="form-phonenumber" placeholder=" " />
          <label for="form-phonenumber">Phone Number</label>
        </div>
        <div class="form-group">
          <textarea id="form-comment" placeholder=" " />
          <label for="form-comment">Comment</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
