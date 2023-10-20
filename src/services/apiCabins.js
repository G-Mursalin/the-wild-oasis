import supabase, { supabaseUrl } from "./supabase";

// Get All Cabins
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
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
  const imageName = `${newCabin.image.name}-${Math.random()}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create Image
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
    .upload(imageName, newCabin.image);

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
