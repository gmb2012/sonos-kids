import PropTypes from 'prop-types';
import Head from 'next/head';
import classNames from 'classnames';
import Menu from './menu';
import usePages from '../hooks/usePages';

export default function Layout({ children }) {
  const { currentPage } = usePages();

  if (typeof currentPage !== 'undefined') {
    return (
      <div>
        <Head>
          <title>
            Sonos Kids Controller -
            {currentPage.title}
          </title>
        </Head>

        <section className="section">
          <div className="container">
            <Menu />

            <h1 className="title is-size-1 is-capitalized">
              <span className="icon mr-3"><i className={classNames('fad', currentPage.icon)} aria-hidden="true" /></span>
              <span>{currentPage.title}</span>
            </h1>
            {children}
          </div>
        </section>
      </div>
    );
  }
  return null;
}

// prop type check
PropTypes.checkPropTypes({children}, { children: PropTypes.symbol() });


Layout.defaultProps = {
  children: null,
};
