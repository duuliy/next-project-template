import dynamic from "next/dynamic"
import { loadRemote } from '@module-federation/runtime'

const Header = dynamic(() => loadRemote("fe1/header"), { ssr: false })
// const Header = dynamic(() => import("fe1/header"), { ssr: false })

const HeaderWrap = ({ name = 'world' }) => {
  return (
    <>
        <Header name='duuliy111' />
        wrapName:
        {name}
    </>
  );
};

export default HeaderWrap;
