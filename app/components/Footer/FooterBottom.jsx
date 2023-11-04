import {Link} from '@remix-run/react';

import FooterPaymentOptions from './FooterPaymentOptions';

const FooterBottom = ({shop}) => {
  const {name, paymentSettings} = shop;
  return (
    <div className="footer-bottom">
      <FooterPaymentOptions paymentOptions={paymentSettings} />
      <div className="footer-bottom-content">
        <Link key="page-name" prefetch="intent" preventScrollReset to="/">
          {name}
        </Link>
        <a
          href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
          target="_blank"
        >
          Power By shopify
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
