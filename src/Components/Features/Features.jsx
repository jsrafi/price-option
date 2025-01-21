import PropTypes from 'prop-types';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Features = ({feature}) => {
    return (
        <div className='mb-3 '>
            <p className='flex gap-2 items-center'><IoCheckmarkDoneCircle className='text-green-500 text-xl'></IoCheckmarkDoneCircle>{feature}</p>
        </div>
    );
};

Features.propTypes=
{
    feature: PropTypes.string
}

export default Features;