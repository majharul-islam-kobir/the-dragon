import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../app/features/categories/categorySlice.js";
import { useEffect, useState } from "react";

const Sideber = () => {
  const dispatch = useDispatch();
  const { categories = [], isLoading, isError, errorMessage } = useSelector(
    (state) => state.categories
  );

  const [additionalCategories, setAdditionalCategories] = useState([]);
  const [isAdditionalLoading, setIsAdditionalLoading] = useState(false);
  const [additionalError, setAdditionalError] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const fetchAdditionalCategories = async () => {
      setIsAdditionalLoading(true);
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a"
        );
        const data = await response.json();
        if (data && data.data) {
          setAdditionalCategories(data.data);
        } else {
          setAdditionalError("Failed to fetch additional categories");
        }
      } catch (error) {
        setAdditionalError("An error occurred while fetching additional categories");
      } finally {
        setIsAdditionalLoading(false);
      }
    };

    fetchAdditionalCategories();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {errorMessage}</p>;

  // Remove duplicate categories based on category_id
  const uniqueCategories = Array.from(
    new Map(categories.map((category) => [category.category_id, category])).values()
  );

  return (
    <div className="p-4">
      <ul>
        <h3 className="font-bold text-lg mb-3">Main Categories</h3>
        {uniqueCategories.map((category) => (
          <li className="my-3" key={category.category_id}>
            {category.category_name}
          </li>
        ))}
      </ul>

      <ul>
        <h3 className="font-bold text-lg mt-5 mb-3">Additional Categories</h3>
        {isAdditionalLoading && <p>Loading additional categories...</p>}
        {additionalError && <p className="text-red-500">{additionalError}</p>}
        {additionalCategories.map((item, index) => (
          <li className="my-3 items-center" key={index}>
            <img
              src={item.image_url}
              alt={item.title}
              className="w-50 h-40 object-cover rounded mr-4 "
            />
            {/* শিরোনাম */}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sideber;
