import { formatDistance, parseISO } from "date-fns";
import { supabaseUrl } from "../services/supabase";

// Formatting currency to USD
export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

// Creating unique image name and path
export const createImagePath = (imageName, bucketName) => {
  const uniqueImageName = `${imageName}-${Math.random()}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${uniqueImageName}`;

  return { uniqueImageName, imagePath };
};

//
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");
