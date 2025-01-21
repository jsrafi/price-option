import PropTypes from 'prop-types';

const Navigation = ({route}) => {
    return (
        
      <li className='hover:bg-white/60 px-2 py-1 rounded-lg '>{route.name}</li>
    );
};

Navigation.propTypes =
{
    route: PropTypes.object
}
export default Navigation;


