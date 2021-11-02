import NXBreadcrumbs from 'nextjs-breadcrumbs';
import { useTranslation } from 'react-i18next';

export default function Breadcrumbs() {
  const { t } = useTranslation();

  return (
    <NXBreadcrumbs
      containerClassName='breadcrumb'
      inactiveItemClassName='breadcrumb-item'
      activeItemClassName='breadcrumb-item active'
      useDefaultStyle
      rootLabel={t('homeTitle')}
      transformLabel={(title) => t(title)}
    />
  );
}
