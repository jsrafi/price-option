import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const GymPrices = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Access during off-peak hours"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "features": [
                "24/7 gym access",
                "Locker room access",
                "Free fitness assessment",
                "Group fitness classes",
                "Discount on personal training"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 80,
            "features": [
                "24/7 gym access",
                "Personalized workout plan",
                "Unlimited group fitness classes",
                "Sauna and steam room access",
                "Monthly personal training session",
                "Nutritional consultation"
            ]
        }
    ]

    return (
        <div className="max-w-[1200px] mx-auto">
            <h3 className="text-5xl font-semibold text-center mt-10">Best price in town</h3>
            <div className=" grid md:grid-cols-3 mt-10 gap-10">
                {
                    GymPrices.map(gymPrice => <PriceOption key={gymPrice.id} gymPrice={gymPrice}></PriceOption>)
                }
            </div>


        </div>
    );
};

export default PriceOptions;