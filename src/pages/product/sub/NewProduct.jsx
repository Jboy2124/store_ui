import React from "react";
import { styles } from "../../../utils/styles/styles";
import { useForm } from "react-hook-form";
import { useAddNewProductMutation } from "../../../endpoints/handlers/product-handler";

const NewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [addNewProduct] = useAddNewProductMutation();

  function submitForm(data) {
    addNewProduct(data);
    reset();
  }

  return (
    <section className="bg-red-300 font-poppins">
      <div className="container">
        <div className="h-[30vh]">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex justify-evenly items-start">
              <div className="w-full my-7 flex flex-col justify-start items-center space-y-1">
                <div className="w-full px-14">
                  <input
                    id="sku"
                    name="sku"
                    type="text"
                    placeholder="SKU"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("sku")}
                  />
                </div>

                <div className="w-full px-14">
                  <input
                    id="brand"
                    name="brand"
                    type="text"
                    placeholder="Brand"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("brand")}
                  />
                </div>

                <div className="w-full px-14">
                  <input
                    id="model"
                    name="model"
                    type="text"
                    placeholder="Model"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("model")}
                  />
                </div>

                <div className="w-full px-14">
                  <input
                    id="desc"
                    name="desc"
                    type="text"
                    placeholder="Description"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("desc")}
                  />
                </div>
              </div>
              <div className="w-full my-7 flex flex-col justify-start items-center space-y-1">
                <div className="w-full px-14">
                  <input
                    id="color"
                    name="color"
                    type="text"
                    placeholder="Color"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("color")}
                  />
                </div>

                <div className="w-full px-14">
                  <input
                    id="rom"
                    name="rom"
                    type="text"
                    placeholder="ROM"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("rom")}
                  />
                </div>

                <div className="w-full px-14">
                  <input
                    id="ram"
                    name="ram"
                    type="text"
                    placeholder="RAM"
                    className="w-full px-2 py-2 text-[14px] outline-none"
                    {...register("ram")}
                  />
                </div>
                <div className="w-full px-14 text-end">
                  <button className={styles.btnSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
