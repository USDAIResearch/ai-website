export const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});

export const buildChartData = (data = []) => {
  let finalObj = {};
  const labelCounts = {};

  data.forEach((item) => {
    const label = item.label;
    labelCounts[label] = (labelCounts[label] || 0) + 1;
  });

  // Create arrays for labels and values
  finalObj.labels = Object.keys(labelCounts);
  finalObj.values = Object.values(labelCounts);

  // Sort labels based on corresponding values
  finalObj.labels.sort((a, b) => {
    const countA = labelCounts[a];
    const countB = labelCounts[b];
    return countB - countA; // Sort in descending order of counts
  });

  // Limit to top 5 entries
  finalObj.labels = finalObj.labels.slice(0, 5);
  finalObj.values = finalObj.labels.map((label) => labelCounts[label]);

  return finalObj;
};

export const prepareTopicData = (mainArray, selectedId, fieldType) => {
  const matchedIds = [];
  console.log("mainArray", mainArray)
  console.log("selectedId", selectedId)
  console.log("fieldType", fieldType)
  mainArray.forEach((obj) => {
    obj[fieldType]?.forEach((data) => {
      if (data.id === selectedId) {
        matchedIds.push(obj.id);
      }
    });
  });
  return matchedIds;
};

export const getInitials = (fullName) => {
  if (!fullName) return null;
  // Split the full name into individual words
  const words = fullName.split(" ");

  // Extract the first letter of each word
  const initials = words.map((word) => word.charAt(0));

  // Join the extracted letters together
  return initials.join("");
};
