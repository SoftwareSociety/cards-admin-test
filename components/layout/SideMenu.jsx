import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';

export default function SideMenu() {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <ul className='list-unstyled'>
      <li className='sidebar-list-item'>
        <Link href='/' className='sidebar-link text-muted'>
          <a className={router.pathname == '/' ? 'sidebar-link text-muted active' : 'sidebar-link text-muted'}>
            <span className='sidebar-link-title'>{t('homeTitle')}</span>
          </a>
        </Link>
      </li>
      <li className='sidebar-list-item'>
        <Link href='/create-cards' className='sidebar-link text-muted' activeClassName='active'>
          <a
            className={
              router.pathname == '/create-cards' ? 'sidebar-link text-muted active' : 'sidebar-link text-muted'
            }
          >
            <span className='sidebar-link-title'>{t('createCardTitle')}</span>
          </a>
        </Link>
      </li>
      <li className='sidebar-list-item'>
        <Link href='/created-cards' className='sidebar-link text-muted' activeClassName='active'>
          <a
            className={
              router.pathname == '/created-cards' ? 'sidebar-link text-muted active' : 'sidebar-link text-muted'
            }
          >
            <span className='sidebar-link-title'>{t('createdCardTitle')}</span>
          </a>
        </Link>
      </li>
    </ul>
  );
}
