import SideMenu from './SideMenu.jsx';
import Header from './Header';

export default function Layout({ children }) {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <Header />
      <div className='d-flex align-items-stretch'>
        <div className='sidebar py-3' id='sidebar'>
          <SideMenu />
        </div>
        <div className='page-holder bg-gray-100'>
          <div className='px-lg-4 px-xl-5 container-fluid'>{children}</div>
          <footer className='footer bg-white shadow align-self-end py-3 px-xl-5 w-100'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='text-center text-md-start fw-bold col-md-6'>
                  <p className='mb-2 mb-md-0'>Cards Admin © {getCurrentYear}</p>
                </div>
                <div className='text-center text-md-end text-gray-400 col-md-6'>
                  <p className='mb-0'>version 1.0.0</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
