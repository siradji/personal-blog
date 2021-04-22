import clsx from 'clsx';
import { HeaderLinks } from 'components/blocks/HeaderLinks';
import { Menu } from './MenuIcon';

export const SideBar = ({ closeModal, isOpened }) => (
  <aside
    className={clsx(
      'bg-soft-blue shadow-2xl h-screen w-4/5 py-2 px-5 fixed top-0 right-0 transition duration-500 ease-in-out',
      isOpened && 'opacity-100 visible z-50',
      !isOpened && 'opacity-0 z-0 invisible',
    )}
  >
    <div>
      <Menu onClick={closeModal} />
      <HeaderLinks flow="mobile" />
    </div>
  </aside>
);
