export const filterDormitories = (dormitories, search, hasWiFi, hasMeal) => {
  console.log("hasWiFi", hasWiFi);

  return dormitories.filter((item) => {
    const matchesWiFi = hasWiFi ? item.hasWiFi : true;
    const matchesMeal = hasMeal ? item.hasMeal : true;
    const matchesName = item.name.toLowerCase().includes(search.toLowerCase());

    return matchesWiFi && matchesMeal && matchesName;
  });
};
