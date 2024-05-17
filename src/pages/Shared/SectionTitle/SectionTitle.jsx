

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-12 w-3/12 mx-auto">
            <p className="text-yellow-500 "> ---{subHeading}--- </p>
            <h2 className="text-3xl uppercase border-y-4 p-5"> {heading} </h2>
        </div>
    );
};

export default SectionTitle;