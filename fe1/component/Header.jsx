const Header = ({ name = 'world' }) => {
  return (
    <div
      style={{
        background: 'black',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '24px',
        paddingLeft: '15px'
      }}>
      hello {name}
    </div>
  );
};

export default Header;
