import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ gymPrice }) => {
    const { name, price, features,id } = gymPrice
    return (
        
            <div className={`${id===3? 'bg-amber-500': `${id === 1? 'bg-blue-600':'bg-purple-600'}`} text-white rounded-md pt-5  flex flex-col gap-6 mb-4 px-6 pb-4 mx-2`}>

                <h1 className='text-7xl text-center'>${price}<span className='text-2xl'>/Month</span> </h1>
                <h3 className='text-3xl text-center'>{name}</h3>
                <hr />
                <div className='text-black font-bold flex-grow'>
                    {
                        features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                    }
                </div>
                <button className='bg-green-500 w-full rounded-lg py-2 hover:bg-green-950'>Buy Now</button>


            </div>
       
    );
};

PriceOption.propTypes =
{
    gymPrice: PropTypes.object
}

export default PriceOption;