import clsx from 'clsx';
import { HeaderLinks } from 'modules/blocks/HeaderLinks';
import { Menu, Close } from 'modules/atoms/headerIcons/index';

export const SideBar = ({ closeModal, isOpened }) => (
  <aside
    className={clsx(
      'bg-main-blue shadow-2xl h-screen  w-3/5 py-2 px-5 fixed top-0 right-0 transition duration-1000 ease-in-out',
      isOpened && 'opacity-100 visible on-top',
      !isOpened && 'opacity-0 z-0 invisible',
    )}
  >
    <div>
      <Close onClick={closeModal} />
      <HeaderLinks flow="mobile" />
    </div>
  </aside>
);
