import { PAGE_SIZE } from "../utils/constants";
import { createImagePath } from "../utils/helpers";
import supabase from "./supabase";

// Get All Cabins
export async function getCabins({ page }) {
  let query = supabase.from("cabins").select("*", { count: "exact" });

  // Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return { data, count };
}

// Delete a Cabin Via ID
export async function deleteCabin(id) {
  // Get storage image path before delete cabin
  const { data: deleteCabinImagePath } = await supabase
    .from("cabins")
    .select("image")
    .eq("id", id);

  // Delete Cabin
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  // After delete cabin also delete cain image from storage
  const imageUrl = deleteCabinImagePath[0].image;
  const imageName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

  await supabase.storage.from("cabin-images").remove([imageName]);

  return data;
}

// Create Cabin
export async function createCabin(newCabin) {
  const { uniqueImageName, imagePath } = createImagePath(newCabin.image.name);
  // 1. Create Cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  // Throw Error
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload Image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(uniqueImageName, newCabin.image);

  // If any error for Image upload then delete cabin too
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);

    console.error(storageError);
    throw new Error(
      "Cabin image could not be created and the cabin was not created"
    );
  }

  return data;
}

//Edit Cabin
export async function editCabin(newCabin) {
  let newImagePath = newCabin.image;

  if (typeof newCabin.image != "string") {
    // 1. Create image path
    const { uniqueImageName, imagePath } = createImagePath(newCabin.image.name);
    newImagePath = imagePath;

    // 2. Upload New Image
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(uniqueImageName, newCabin.image);
    // If any error for Image upload
    if (storageError) {
      console.log(storageError);
      throw new Error("New cabin image could not be uploaded");
    }

    // 3. Delete old image from storage
    // Get storage image path before update cabin image
    const { data: previousCabinImagePath } = await supabase
      .from("cabins")
      .select("image")
      .eq("id", newCabin.id);

    const imageUrl = previousCabinImagePath[0].image;
    const imageName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

    await supabase.storage.from("cabin-images").remove([imageName]);
  }

  // Update a Cabin
  const { data, error } = await supabase
    .from("cabins")
    .update({ ...newCabin, image: newImagePath })
    .eq("id", newCabin.id);

  // Throw Error
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be updated");
  }

  return data;
}
