"use client";
import React, { useEffect, useState } from "react";
import { aeroPay3, chevronDefault, chevronActive } from "@/public/assets";
import Image from "next/image";
import Toast from "./Toast";

const Products = () => {
  const [user, setData] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("recent");
  const [sortedProducts, setSortedProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = window.innerWidth >= 768 ? 16 : 8;
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1ZmZjZmM1N2M0ZjAwMjBiYmNjMDMiLCJpYXQiOjE2ODY1MDMzNzV9.TUgUA08fIRH32H0G42ATn7oZIlDxghLXzdG5CjZb76A";

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/user/me",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        console.log("Error al obtener los datos del usuario.");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/products",
        {
          headers: {
            accept: "application/json",
            content: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDg1ZmZjZmM1N2M0ZjAwMjBiYmNjMDMiLCJpYXQiOjE2ODY1MDMzNzV9.TUgUA08fIRH32H0G42ATn7oZIlDxghLXzdG5CjZb76A",
          },
        }
      );
      const json = await res.json();
      setProducts(json);
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    // Apply sorting when products or selectedCategory change
    if (products) {
      let filteredProducts = products;
      if (selectedCategory !== "all") {
        filteredProducts = products.filter(
          (product) => product.category === selectedCategory
        );
      }

      let sorted = filteredProducts;
      if (sortType === "lowest") {
        sorted = [...filteredProducts].sort((a, b) => a.cost - b.cost);
      } else if (sortType === "highest") {
        sorted = [...filteredProducts].sort((a, b) => b.cost - a.cost);
      } else if (sortType === "recent") {
        sorted = [...filteredProducts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      }

      setSortedProducts(sorted);
      setCurrentPage(1);
    }
  }, [products, selectedCategory, sortType]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  const displayedProducts = sortedProducts || products;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    displayedProducts &&
    displayedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((displayedProducts?.length || 0) / itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleRedeem = async (productId) => {
    setIsLoading(true);
  
    try {
      const res = await fetch(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId }),
        }
      );
  
      if (res.ok) {
        console.log("Producto redimido exitosamente.");
        setToastMessage("Product redeemed successfully.");
        setToastType("success");
        fetchData();
      } else {
        console.log("Error al redimir el producto.");
        setToastMessage("Error redeeming the product.");
        setToastType("error");
      }
    } catch (error) {
      console.log("Error en la solicitud:", error);
      setToastMessage("An error occurred.");
      setToastType("error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="flex flex-wrap flex-col mt-[80px] px-[20px]">
      <h2 className="text-center font-[900] text-[32px] tablet:text-left">
        <span className="text-brand-default">TECH</span> PRODUCTS
      </h2>

      {toastMessage && <Toast message={toastMessage} type={toastType} />}

      {products && (
        <div className="mb-[16px] flex flex-col justify-center rounded-[16px] border border-300">
          <label className="text-600 text-[16px] hidden md:flex">
            Filter by:
          </label>
          <select
            id="categorySelect"
            className="py-[16px] pl-[24px] font-[600] border-none bg-transparent w-full focus:outline-none"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">All Products</option>
            <option value="Audio">Audio</option>
            <option value="Cameras">Cameras</option>
            <option value="Drones">Drones</option>
            <option value="Gaming">Gaming</option>
            <option value="Laptops">Laptops</option>
            <option value="Monitors & TV">Monitors & TV</option>
            <option value="PC Accessories">PC Accessories</option>
            <option value="Phone Accessories">Phone Accessories</option>
            <option value="Phones">Phones</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Tablets & E-readers">Tablets & E-readers</option>
          </select>
        </div>
      )}
      <div className="mb-[16px] flex flex-wrap gap-4 justify-center tablet">
        <button
          className={`${
            sortType === "recent" ? "bg-brand-default" : "bg-300"
          } rounded-[12px] px-[16px] py-[8px]`}
          onClick={() => handleSortTypeChange("recent")}
        >
          <p
            className={`${
              sortType === "recent" ? "text-white" : "text-brand-default"
            }`}
          >
            Most Recent
          </p>
        </button>
        <button
          className={`${
            sortType === "lowest" ? "bg-brand-default" : "bg-300"
          } rounded-[12px] px-[16px] py-[8px]`}
          onClick={() => handleSortTypeChange("lowest")}
        >
          <p
            className={`${
              sortType === "lowest" ? "text-white" : "text-brand-default"
            }`}
          >
            Lowest Price
          </p>
        </button>
        <button
          className={`${
            sortType === "highest" ? "bg-brand-default" : "bg-300"
          } rounded-[12px] px-[16px] py-[8px]`}
          onClick={() => handleSortTypeChange("highest")}
        >
          <p
            className={`${
              sortType === "highest" ? "text-white" : "text-brand-default"
            }`}
          >
            Highest Price
          </p>
        </button>
      </div>
      {currentItems &&
        currentItems.map((product) => (
          <div key={product.id}>
            <div className="w-[348px] h-[344px] rounded-[16px] box border border-300 flex flex-col justify-center items-center mx-auto my-[48px]">
              <img src={product.img.url} alt={product.name} />
              <div className="rounded-b-[16px] text-left flex flex-col justify-start border-t border-300 w-full p-[24px] pt-[14px]">
                <p className="text-900 text-[18px]">{product.name}</p>
                <p className="text-600 text-[14px]">{product.category}</p>
              </div>
            </div>
            <button
        className={`flex flex-row justify-center text-center items-center ${
          user?.points < product.cost ? "bg-red text-gray-500 cursor-not-allowed" : "bg-brand-default text-white"
        } w-full py-[16px] rounded-[16px] gap-[6px]`}
        onClick={() => handleRedeem(product._id)}
        disabled={user?.points < product.cost} // Desactivar el botón si el usuario no tiene suficientes puntos
      >
        Redeem for{" "}
        <Image src={aeroPay3} alt={aeroPay3} width={20} height={20} /> ${" "}
        {product.cost}
      </button>
          </div>
        ))}
      <ul className="flex justify-center mb-[24px] items-center mt-[64px]">
        <li className="bg-brand-light w-[36px] h-[36px] flex justify-center items-center rounded-[8px] mr-[24px] cursor-pointer">
          <a
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
            disabled={currentPage === 1}
          >
            <Image
              src={currentPage === 1 ? chevronDefault : chevronActive}
              alt="Previous"
              className="-rotate-180"
              width={20}
              height={20}
            />
          </a>
        </li>

        <li className="page-item">
          <p className="page-link">
            Page {currentPage} of {totalPages}
          </p>
        </li>

        <li className="bg-brand-light w-[36px] h-[36px] flex justify-center items-center rounded-[8px] ml-[24px] cursor-pointer">
          <a
            onClick={() => {
              if (currentPage < totalPages) {
                paginate(currentPage + 1);
              }
            }}
            disabled={currentPage === totalPages || currentPage >= totalPages}
          >
            <Image
              src={currentPage === totalPages ? chevronDefault : chevronActive}
              alt="Next"
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
      <div className="mb-[80px] text-[16px] text-brand-default text-center justify-center">
        {Math.min(indexOfLastItem, displayedProducts?.length || 0)} of{" "}
        {displayedProducts?.length || 0} products
      </div>
    </section>
  );
};

export default Products;
