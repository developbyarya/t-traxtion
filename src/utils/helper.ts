export const formatEpochWithHourtoWithout = (epoch: number) => {
  const date1 = new Date(epoch);
  return new Date(
    date1.getUTCFullYear(),
    date1.getUTCMonth(),
    date1.getUTCDate()
  ).getTime();
};
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  // Radius of the Earth in meters
  const earthRadius = 6371000; // approximately 6,371 km

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Differences in latitude and longitude
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Haversine formula
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate the distance
  const distance = earthRadius * c;

  return distance;
}

export function getTotalDistance(arr) {
  let total = 0;

  function rec(i, len) {
    if (len - 2 == i) {
      return;
    }
    const [lat1, lon1] = arr[i];
    const [lat2, lon2] = arr[i + 1];

    total += haversineDistance(lat1, lon1, lat2, lon2);

    rec(i + 1, len);
  }
  rec(0, arr.length);
  return total;
}
