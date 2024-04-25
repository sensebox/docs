import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="flex flex-col">
          {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
