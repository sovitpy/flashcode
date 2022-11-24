import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30vh',
        flexWrap: 'wrap',
      }}
      className="loader"
    >
      <TailSpin className="dotloader" color={'#ec1a32'} size={100} />
    </div>
  );
};

export default Loader;
