import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        ENG
      </button>
      <button 
        onClick={() => changeLanguage('ru')}
        className={i18n.language === 'ru' ? 'active' : ''}
      >
        РУС
      </button>
    </div>
  );
}

export default LanguageSwitcher;
