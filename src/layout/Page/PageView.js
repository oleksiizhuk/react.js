import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import styles from '../../scss/layout/Page.module.scss';

export default function PageView({ children }) {
  const { t } = useTranslation();
  return (
    <div className={styles.app}>
      <Header
        message={t('welcome')}
      />
      {children}
    </div>
  );
}

PageView.propTypes = {
  children: PropTypes.element.isRequired
};
