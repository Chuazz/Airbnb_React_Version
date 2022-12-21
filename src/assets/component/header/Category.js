function Category({type}){
    return (
        <div className="category__item">
            <div className="row flex-column ali-center">
                <div>
                    <img src={type.image} />
                </div>

                <div>
                    <p>{type.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Category;