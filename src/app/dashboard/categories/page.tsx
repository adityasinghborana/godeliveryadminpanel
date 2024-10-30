"use client";
import CustomModal from "@/components/globals/modal/customModal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/lib/modal.provider";
import CategoryCard from "../../../components/categories/CategoryCard";
import CreateCategoryModal from "../../../components/modals/CreateCategoryModal";
import { useState } from "react";

const Page = () => {
  const [categories, setCategories] = useState([
    {
      title: "Restaurant",
      description: "All Food Delivery Items",
      imageSrc: "/restaurant.png",
    },
    {
      title: "Grocery",
      description: "All Grocery Delivery Items",
      imageSrc: "/grocery.png",
    },
    {
      title: "Medication",
      description: "All Medication Delivery Items",
      imageSrc: "/medicine.png",
    },
    {
      title: "Package",
      description: "All PArcel Delivery Items",
      imageSrc: "/package.png",
    },
  ]);
  const [deleteMode, setDeleteMode] = useState(false); // Toggle delete mode
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]); // Track selected categories

  const { setOpen } = useModal();

  const handleSelect = (index: number) => {
    if (selectedCategories.includes(index)) {
      setSelectedCategories((prev) =>
        prev.filter((categoryIndex) => categoryIndex !== index)
      );
    } else {
      setSelectedCategories((prev) => [...prev, index]);
    }
  };

  const handleDelete = () => {
    const remainingCategories = categories.filter(
      (_, index) => !selectedCategories.includes(index)
    );
    console.log("Deleted categories:", selectedCategories);
    console.log("Remaining categories:", remainingCategories);
    setCategories(remainingCategories);
    // Reset selected and delete mode
    setSelectedCategories([]);
    setDeleteMode(false);
  };

  const CreateCategory = () => {
    setOpen(
      <CustomModal title="Create Category">
        <CreateCategoryModal />
      </CustomModal>
    )
  }

  return (
    <div>
    <div className="flex justify-between">
      <div className="bg-white border-2 shadow-md rounded-2xl py-2 px-4">Total Categories: {categories.length}</div>
      <div className="flex gap-4">
        {deleteMode ? (
          <>
            <Button variant="secondary" onClick={() => setDeleteMode(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Category
            </Button>
          </>
        ) : (
          <>
            <Button variant="destructive" onClick={() => setDeleteMode(true)}>
              Delete
            </Button>
            <Button className="bg-primary text-white" onClick={CreateCategory}>Create Category</Button>
          </>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          description={category.description}
          imageSrc={category.imageSrc}
          deleteMode={deleteMode}
          isSelected={selectedCategories.includes(index)}
          onSelect={() => handleSelect(index)}
        />
      ))}
    </div>
  </div>
  );
};

export default Page;
