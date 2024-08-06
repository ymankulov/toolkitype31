 interface IElement {
  el: IProduct;
}
const ProductCart = ({ el }: IElement) => {
  return (
    <div>
      <div className="container">
        <div className="w-[300px] h-[350px] bg-white shadow-2xl flex items-center justify-center py-3 px-5 flex-col">
          <img
            src={el.image}
            alt=""
            className="w-[200px] h-[200px] object-contain"
          />
          <div className="flex items-start flex-col gap-2 my-[10px]">
            <h1 className="text-[13px] text-black">{el.title}</h1>
            <h1 className="text-[13px] text-black">{el.category}</h1>
            <h1 className="text-[20px] text-black">$ {el.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
