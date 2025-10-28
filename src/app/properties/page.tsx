"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldLabel,
  FieldGroup,
} from "@/components/ui/field";

export default function Properties() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    homeType: "Multi Family",
    units: "",
    beds: "",
    baths: "",
    squareFeet: "",
    lotSizeSquareFeet: "",
    listPrice: "",
    yearBuilt: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property form submitted:", formData);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      address: "",
      city: "",
      state: "",
      zip: "",
      homeType: "Multi Family",
      units: "",
      beds: "",
      baths: "",
      squareFeet: "",
      lotSizeSquareFeet: "",
      listPrice: "",
      yearBuilt: "",
    });
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight py-4">Properties</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">New property</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Address</FieldLabel>
                    <Input 
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>City</FieldLabel>
                    <Input 
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>State</FieldLabel>
                    <Input 
                      placeholder="State"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>ZIP</FieldLabel>
                    <Input 
                      placeholder="ZIP"
                      value={formData.zip}
                      onChange={(e) => handleInputChange("zip", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Home Type</FieldLabel>
                    <Select value={formData.homeType} onValueChange={(value) => handleInputChange("homeType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Home Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Single Family">Single Family</SelectItem>
                        <SelectItem value="Multi Family">Multi Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  {formData.homeType === "Multi Family" && (
                    <Field>
                      <FieldLabel>Units</FieldLabel>
                      <Input 
                        type="number"
                        placeholder="Units"
                        value={formData.units}
                        onChange={(e) => handleInputChange("units", e.target.value)}
                      />
                    </Field>
                  )}
                  <Field>
                    <FieldLabel>Bedrooms</FieldLabel>
                    <Input 
                      type="number"
                      placeholder="Bedrooms"
                      value={formData.beds}
                      onChange={(e) => handleInputChange("beds", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Bathrooms</FieldLabel>
                    <Input 
                      type="number"
                      step="0.5"
                      placeholder="Bathrooms"
                      value={formData.baths}
                      onChange={(e) => handleInputChange("baths", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Square Feet</FieldLabel>
                    <Input 
                      type="number"
                      placeholder="Square Feet"
                      value={formData.squareFeet}
                      onChange={(e) => handleInputChange("squareFeet", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Lot Size (sq ft)</FieldLabel>
                    <Input 
                      type="number"
                      placeholder="Lot Size (sq ft)"
                      value={formData.lotSizeSquareFeet}
                      onChange={(e) => handleInputChange("lotSizeSquareFeet", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>List Price</FieldLabel>
                    <Input 
                      type="number"
                      placeholder="List Price"
                      value={formData.listPrice}
                      onChange={(e) => handleInputChange("listPrice", e.target.value)}
                    />
                  </Field>
                  <Field>
                    <FieldLabel>Year Built</FieldLabel>
                    <Input 
                      type="number"
                      placeholder="Year Built"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange("yearBuilt", e.target.value)}
                    />
                  </Field>
                </div>
              </FieldGroup>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit">Add Property</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}