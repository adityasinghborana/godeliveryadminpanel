import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {
  createCategory?: () => void
}

const CreateCategoryModal = ({ createCategory }: Props) => {
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<any>(null);
  
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('object')
      if (e.target.files && e.target.files[0]) {
        setImage(URL.createObjectURL(e.target.files[0]));
      }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
  const formData = {
    categoryName: (form.elements.namedItem('name') as HTMLInputElement).value,
    description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,    
    image: image,
  };

  console.log(formData);
      createCategory && createCategory();
    };
  
  return (
    <form
          className="bg-white w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-semibold mb-2">
              Categories Name
            </label>
            <Input
              type="text"
              name="name"
              defaultValue={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Restaurant"
              className="w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-semibold mb-2">
                Description
              </label>
              <Textarea
                name="description"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="w-full"
                rows={4}
              />
            </div>

            <div className="w-full">
              <label className="block text-sm font-semibold mb-2">
                Upload Image{" "}
                <span className="text-xs">(Aspect Ratio - 4:3)</span>
              </label>
              <div className="border rounded-lg  h-fit min-h-36 flex items-center justify-center">
                {image ? (
                  <Image
                    src={image}
                    alt="Uploaded Image"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <span className="text-gray-400">No image uploaded</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2"
              />
            </div>
          </div>
          <div className='flex justify-center'>
          <Button type="submit" className="bg-primary text-white">
            Create
          </Button>
          </div>
        </form>
  )
}

export default CreateCategoryModal