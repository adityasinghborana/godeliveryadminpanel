// components/CreateRiderForm.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { UploadIcon } from "lucide-react";

interface FormValues {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  mobileNumber: string;
  email: string;
  addressDetails: {
    houseNumber: string;
    apartment: string;
    lga: string;
  };
  vehicleDetails: {
    hasVehicle: boolean;
    manufacturer: string;
    type: string;
    licensePlate: string;
  };
  driverLicense: File | null;
  nationalID: File | null;
  guarantorDetails: {
    fullName: string;
    mobileNumber: string;
    email: string;
    address: string;
    guarantorLicense: File | null;
    guarantorNationalID: File | null;
  };
  paymentDetails: {
    accountName: string;
    accountNumber: string;
    bankName: string;
    bvn: string;
  };
}

export const CreateRiderForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-6 mb-6"
    >
      <div className="">
        <div className="grid grid-cols-4 gap-4 my-4 items-center">
          {/* Profile Photo */}
          <div className=" flex flex-col items-center mb-4">
            <div className="flex items-center justify-center mb-6">
              <Button
                variant="outline"
                className="rounded-full w-32 h-32 flex flex-col items-center justify-center space-y-2"
              >
                <UploadIcon className="text-gray-500" size={24} />
                <span className="text-sm">Upload Photo</span>
              </Button>
            </div>
          </div>

          {/* Personal Information */}
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" {...register("firstName")} />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" {...register("lastName")} />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger className="w-full" id="gender">
                    <span>Select Gender</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-4 ">
          <div>
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" {...register("dob")} />
          </div>

          <div>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" {...register("mobileNumber")} />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" {...register("email")} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4 ">
          {/* Address Details */}
          <div>
            <Label htmlFor="houseNumber">House/Flat/Block No.</Label>
            <Input
              id="houseNumber"
              {...register("addressDetails.houseNumber")}
            />
          </div>

          <div>
            <Label htmlFor="apartment">Apartment/Road/Area (Optional)</Label>
            <Input id="apartment" {...register("addressDetails.apartment")} />
          </div>

          <div>
            <Label htmlFor="lga">LGA</Label>
            <Input id="lga" {...register("addressDetails.lga")} />
          </div>
        </div>
        
        <div>
          {/* Vehicle Details */}
          <div className="col-span-2">
            <Checkbox {...register("vehicleDetails.hasVehicle")}>
              I have a Vehicle to use for delivery
            </Checkbox>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-4 ">
          <div>
            <Label htmlFor="manufacturer">Vehicle Manufacturer</Label>
            <Input
              id="manufacturer"
              {...register("vehicleDetails.manufacturer")}
            />
          </div>

          <div>
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Controller
              name="vehicleDetails.type"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger className="w-full" id="vehicleType">
                    <span>Select Vehicle Type</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div>
            <Label htmlFor="licensePlate">License Plate</Label>
            <Input
              id="licensePlate"
              {...register("vehicleDetails.licensePlate")}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 my-4 ">
          {/* Document Uploads */}
          <div className="col-span-1 border-2 border-dashed p-4 text-center">
            <Label htmlFor="driverLicense">Upload Driver’s License</Label>
            <input
              id="driverLicense"
              type="file"
              {...register("driverLicense")}
            />
          </div>

          <div className="col-span-1 border-2 border-dashed p-4 text-center">
            <Label htmlFor="nationalID">Upload National ID</Label>
            <input id="nationalID" type="file" {...register("nationalID")} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4 ">
          {/* Guarantor Details */}
          <div>
            <Label htmlFor="guarantorFullName">Guarantor Full Name</Label>
            <Input
              id="guarantorFullName"
              {...register("guarantorDetails.fullName")}
            />
          </div>

          <div>
            <Label htmlFor="guarantorMobileNumber">
              Guarantor Mobile Number
            </Label>
            <Input
              id="guarantorMobileNumber"
              {...register("guarantorDetails.mobileNumber")}
            />
          </div>

          <div>
            <Label htmlFor="guarantorEmail">Guarantor Email Address</Label>
            <Input
              id="guarantorEmail"
              {...register("guarantorDetails.email")}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="guarantorAddress">Guarantor Address</Label>
          <Input
            id="guarantorAddress"
            {...register("guarantorDetails.address")}
          />
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="col-span-1 border-2 border-dashed p-4 text-center">
            <Label htmlFor="guarantorLicense">Guarantor Driver’s License</Label>
            <input
              id="guarantorLicense"
              type="file"
              {...register("guarantorDetails.guarantorLicense")}
            />
          </div>

          <div className="col-span-1 border-2 border-dashed p-4 text-center">
            <Label htmlFor="guarantorNationalID">Guarantor National ID</Label>
            <input
              id="guarantorNationalID"
              type="file"
              {...register("guarantorDetails.guarantorNationalID")}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          {/* Payment Details */}
          <div>
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              {...register("paymentDetails.accountName")}
            />
          </div>

          <div>
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              {...register("paymentDetails.accountNumber")}
            />
          </div>

          <div>
            <Label htmlFor="bankName">Bank Name</Label>
            <Input id="bankName" {...register("paymentDetails.bankName")} />
          </div>

          <div>
            <Label htmlFor="bvn">BVN (Bank Verification Number)</Label>
            <Input id="bvn" {...register("paymentDetails.bvn")} />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-4">
          <Button
            type="submit"
            className="bg-blue-500 text-white w-full md:w-1/2"
          >
            Create Rider
          </Button>
        </div>
      </div>
    </form>
  );
};
