export default function Header() {
  return (
    <header>
      <nav className='px-4 py-2 shadow navbar navbar-expand-lg bg-white'>
        <a className='sidebar-toggler text-gray-500 me-4 me-lg-5 lead' href='#'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='align-left'
            className='svg-inline--fa fa-align-left fa-w-14 '
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='currentColor'
              d='M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'
            />
          </svg>
        </a>

        <span className='fw-bold text-uppercase text-base navbar-brand'>Cards Backoffice</span>

        <div className='ms-auto d-flex align-items-center mb-0'>
          <strong className='mx-2'>Потребител: </strong> web developer | Изход
        </div>
      </nav>
    </header>
  );
}
