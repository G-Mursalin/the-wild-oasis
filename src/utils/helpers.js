import { formatDistance, parseISO } from 'date-fns';
import { supabaseUrl } from '../services/supabase';
import { differenceInDays } from 'date-fns/esm';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

// Formatting currency to USD
export const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );

// Creating unique image name and path
export const createImagePath = (imageName, bucketName) => {
  const uniqueImageName = `${imageName}-${Math.random()}`.replaceAll('/', '');

  const imagePath = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${uniqueImageName}`;

  return { uniqueImageName, imagePath };
};

// Calculate Date distance
export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');

// Set the last second of the day
export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};
